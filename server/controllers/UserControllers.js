import { Webhook } from 'svix';
import userModel from '../models/userModel.js';

const clerkWebHooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      'svix-id': req.headers['svix-id'],
      'svix-signature': req.headers['svix-signature'],
      'svix-timestamp': req.headers['svix-timestamp'],
    });

    const { data, type } = req.body;

    switch (type) {
      case 'user.created': {
        const userData = {
          clerkId: data.id,
          emailId: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          profilePicture: data.image_url,
        };
        await userModel.create(userData);
        res.json({});
        break;
      }

      case 'user.updated': {
        const userData = {
          emailId: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          profilePicture: data.image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }

      case 'user.deleted': {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({});
        break;
      }

      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { clerkWebHooks };
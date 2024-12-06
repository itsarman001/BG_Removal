import { Webhook } from 'svix';
import userModel from '../models/userModel.js';

const clerkWebHook = async (req, res) => {
  try {
    // Creating a svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // checking if svix id,timestamp & signature is correct accordingly clerk webhook secrets
    await whook.verify(JSON.stringify(req.body), {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    });

    // if there are no errors
    const { data, type } = req.body;

    switch (type) {
      case 'user.created': {
        const userData = {
          clerkId: data.id,
          emailId: data.email_addresses[0].email_address,
          profilePicture: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
        };
        await userModel.create(userData);
        res.json({});

        break;
      }

      case 'user.updated': {
        const userData = {
          emailId: data.email_addresses[0].email_address,
          profilePicture: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
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

export { clerkWebHook };
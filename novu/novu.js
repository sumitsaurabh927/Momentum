import { Novu } from '@novu/node'; 
import dotenv from "dotenv";


dotenv.config();

export const getNotification = async (title,description,email,Id) => {
    const novu = new Novu(process.env.NOVU_API_KEY);

    await novu.subscribers.identify(Id, {
        email: email,
        firstName: "Subscriber"
    });
    
    await novu.trigger('momentum--L67FbJvt', {
        to: {
          subscriberId: Id,
          email: email
        },
        payload: {
            title: title,
            description: description
        }
    });
}


export const smsNotification = async (title,description,phone,Id) => {
    const novu = new Novu(process.env.NOVU_API_KEY);

    novu.trigger('sms', {
        to: {
        subscriberId: Id,
        phone: `+91${phone}`
        },
        payload: {
        title: title,
        description: description
        }
    });
}

export const inAppNotification = async (title,description,Id,message) => {
    const novu = new Novu(process.env.NOVU_API_KEY);

    await novu.subscribers.identify(Id, {
        firstName: "inAppSubscriber"
    });

    await novu.trigger('in-app', {
        to: {
            subscriberId: Id
        },
        payload: {
            title: title,
            description: description,
            message: message
        }
    });
}
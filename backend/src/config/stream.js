import {StreamChat} from "stream-chat";
import { ENV } from "../config/env.js";

const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET)

export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser(userData)
        console.log('Stream dude upserted: ', userData.name)
        return userData;
    } catch (error) {
        console.log('Error upserting Stream dude: ' + error);
    }
}

export const deleteStreamUser = async (userID) => {
    try {
        await streamClient.upsertUser(userID)
        console.log('Stream dude deleted: ', userID)
        return userData;
    } catch (error) {
        console.error('Error deleting Stream dude: ' + error);
    }
}

export const generateStreamToken = (userID) => {
    try {
        const userIdString = userID.toString();
        return streamClient.createToken(userIdString)
    } catch (error) {
        console.log('Error generating token for stream: ' +  error)
        return null
    }
}
import {StreamChat} from "stream-chat"
import {ENV} from "../config/env.js"


const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET)
export const checkStreamEnv = () => {
    return `${ENV.STREAM_API_SECRET}, ${ENV.STREAM_API_KEY}`
}
export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser(userData)
        console.log('Upserted  stream user successfully', userData.name)
    } catch (error) {
        console.error("error deleting stream user", error)
        throw new Error(error)
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await streamClient.deleteUser(userId)
        console.log(' user deleted successfully', userId)
    } catch (error) {
        console.error("error deleting stream user", error)
        throw new Error(error)
    }
}

export const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString();
        return streamClient.createToken(userIdString)
    } catch (error) {
        console.error("error deleting stream token", error)
        throw new Error(error)

    }
}
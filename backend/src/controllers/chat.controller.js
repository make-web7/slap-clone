import {generateStreamToken} from "../config/stream.js";


export const getStreamToken = async (req, res) => {
    try {
        const token = await generateStreamToken(req.auth().userID)
        res.status(200).json({token})
    } catch (error) {
        console.log("error generating streamToken", error)
        res.status(500).json({
            message: "Failed to generate stream",
        })
    }
}
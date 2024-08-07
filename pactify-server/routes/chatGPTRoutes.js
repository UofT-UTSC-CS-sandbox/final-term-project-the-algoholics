import express from "express";
import { isValidRequest, addMessageToConversation, createMesage, postChatGPTMessage } from "./chatGPTUtil.js";
import { USER_TYPES } from "./chatGPTRoles.js";
import { userAuth } from "./user/user.js"
// const { USER_TYPES } = require('./chatGPTRoles');

const router = express.Router();

router.use(userAuth);

router.post('/', async (req, res) => {
    // Validate the request object
    if (!isValidRequest(req.body)) {
        return res.status(400).json({ message: "Invalid request" });
    }
    
    //Extract message and conversation from the request object
    const { message, context, conversation = [] } = req.body;

    //Create context message
    const contextMessage = createMesage(context, USER_TYPES.SYSTEM);

    //Add user message to the conversation
    addMessageToConversation(message, conversation, USER_TYPES.USER);

    //Call postChatGPTMessage function to get the response from the API
    console.log ("Generating response for: \n", message);
    const chatGPTResponse = await postChatGPTMessage(
        contextMessage,
        conversation
    );

    //Check if there is an error with the ChatGPT API
    if (!chatGPTResponse) {
        return res.status(500).json({ message: "Error generating response" });
    }

    const {content} = chatGPTResponse;
    addMessageToConversation(content, conversation, USER_TYPES.ASSISTANT);

    return res.status(200).json({ message: conversation});
});

export default router;
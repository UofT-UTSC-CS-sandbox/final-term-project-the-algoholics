import dotenv from 'dotenv'; 
dotenv.config();
import axios from 'axios';
import Yup from 'yup';


// Define constants
const CHATGPT_END_POINT = "https://api.openai.com/v1/chat/completions";
const CHATGPT_MODEL_35 = "gpt-3.5-turbo";
const CHATGPT_MODEL_4o_MINI = "gpt-4o-mini";

const config = {
    headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
};

//Funtion to build conversation array
const buildConversation = (contextMessage, conversation) => {
    return [contextMessage].concat(conversation);
};

//Function to post message to ChatGPT API
export const postChatGPTMessage = async (contextMessage, conversation) => {
    const messages = buildConversation(contextMessage, conversation);
    const chatGPTData = {
        model: CHATGPT_MODEL_4o_MINI,
        messages: messages,
    };

    try {
        const resp = await axios.post(CHATGPT_END_POINT, chatGPTData, config);
        const data = resp.data;
        const message = data?.choices[0]?.message;
        return message;
    }
    catch (error) {
        console.error('Error fetching ChatGPT response:', error);
        return null;
    }
};

// Define the schema for the conversation object
const conversationSchema = Yup.object().shape({
    role: Yup.string().required("Role is required"),
    content: Yup.string().required("Content is required"),
});

// Define the schema for the request object
const requestSchema = Yup.object().shape({
    context: Yup.string().required(),
    message: Yup.string().required(),
    conversation: Yup.array().of(conversationSchema).notRequired(),
});

//Function to validate request object using Yup Schema
export const isValidRequest = async (request) => {
    try {
        await requestSchema.validate(request);
        return true;
    } catch (error) {
        return false;
    }
};

export const createMesage = (message, role) => {
    return {
        role: role,
        content: message,
    };
};

//Function to add a message to the conversation array
export const addMessageToConversation = (message, conversation, role) => {
    conversation.push(createMesage(message, role));
    return conversation;
};



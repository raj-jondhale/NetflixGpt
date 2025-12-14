// import OpenAI from 'openai';
// import { OPENAI_KEY } from './apikey';

// const client = new OpenAI({
//     apiKey: OPENAI_KEY,
//     dangerouslyAllowBrowser: true
//     // This is the default and can be omitted
// });

// export default client;

import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true
});

export default groq;
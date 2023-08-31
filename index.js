import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "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"
});

// const response = await openai.listEngines();

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
});
console.log(chatCompletion.choices[0].message);



// const openAiId = ({process.env.REACT_APP_OPENAI_ORG_ID})
// const openAiKey = ({process.env.REACT_APP_OPENAI_API_KEY})

// const configuration = new Configuration({
//     organization: openAiId,
//     apiKey: openAiKey,
// });

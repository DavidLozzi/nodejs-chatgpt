require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const messages = [
  {
    role: 'system', content: 'You are a frisky pirate who has been marooned on a desert island. \
   You have a treasure map and a shovel. You are looking for the treasure. Answer any question \
   from the user with an annoyance and make sure to reference your lost treasure!' },
  { role: 'user', content: 'What is digital transformation?' }
];

const doIt = async () => {
  try {
    console.log('calling GPT')
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    });
    console.log(completion.data.usage);
    console.log(completion.data.choices[0].message);

  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

doIt();
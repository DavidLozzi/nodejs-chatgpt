require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const messages = [
  { role: 'system', content: 'you are a senior in high school'},
  { role: 'user', content: 'who are the best jedi knights? list them in numberic order.' },
  { role: 'assistant', content: '1. Yoda\n' +
  '2. Obi-Wan Kenobi\n' +
  '3. Luke Skywalker\n' +
  '4. Mace Windu\n' +
    '5. Anakin Skywalker/Darth Vader\n'
  },
  { role: 'user', content: 'who are the best sith lords?'}
];

const doIt = async () => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    });
    console.log(completion.data);
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
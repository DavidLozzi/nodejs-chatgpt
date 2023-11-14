require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);
const messages = [
  { role: 'user', content: 'Summarize this content: In this high-paced session, we\'ll break down the world of GenAI, dispel a myth or two, and discuss how we can leverage the power of an LLM in our Python, Node, and Java code! We\'ll dive into prompt engineering and wrap our minds around RAG (Retrieval Augmented Generation) as the quickest way to leverage our own data in any LLM. Finally, we\'ll discuss some real-world applications of GenAI across several industries.' }
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
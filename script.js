// dependencies
const { OpenAI } = require('langchain/llms/openai');
global.ReadableStream = require('web-streams-polyfill/ponyfill/es2018');
const inquirer = require('inquirer');
require('dotenv').config();

// Creates and stores a wrapper for the OpenAI package along with basic configuration
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY, 
  temperature: 0,
  model: 'gpt-3.5-turbo'
});




const promptFunc = async () => {


  try{
    const res = await model.call("How do you capitalize all characters of a string in JavaScript?");
    console.log(res);

  }catch(err){
    console.error(err);
  }

};

promptFunc();

console.log({model});
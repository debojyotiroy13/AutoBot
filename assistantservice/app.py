import os
import sys

from llama_index import SimpleDirectoryReader
from llama_index import GPTListIndex
from llama_index import readers
from llama_index import GPTSimpleVectorIndex
from llama_index import LLMPredictor
from llama_index import PromptHelper

# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, request, jsonify
from flask_cors import CORS
# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)
CORS(app)

index = GPTSimpleVectorIndex.load_from_disk('/Users/debojroy/Documents/Projects/FAW/hackathon23/index.json')

@app.route('/askChatGPT', methods=['POST'])
def ask_chatgpt():
    data = request.json
    response = openai.Completion.create(
        model="code-davinci-002",
        prompt=data['text'],
        temperature=0,
        max_tokens=60,
        top_p=1.0,
        frequency_penalty=0.5,
        presence_penalty=0.0,
        stop=["You:"]
    )
    return response

@app.route('/askIndex', methods=['POST'])
def ask_ai():
    data = request.json
    response = index.query(data['text'], response_mode="compact")
    return response.response

# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()

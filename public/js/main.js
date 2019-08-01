import { postChatMessage } from './http.js'

let messagesView = document.getElementById('messages-view')
let postMessageButton = document.getElementById('send-button')
let inputBox = document.getElementById('message')

postMessageButton.addEventListener('click', async event => {
  let payload = {
    chat_message: {
      from: 'Test Account 8',
      message: inputBox.value
    }
  };
  let result = await postChatMessage('/chat-message', JSON.stringify(payload))
  let json = await result.json()
  console.log(json);
  messagesView.insertAdjacentHTML('beforeend', `<div><span>${json.from}: </span><span>${json.message}</div>`);
})
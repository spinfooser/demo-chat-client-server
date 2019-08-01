import { postChatMessage, getChatMessages } from './http.js'

export class MessageView {
  constructor(view) {
    this.view = view
  }

  async sendMessage(message) {
    let payload = {
      chat_message: {
        from: 'Test Account 8',
        message: message
      }
    };
    let result = await postChatMessage('/chat-message', JSON.stringify(payload))
    this.addMessageToView(result.from, result.message)
  }

  async updateView() {
    let messages = await getChatMessages()
  
    messages.forEach((message) => {
      this.addMessageToView(message.from, message.message)
    })
  }

  addMessageToView(from, message) {
    this.view.insertAdjacentHTML('beforeend', `<div><span>${from}: </span><span>${message}</div>`)
  }
}
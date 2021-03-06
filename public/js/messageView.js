import { postChatMessage, getChatMessages } from './http.js'

export class MessageView {
  constructor(view) {
    this.view = view
  }

  async sendMessage(user, message) {
    let username = 'Test Account 8'

    if(user.length > 0) {
      username = user
    }

    let payload = {
      chat_message: {
        from: username,
        message: message
      }
    };
    let result = await postChatMessage('/chat-message', JSON.stringify(payload))
    this.addMessageToView(result.from, result.message)
  }

  async updateView() {
    let messages = await getChatMessages()
    this.removeAllMessages()
  
    messages.forEach((message) => {
      this.addMessageToView(message.from, message.message)
    })
  }

  addMessageToView(from, message) {
    this.view.insertAdjacentHTML('beforeend', `<div><span>${from}: </span><span>${message}</div>`)
  }

  removeAllMessages() {
    while (this.view.firstChild) {
      this.view.removeChild(this.view.firstChild);
    }
  }
}
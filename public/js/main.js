import { MessageView } from './messageView.js'

function main() {
  let messagesView = document.getElementById('messages-view')
  let globalView = new MessageView(messagesView)
  globalView.updateView()
  
  inputWiring(globalView)
}

function inputWiring(view) {
  let postMessageButton = document.getElementById('send-button')
  let inputBox = document.getElementById('message')
  postMessageButton.addEventListener('click', () => view.sendMessage(inputBox.value))
}

main()

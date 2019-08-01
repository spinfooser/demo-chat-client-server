
export async function postChatMessage(url = '', chat_message) {
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: chat_message
  })
  return await response.json()
}

export async function getChatMessages() {
  let response = await fetch('/chat-message', { method: 'GET' })
  return await response.json()
}
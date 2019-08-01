
export function postChatMessage(url = '', chat_message) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: chat_message
  })
}
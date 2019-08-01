Rails.application.routes.draw do
  post '/chat-message', to: 'chat_message#create'
end

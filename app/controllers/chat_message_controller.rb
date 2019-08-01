class ChatMessageController < ApplicationController

  def create
    post_params = params.require(:chat_message).permit(:message, :from)
    render json: ChatMessage.create(post_params)
  end
end

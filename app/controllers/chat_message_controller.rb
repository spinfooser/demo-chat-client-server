class ChatMessageController < ApplicationController
  def index
    render json: ChatMessage.last(30)
  end

  def create
    post_params = params.require(:chat_message).permit(:message, :from)
    render json: ChatMessage.create(post_params)
  end
end

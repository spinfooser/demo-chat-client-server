class ChatMessageController < ApplicationController

  def create
    render json: { message: 'hi' }
  end
end

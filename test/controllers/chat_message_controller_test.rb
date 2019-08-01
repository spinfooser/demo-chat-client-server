require 'test_helper'

class ChatMessageControllerTest < ActionDispatch::IntegrationTest
  test "responds to post" do
    post '/chat-message', params: { user: "Mary", message: "Hello There!" }
    assert_response :success
  end
end

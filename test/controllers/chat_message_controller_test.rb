require 'test_helper'

class ChatMessageControllerTest < ActionDispatch::IntegrationTest
  test 'responds to post' do
    post '/chat-message', params: { user: "Mary", message: "Hello There!" }
    assert_response :success
  end

  test 'saves message to table' do
    post '/chat-message', params: { user: "Fred", message: "This is only a test" }
    assert_response :success
    assert_equal "This is only a test", @response.parsed_body['message']

    id = @response.parsed_body['id']
    assert_equal "This is only a test", ChatMessage.find(id).message
  end
end

class CreateChatMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_messages do |t|
      t.text :message
      t.string :from

      t.timestamps
    end
  end
end

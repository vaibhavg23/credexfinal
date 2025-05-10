'use client';
import { useState } from 'react';

const ChatWidget = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<{ from: string; text: string }[]>([
    { from: 'bot', text: 'Hi! Ask me anything about selling licenses.' },
  ]);

  const handleSend = (): void => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: 'user', text: input },
      { from: 'bot', text: `You asked: ${input}` },
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-600 text-white p-2 rounded-t-lg flex justify-between items-center">
            <span>SoftSell Chat</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="p-2 h-48 overflow-y-auto text-sm flex-1">
            {messages.map((msg, i) => (
              <div
                key={`${msg.from}-${i}`}
                className={`mb-1 ${msg.from === 'user' ? 'text-right' : 'text-left'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t">
            <input
              type="text"
              className="w-full p-2 text-sm bg-transparent focus:outline-none"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="text-sm px-3 text-blue-600 hover:text-blue-800"
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700"
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default ChatWidget;

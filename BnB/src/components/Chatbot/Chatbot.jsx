import { useState } from 'react'
import { sendChatMessage } from '../../services/api'
import chatbotIcon from '../../assets/images/chatbot.jpeg'
import './Chatbot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const togglePopup = () => setIsOpen((prev) => !prev)

  const sendMessage = async () => {
    const text = message.trim()
    if (!text) {
      setError('Please enter a message.')
      return
    }

    setError('')
    setLoading(true)
    setChatHistory((prev) => [...prev, { sender: 'You', message: text }])
    setMessage('')

    try {
      const data = await sendChatMessage(text)
      setChatHistory((prev) => [...prev, { sender: 'AI', message: data.response }])
    } catch {
      setError('Failed to get a response. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button type="button" onClick={togglePopup} className="chat-fab" aria-label="Open Chatbot">
        <img src={chatbotIcon} alt="Chatbot" className="chat-fab-image" />
      </button>

      {isOpen && (
        <div className="chat-overlay" role="dialog" aria-modal="true">
          <div className="chat-panel">
            <div className="chat-header">
              <h2>Chat Assistant</h2>
              <button type="button" onClick={togglePopup} className="chat-close" aria-label="Close Chat">
                x
              </button>
            </div>

            <div className="chat-history">
              {chatHistory.map((entry, index) => (
                <p key={`${entry.sender}-${index}`} className={entry.sender === 'You' ? 'chat-you' : 'chat-ai'}>
                  <strong>{entry.sender}:</strong> {entry.message}
                </p>
              ))}
              {loading && <p className="chat-muted">AI is typing...</p>}
              {error && <p className="chat-error">{error}</p>}
            </div>

            <textarea
              className="chat-input"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your message"
              rows={4}
            />

            <button type="button" className="chat-send" onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot

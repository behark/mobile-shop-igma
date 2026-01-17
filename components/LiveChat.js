'use client'

import { useState, useEffect, useRef } from 'react'
import { FaComments, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'

// Format time consistently for server and client
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Përshëndetje! Si mund t\'ju ndihmojë?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Auto-responses (in production, this would connect to a chat service)
  const autoResponses = {
    'çmim': 'Çmimet tona variojnë sipas shërbimit. Për informacion më të detajuar, ju lutem na kontaktoni në 045 444 244.',
    'kohë': 'Orari ynë i punës është nga e Hënë deri në të Shtunë, nga ora 09:00 deri në 18:00.',
    'adresë': 'Jemi të vendosur në Rr. Mbrëtresha Teutë, Mitrovicë, Kosovë.',
    'riparim': 'Ofrojmë riparime për të gjitha markat e telefonave mobil. Koha e riparimit varet nga problemi.',
    'dekodim': 'Po, ofrojmë shërbime dekodimi për të gjitha telefonat mobil.',
    'bateri': 'Po, ndryshojmë bateritë për të gjitha modelet e telefonave.',
    'ekran': 'Po, ndryshojmë ekranet dhe xhamat për të gjitha modelet.'
  }

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const lowerMessage = inputMessage.toLowerCase()
      let botResponse = 'Faleminderit për mesazhin tuaj! Për informacion më të detajuar, ju lutem na kontaktoni në 045 444 244 ose në WhatsApp.'

      // Check for keywords
      for (const [keyword, response] of Object.entries(autoResponses)) {
        if (lowerMessage.includes(keyword)) {
          botResponse = response
          break
        }
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent('Përshëndetje! Dua të pyes për shërbimet tuaja.')
    window.open(`https://wa.me/38345444244?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          className="live-chat-button"
          onClick={() => setIsOpen(true)}
          aria-label="Hap chat-in"
        >
          <FaComments />
          <span className="chat-badge">Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="live-chat-window" ref={chatContainerRef}>
          <div className="chat-header">
            <div className="chat-header-info">
              <h3>Chat Live</h3>
              <p className="chat-status">Online</p>
            </div>
            <div className="chat-header-actions">
              <button
                className="chat-whatsapp-btn"
                onClick={handleWhatsAppRedirect}
                aria-label="Hap WhatsApp"
                title="Chat në WhatsApp"
              >
                <FaWhatsapp />
              </button>
              <button
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Mbyll chat-in"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Shkruani mesazhin tuaj..."
              className="chat-input"
              aria-label="Shkruani mesazhin"
            />
            <button
              type="submit"
              className="chat-send-btn"
              aria-label="Dërgo mesazhin"
            >
              <FaPaperPlane />
            </button>
          </form>

          <div className="chat-footer">
            <p>Ose na kontaktoni në <a href="tel:+38345444244">045 444 244</a></p>
          </div>
        </div>
      )}
    </>
  )
}

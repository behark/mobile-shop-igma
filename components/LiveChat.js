'use client'

import { useState, useEffect, useRef } from 'react'
import { FaComments, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: 'Përshëndetje! Si mund t\'ju ndihmoj?',
      sender: 'bot',
      time: new Date().toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'Faleminderit për mesazhin tuaj! Një përfaqësues do t\'ju përgjigjet së shpejti.',
        'Për informacione më të shpejta, na kontaktoni në WhatsApp: 045 444 244',
        'A dëshironi të rezervoni një termin? Mund të përdorni formularin e rezervimit në faqe.',
        'Për pyetje urgjente, na telefononi në 045 444 244 ose na shkruani në WhatsApp.'
      ]
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      
      setMessages(prev => [...prev, {
        text: randomResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' })
      }])
    }, 1000)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/38345444244?text=Përshëndetje! Kam një pyetje.', '_blank')
  }

  return (
    <>
      {!isOpen && (
        <button
          className="live-chat-button"
          onClick={() => setIsOpen(true)}
          aria-label="Hap chat"
        >
          <FaComments />
          <span className="chat-badge">1</span>
        </button>
      )}

      {isOpen && (
        <div className="live-chat-widget">
          <div className="chat-header">
            <div className="chat-header-info">
              <h3>Chat Live</h3>
              <p>Përgjigjemi zakonisht brenda disa minutave</p>
            </div>
            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Mbyll chat"
            >
              <FaTimes />
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-actions">
            <button onClick={openWhatsApp} className="whatsapp-button">
              <FaWhatsapp /> Shkruani në WhatsApp
            </button>
          </div>
          <form onSubmit={handleSend} className="chat-input-form">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Shkruani mesazhin tuaj..."
              className="chat-input"
            />
            <button type="submit" className="chat-send">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

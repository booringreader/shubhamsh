
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const YorozuyaChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Yo! I'm the Z-Assistant. Need help navigating the Grand— I mean, the Universe? Ask me anything!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-stone-900 border-4 border-orange-500 rounded-2xl shadow-[0_0_30px_rgba(234,88,12,0.5)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-orange-600 p-3 flex justify-between items-center border-b border-yellow-400">
            <h4 className="font-dbz text-lg text-white tracking-wider">Z-ASSISTANT</h4>
            <button onClick={() => setIsOpen(false)} className="text-white hover:scale-125 transition-transform">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-950/80">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs font-desc ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-stone-800 text-orange-200 border border-orange-500/30 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-3 rounded-2xl text-xs animate-pulse text-orange-400 border border-orange-500/20 font-desc">
                  Powering up...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-stone-800 flex gap-2 bg-stone-900">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your transmission..."
              className="flex-1 bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-orange-500 focus:outline-none placeholder:text-stone-600 font-desc text-xs"
            />
            <button 
              onClick={handleSend}
              className="bg-orange-600 px-4 py-2 rounded-lg font-dbz text-white hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/40"
            >
              HI!
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-orange-500 border-4 border-yellow-400 rounded-full flex items-center justify-center text-3xl shadow-xl hover:scale-110 transition-transform aura-glow group"
        >
          <span className="group-hover:rotate-12 transition-transform">⭐</span>
        </button>
      )}
    </div>
  );
};

export default YorozuyaChat;

"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content: "Selamat datang. Saya AnnBot. Ada yang bisa saya bantu terkait layanan kami hari ini?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessageId = `user-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      const botMessageId = `bot-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setMessages((prev) => [
        ...prev,
        {
          id: botMessageId,
          role: "bot",
          content: data.reply,
        },
      ]);
    } catch (error) {
      const errorMessageId = `err-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      setMessages((prev) => [
        ...prev,
        {
          id: errorMessageId,
          role: "bot",
          content: "⚠️ Mohon maaf, koneksi terputus atau layanan sedang sibuk. Silakan coba beberapa saat lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              "bg-white shadow-2xl border border-zinc-200 flex flex-col overflow-hidden transition-all duration-300",
              "fixed inset-x-4 bottom-20 top-4 md:relative md:inset-auto md:w-[400px] md:h-[600px] md:rounded-2xl border-t-4 border-t-[#D4AF37]"
            )}
          >
            <div className="bg-[#000080] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D4AF37] rounded-full text-[#000080]">
                  <Bot size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">AnnBot Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-zinc-300 uppercase tracking-widest font-medium">online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "")}>
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 border", msg.role === "user" ? "bg-white border-zinc-200" : "bg-[#000080] border-[#D4AF37]")}>
                    {msg.role === "user" ? <User size={14} className="text-zinc-600" /> : <Bot size={14} className="text-[#D4AF37]" />}
                  </div>
                  <div className={cn("p-3 rounded-xl text-sm max-w-[80%] shadow-sm", msg.role === "user" ? "bg-[#000080] text-white rounded-tr-none" : "bg-white text-zinc-800 border border-zinc-200 rounded-tl-none")}>
                    <div
                      className="prose prose-sm prose-zinc max-w-none 
    prose-p:leading-relaxed prose-p:my-1 
    prose-ul:my-1 prose-li:my-0.5
    prose-strong:text-[#000080] dark:prose-strong:text-[#D4AF37]"
                    >
                      <ReactMarkdown
                        components={{
                          a: ({ node, href, ...props }) => {
                            const isInternal = href?.startsWith("/") || href?.startsWith("https://ann-travel.com");

                            if (isInternal) {
                              return <Link href={href || "#"} className="text-blue-700 font-bold underline hover:text-blue-400 transition-colors" {...props} />;
                            }

                            return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold underline hover:text-blue-400 transition-colors" {...props} />;
                          },
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 items-center text-zinc-400 italic text-xs ml-11">
                  <Loader2 size={14} className="animate-spin" />
                  Berpikir...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-zinc-100">
              <div className="flex items-center gap-2 group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ketik pesan..."
                  className="flex-1 bg-zinc-100 border-none rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-[#D4AF37] text-[#000080] rounded-full hover:bg-[#b8962e] disabled:opacity-50 transition-all shadow-md cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-[#D4AF37]"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#000080] border-2 border-[#D4AF37] text-[#D4AF37] rounded-full shadow-xl flex items-center justify-center hover:bg-[#000066] transition-all cursor-pointer"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
}

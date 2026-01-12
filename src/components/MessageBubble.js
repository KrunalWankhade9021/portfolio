import { Terminal, User, Bot } from 'lucide-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';



export default function MessageBubble({ message }) {
    const isAI = message.role === 'assistant';

    return (
        <div className={`flex w-full mb-6 ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`}>
            <div className={`flex max-w-[85%] md:max-w-[70%] ${isAI ? 'flex-row' : 'flex-row-reverse'} gap-3`}>
                {/* Avatar */}
                <div className={`flex-shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${isAI ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white'
                    }`}>
                    {isAI ? <Bot size={18} /> : <User size={18} />}
                </div>

                {/* Bubble */}
                <div className={`
          p-4 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isAI
                        ? 'glass-panel rounded-tl-none border-primary/20'
                        : 'bg-primary text-primary-foreground rounded-tr-none'}
        `}>
                    {isAI ? (
                        <div className="markdown-content">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    // Text & Layout
                                    p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                    h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2 mt-4 text-white" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-base font-bold mb-2 mt-3 text-white" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-sm font-bold mb-1 mt-2 text-white" {...props} />,
                                    blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-primary/50 pl-4 py-1 my-2 bg-white/5 italic text-neutral-300" {...props} />,

                                    // Lists
                                    ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1" {...props} />,
                                    li: ({ node, ...props }) => <li className="text-neutral-300" {...props} />,

                                    // Code
                                    code: ({ node, inline, className, children, ...props }) => {
                                        return inline ? (
                                            <code className="bg-white/10 px-1 py-0.5 rounded text-xs font-mono text-primary-foreground" {...props}>
                                                {children}
                                            </code>
                                        ) : (
                                            <div className="relative my-3 rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d]">
                                                <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/5">
                                                    <Terminal size={14} className="text-white/40 mr-2" />
                                                    <span className="text-xs text-white/40">Code</span>
                                                </div>
                                                <pre className="p-4 overflow-x-auto text-xs font-mono text-neutral-300 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                                    <code {...props}>{children}</code>
                                                </pre>
                                            </div>
                                        )
                                    },

                                    // Links
                                    a: ({ node, ...props }) => <a className="text-primary hover:underline underline-offset-4 font-medium" target="_blank" rel="noopener noreferrer" {...props} />,

                                    // Tables
                                    table: ({ node, ...props }) => <div className="overflow-x-auto mb-4 border border-white/10 rounded-lg"><table className="w-full text-sm text-left" {...props} /></div>,
                                    thead: ({ node, ...props }) => <thead className="bg-white/5 text-white/80 uppercase text-xs" {...props} />,
                                    th: ({ node, ...props }) => <th className="px-4 py-3 border-b border-white/10 font-bold" {...props} />,
                                    td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-white/10 text-neutral-300" {...props} />,
                                }}
                            >
                                {message.content}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        <p>{message.content}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

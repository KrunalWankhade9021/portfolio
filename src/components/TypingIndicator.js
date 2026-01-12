export default function TypingIndicator() {
    return (
        <div className="flex w-full mb-6 justify-start animate-fade-in">
            <div className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="animate-pulse">...</span>
                </div>
                <div className="glass-panel p-4 rounded-2xl rounded-tl-none flex items-center gap-1 h-12">
                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}

import { Send } from 'lucide-react';

export default function InputArea({ input, setInput, onSubmit, isLoading }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSubmit(input);
            setInput('');
        }
    };

    return (
        <div className="absolute bottom-0 left-0 w-full p-4  bg-gradient-to-t from-background via-background to-transparent z-50">
            <div className="container max-w-3xl">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my projects, skills, or experience..."
                        disabled={isLoading}
                        className="w-full glass-panel h-14 pl-6 pr-12 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/70"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 p-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
    );
}

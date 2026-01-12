import { resumeData } from '@/data/resume';
import { Trophy, Award, Star } from 'lucide-react';

export default function Achievements() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                <span className="gradient-text">Achievements</span> & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resumeData.achievements.map((item, index) => (
                    <div key={index} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:translate-y-[-4px] group">
                        <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            {index === 0 ? <Trophy size={24} /> : index === 1 ? <Award size={24} /> : <Star size={24} />}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

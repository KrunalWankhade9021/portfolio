import { resumeData } from '@/data/resume';

export default function Skills() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-center mb-8">
                Technical <span className="gradient-text">Skills</span>
            </h2>

            <div className="space-y-8">
                {resumeData.skills.map((skillGroup, index) => (
                    <div key={index} className="glass-panel p-6 rounded-xl border border-white/5">
                        <h3 className="text-lg font-semibold mb-4 text-primary/80">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((item, i) => (
                                <span key={i} className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

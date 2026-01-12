import { resumeData } from '@/data/resume';
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
    const timelineData = resumeData.experience.map((item, index) => ({
        title: item.period,
        content: (
            <div key={index}>
                <h4 className="text-xl md:text-2xl font-bold text-neutral-200 mb-2">
                    {item.role} @ <span className="text-primary">{item.company}</span>
                </h4>

                {Array.isArray(item.description) ? (
                    <ul className="list-disc list-outside ml-5 text-neutral-400 text-sm md:text-base leading-relaxed mb-8 space-y-2">
                        {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
                        {item.description}
                    </p>
                )}
            </div >
        )
    }));

    return (
        <div className="w-full">
            <Timeline data={timelineData} />
        </div>
    );
}

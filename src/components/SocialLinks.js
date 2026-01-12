import { Github, Linkedin, Code, Twitter } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function SocialLinks() {
    const { socials } = resumeData.profile;

    return (
        <div className="flex gap-4 items-center justify-center p-4">
            <a href={socials.github} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all text-white/70 group"
                title="GitHub">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
            </a>

            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all text-white/70 group"
                title="LinkedIn">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>

            {socials.leetcode && (
                <a href={socials.leetcode} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#FFA116]/20 hover:text-[#FFA116] transition-all text-white/70 group"
                    title="LeetCode">
                    <Code size={24} className="group-hover:scale-110 transition-transform" />
                </a>
            )}

            {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-all text-white/70 group"
                    title="Twitter/X">
                    <Twitter size={24} className="group-hover:scale-110 transition-transform" />
                </a>
            )}
        </div>
    );
}

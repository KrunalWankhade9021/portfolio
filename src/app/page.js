import ChatInterface from "@/components/ChatInterface";
import SocialLinks from "@/components/SocialLinks";
import Achievements from "@/components/Achievements";
import SkillsOrbital from "@/components/SkillsOrbital";
import Experience from "@/components/Experience";
import { DottedSurface } from "@/components/ui/dotted-surface";
import AIChatHero from "@/components/AIChatHero";
import GlassNavigation from "@/components/GlassNavigation";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background - Three.js Dotted Surface */}
      <DottedSurface className="opacity-40" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col justify-start pt-12">
        <AIChatHero />
        <GlassNavigation />
      </div>

      {/* Main Content Sections (Below fold) */}
      <div className="relative z-10 space-y-24 pb-24">

        {/* Skills Section */}
        <section id="skills">
          <SkillsOrbital />
        </section>

        {/* Projects Grid */}
        <section id="projects">
          <ProjectsGrid />
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          </div>
          <Experience />
        </section>

        {/* Achievements */}
        <Achievements />


        {/* Chat Interface (Fallback) */}
        <section id="chat-interface" className="container mx-auto px-4 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Hiring Intelligence? Chat with my AI Twin
            </h2>
          </div>
          <div className="max-w-4xl mx-auto h-[600px] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <ChatInterface />
          </div>
        </section>

      </div>
    </main>
  );
}

import { resumeData } from "@/data/resume";

// 1. Tool Definitions (JSON Schema for Groq/OpenAI)
export const tools = [
    {
        type: "function",
        function: {
            name: "get_profile",
            description: "Get the candidate's basic profile, bio, and contact info.",
            parameters: { type: "object", properties: {} },
        },
    },
    {
        type: "function",
        function: {
            name: "get_experience",
            description: "Get the candidate's work history and professional experience.",
            parameters: { type: "object", properties: {} },
        },
    },
    {
        type: "function",
        function: {
            name: "get_projects",
            description: "Get the list of projects the candidate has worked on.",
            parameters: { type: "object", properties: {} },
        },
    },
    {
        type: "function",
        function: {
            name: "get_skills",
            description: "Get the candidate's technical skills and stack.",
            parameters: { type: "object", properties: {} },
        },
    },
    {
        type: "function",
        function: {
            name: "get_education",
            description: "Get the candidate's education, degree, university, graduation timeline, and GPA.",
            parameters: { type: "object", properties: {} },
        },
    },
    {
        type: "function",
        function: {
            name: "get_achievements",
            description: "Get the candidate's achievements and certifications (e.g. Amazon ML Summer School, Oracle Generative AI certification).",
            parameters: { type: "object", properties: {} },
        },
    },
];

// 2. Tool Executioner
export async function runTool(name, args) {
    switch (name) {
        case "get_profile":
            return JSON.stringify(resumeData.profile);
        case "get_experience":
            return JSON.stringify(resumeData.experience);
        case "get_projects":
            return JSON.stringify(resumeData.projects);
        case "get_skills":
            return JSON.stringify(resumeData.skills);
        case "get_education":
            return JSON.stringify(resumeData.education);
        case "get_achievements":
            return JSON.stringify(resumeData.achievements);
        default:
            return "Tool not found.";
    }
}

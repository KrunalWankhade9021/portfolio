export const resumeData = {
    profile: {
        name: "Krunal Wankhade",
        role: "AI Engineering Intern | Amazon ML Summer School",
        bio: "AI-Native Engineer & Data Science Undergrad passionate about building intelligent, production-ready ML solutions. I specialize in LangChain, RAG, multi-agent systems, and LLM-powered applications — turning cutting-edge research into real-world impact.",
        location: "Pune, Maharashtra, India",
        email: "krunal.wankhade1810@gmail.com",
        socials: {
            github: "https://github.com/KrunalWankhade9021",
            linkedin: "https://linkedin.com/in/krunalwankhade",
            leetcode: "https://leetcode.com/u/Krunal_9021/"
        }
    },
    achievements: [
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            description: "Oracle, 2025."
        },
        {
            title: "Generative AI for Everyone",
            description: "DeepLearning.AI / Coursera, 2025."
        },
        {
            title: "Amazon ML Summer School 2025",
            description: "Selected for Amazon's competitive ML Summer School, led by Amazon scientists."
        }
    ],
    skills: [
        { category: "Programming", items: ["Python", "C++", "SQL"] },
        { category: "Machine Learning & AI", items: ["LangChain", "LangGraph", "scikit-learn", "PyTorch"] },
        { category: "Data & Analytics", items: ["Pandas", "NumPy", "Matplotlib"] },
        { category: "Core Specializations", items: ["Retrieval-Augmented Generation (RAG)", "Multi-Agent AI Systems", "Semantic Search & Vector Embeddings", "NLP Pipelines"] },
        { category: "Databases & Tools", items: ["MySQL", "ChromaDB", "FastAPI", "Git"] }
    ],
    experience: [
        {
            company: "DeepStack Software",
            role: "AI Backend Intern",
            period: "Feb 2026 - May 2026 | Hyderabad",
            description: [
                "Developed a Model Context Protocol (MCP) server integrating the knowledge base directly into Claude Code for natural-language scraping and semantic search (DeepRAG — Semantic Search Platform).",
                "Designed ingestion and retrieval pipelines to scrape, chunk, embed, and store website data using PostgreSQL + pgvector with hybrid semantic search.",
                "Built and shipped the backend for TalentSprout (a chess-learning platform) with FastAPI + PostgreSQL, designing the service layer and database schema.",
                "Integrated Google OAuth authentication and Razorpay payments end-to-end, including secure checkout and license-activation flow."
            ]
        },
        {
            company: "AlgoAnalytics",
            role: "Data Science Intern",
            period: "Aug 2025 - Nov 2025",
            description: [
                "Worked on building intelligent, production-oriented data science solutions for fintech use cases.",
                "Developed a multi-agent AI system using LangGraph, incorporating ReAct-style reasoning and structured Chain-of-Thought workflows for complex task execution.",
                "Designed and coordinated multiple agents to perform sequential and parallel processing of financial data pipelines.",
                "Implemented orchestration logic to enable smooth communication, task handoff, and dependency management between agents.",
                "Integrated Retrieval-Augmented Generation (RAG) to enhance reasoning by grounding agent responses in external and domain-specific knowledge sources.",
                "Collaborated closely with mentors and team members to improve system reliability, scalability, and real-world applicability of AI workflows."
            ]
        },
        {
            company: "Catalyst IOIT",
            role: "Founder & Advisor",
            period: "May 2025 - Nov 2025",
            description: [
                "Founded Catalyst IOIT, a student-driven initiative focused on solving real campus problems through industry-relevant projects.",
                "Defined the vision and long-term direction of the initiative.",
                "Designed a two-layer team structure (Core Leadership & Project Teams) for scalable execution.",
                "Advised teams on problem selection, scoping, and solution validation.",
                "Provided strategic guidance to ensure practical impact and real-world relevance."
            ]
        },
        {
            company: "Amazon",
            role: "Amazon ML Summer School 2025",
            period: "August 2025 - September 2025",
            description: [
                "Selected for an intensive machine learning program led by Amazon ML scientists.",
                "Hands-on exposure to supervised & unsupervised learning, deep learning, and NLP.",
                "Learned industry-grade ML workflows, model evaluation, and best practices.",
                "Participated in mentorship sessions with Amazon ML researchers and engineers."
            ]
        },
        {
            company: "Hosteze",
            role: "Co-founder",
            period: "Feb 2022 - Oct 2024 | Pune",
            description: [
                "Defined product strategy and identified opportunities to solve student and young professional housing challenges.",
                "Led product ideation and development, translating user insights into features that improved the platform experience.",
                "Expanded platform reach across Maharashtra through collaborations with local YouTubers and content creators.",
                "Conducted user research to understand student housing needs and iterated on product offerings based on feedback."
            ]
        }
    ],
    education: [
        {
            institution: "AISSMS Institute of Information Technology",
            degree: "B.Tech in Artificial Intelligence & Data Science",
            period: "July 2022 - June 2026",
            gpa: "7.6/10",
            description: "Strong academic foundation with focused expertise in machine learning and data systems."
        }
    ],
    projects: [
        {
            title: "ImageSense",
            description: "On-device natural-language photo search for Android. Describe a memory (e.g. 'sunset at the beach') and instantly retrieve matching gallery photos, 100% offline with zero cloud uploads. Runs a quantized CLIP ViT-B/32 vision-language model on-device via ONNX Runtime, achieving 0.89+ embedding fidelity, with incremental indexing and a Material 3 Jetpack Compose UI.",
            tech: ["Kotlin", "Jetpack Compose", "ONNX Runtime", "CLIP ViT-B/32", "On-Device ML", "Room/SQLite"],
            link: "https://github.com/KrunalWankhade9021/ImageSense"
        },
        {
            title: "Offline Document Finder (ODF)",
            description: "A privacy-first semantic search system inspired by Windows Spotlight. Uses vector embeddings and ChromaDB for efficient retrieval.",
            tech: ["Python", "ChromaDB", "RAG", "Semantic Search"],
            link: "https://github.com/7pk5/ODF"
        },
        {
            title: "Semantic Image Retrieval",
            description: "Advanced image search system utilizing multimodal embeddings to enable semantic search across image datasets.",
            tech: ["Python", "Deep Learning", "Computer Vision", "Embeddings"],
            link: "https://github.com/KrunalWankhade9021/Semantic-Image-Retrieval"
        }
    ]
};

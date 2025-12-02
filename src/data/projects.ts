export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  tech: string[];
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "cinemiser",
    title: "Cinemiser",
    shortDescription:
      "A movie picker web app that helps you choose what to watch based on mood and filters.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    repo: "https://github.com/CCostaDev/cinemiser",
  },
  {
    id: "buffalink",
    title: "BuffaLink - Vehicle Tracking Dashboard",
    shortDescription:
      "A full-stack web app for a logistics company that tracks vehicle MOT, services, VOR status and defects in real time, with role-based access and custom views like Night-Out tracking.",
    tech: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Express.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    repo: "https://github.com/Buffaload/BuffaLink",
  },
  {
    id: "akari",
    title: "Akari – Discord Bot",
    shortDescription:
      "A modular Discord bot with music commands, TMDB integration and scalable structure.",
    tech: ["Python", "discord.py", "FFmpeg", "TMDB API"],
    repo: "https://github.com/CCostaDev/akari",
  },
  {
    id: "streaming-bot",
    title: "Streaming RAG Bot",
    shortDescription:
      "A retrieval-augmented chatbot that can answer questions over uploaded content.",
    tech: ["Python", "Streamlit", "OpenAI API", "RAG"],
    repo: "https://github.com/CCostaDev/streaming-bot",
  },
];

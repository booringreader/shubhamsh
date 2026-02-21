import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether OS',
    description: 'A custom lightweight operating system kernel written in Rust, focusing on memory safety and high-concurrency performance.',
    tags: ['Rust', 'ASM', 'Systems'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Lumina Vision',
    description: 'Real-time object detection and spatial mapping system using computer vision for autonomous drone navigation.',
    tags: ['Python', 'PyTorch', 'C++'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Prism Protocol',
    description: 'Decentralized identity management system built on Ethereum, enabling secure and private cross-chain authentication.',
    tags: ['Solidity', 'TypeScript', 'Ethers.js'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Flux Engine',
    description: 'A high-performance 2D physics engine optimized for web-based interactive simulations and gaming.',
    tags: ['TypeScript', 'Canvas', 'Math'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'Quantum Systems',
    role: 'Senior Software Engineer',
    period: '2023 — Present',
    description: [
      'Architected distributed microservices handling 1M+ concurrent requests.',
      'Led the transition from monolithic architecture to a scalable event-driven system.',
      'Mentored junior developers and established CI/CD best practices.'
    ],
    type: 'work'
  },
  {
    id: 'e2',
    company: 'Stellar Labs',
    role: 'Full Stack Developer',
    period: '2021 — 2023',
    description: [
      'Developed and maintained core features for a real-time collaborative design tool.',
      'Optimized frontend performance, reducing initial load time by 40%.',
      'Implemented complex data visualization dashboards using D3.js.'
    ],
    type: 'work'
  },
  {
    id: 'e3',
    company: 'Tech University',
    role: 'B.S. Computer Science',
    period: '2017 — 2021',
    description: [
      'Specialized in Artificial Intelligence and Distributed Systems.',
      'Graduated with Honors, GPA 3.9/4.0.',
      'Research assistant for the High-Performance Computing lab.'
    ],
    type: 'education'
  }
];

export const SKILLS = [
  'TypeScript', 'React', 'Node.js', 'Rust', 'Go', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Python'
];

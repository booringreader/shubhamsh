import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cortex-M4 Firmware',
    description: 'A custom lightweight operating system kernel written in Rust, focusing on memory safety and high-concurrency performance.',
    tags: ['Rust', 'ASM', 'Systems'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'LogViewer',
    description: 'Real-time object detection and spatial mapping system using computer vision for autonomous drone navigation.',
    tags: ['Python', 'PyTorch', 'C++'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Database engine',
    description: 'Decentralized identity management system built on Ethereum, enabling secure and private cross-chain authentication.',
    tags: ['Go', 'Mutex', 'JSON'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'CovidD',
    description: 'A high-performance 2D physics engine optimized for web-based interactive simulations and gaming.',
    tags: ['TypeScript', 'Canvas', 'Math'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '5',
    title: 'bosh',
    description: 'A high-performance 2D physics engine optimized for web-based interactive simulations and gaming.',
    tags: ['C'],
    githubUrl: '#',
    liveUrl: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'Indian Institute Of Technology Guwahati',
    role: 'Web Development Intern',
    period: 'December 2023 — February 2024',
    description: [
      'Architected distributed microservices handling 1M+ concurrent requests.',
      'Led the transition from monolithic architecture to a scalable event-driven system.',
      'Mentored junior developers and established CI/CD best practices.'
    ],
    type: 'work'
  },
  // {
  //   id: 'e2',
  //   company: 'Stellar Labs',
  //   role: 'Full Stack Developer',
  //   period: '2021 — 2023',
  //   description: [
  //     'Developed and maintained core features for a real-time collaborative design tool.',
  //     'Optimized frontend performance, reducing initial load time by 40%.',
  //     'Implemented complex data visualization dashboards using D3.js.'
  //   ],
  //   type: 'work'
  // },
  {
    id: 'e2',
    company: 'National Insitute Of Technology Srinagar',
    role: 'B.Tech. Computer Science & Engineering',
    period: '2022 — 2026',
    description: [],
    type: 'education'
  }
];

export const SKILLS = [
  'JavaScript', 'React', 'Node.js', 'Java', 'Go', 'PostgreSQL', 'Docker', 'AWS/EC2', 'C', 'Cursor', 'Nginx'
];

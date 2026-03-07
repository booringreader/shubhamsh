import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cortex-M4 Firmware',
    description: 'Embedded systems project implementing firmware for STM32 Cortex-M4 microcontrollers. This is a low-level hardware-focused project designed to run on ARM-based embedded devices',
    tags: ['C', 'STM32', 'ARM Cortex-M4'],
    githubUrl: 'https://github.com/booringreader/firmware.git',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'LogViewer',
    description: 'Utility for reading and displaying N lines from a log file, with automatic log generation capabilities (autolog). This is a lightweight tool designed for quick log file inspection and analysis.',
    tags: ['JavaScript'],
    githubUrl: 'https://github.com/booringreader/logreader.git',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Database engine',
    description: 'Lightweight file-based database engine written in Go. It implements a simple document database that stores data as JSON files organized in a directory structure.',
    tags: ['Go', 'Mutex', 'JSON', 'Concurrency'],
    githubUrl: 'https://github.com/booringreader/dbengine.git',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'CovidD',
    description: 'Python-based project related to COVID-19 data analysis or disease modeling. While the specific focus isn\'t detailed in the description, the name suggests work with COVID-19 datasets, epidemiological analysis, or data-driven insights related to the pandemic.',
    tags: ['Python', 'Data Visualization'],
    githubUrl: 'https://github.com/booringreader/covidD.git',
    liveUrl: '#'
  },
  {
    id: '5',
    title: 'bosh',
    description: 'POSIX-compliant shell implementation written from scratch in C. It provides a complete Unix command interpreter with full lexical analysis and execution capabilities, including scanning, tokenization, parsing, and command execution. This is a systems programming project that recreates core shell functionality.',
    tags: ['C'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '6',
    title: 'statsDecay',
    description: 'Implements a Markov chain algorithm to determine whether a given input fuel quantity is sufficient to create a nuclear bomb. It\'s a specialized computational project focused on probabilistic modeling and statistical calculations.',
    tags: ['C++', 'Markov Chain'],
    githubUrl: 'https://github.com/booringreader/statsDecay.git',
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

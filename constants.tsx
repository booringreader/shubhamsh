
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Capsule Corp Inventory',
    description: 'A React and GraphQL application for managing physical items compressed into high-tech capsules. Built for Bulma’s internal logistics team.',
    powerLevel: '8,500',
    tech: ['React', 'GraphQL', 'Apollo'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '2',
    title: 'Dragon Radar UI',
    description: 'Real-time geolocation tracking using SVG filters and custom hooks to find high-value artifacts across Planet Earth.',
    powerLevel: '12,000',
    tech: ['TypeScript', 'SVG', 'Leaflet'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '3',
    title: 'Hyperbolic Time Chamber Bot',
    description: 'A Discord automation tool that optimizes CI/CD pipelines to feel like 1 year of training in just 1 day. Dramatically reduces deployment latency.',
    powerLevel: '25,000',
    tech: ['Node.js', 'GitHub Actions', 'Docker'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '4',
    title: 'Senzu Bean Factory',
    description: 'Supply chain management system for mass-producing recovery items. Uses IoT sensors to monitor Korin Tower growing conditions.',
    powerLevel: '9,200',
    tech: ['IoT', 'Next.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1530811751254-450a22af483d?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '5',
    title: 'Spirit Bomb Energy Grid',
    description: 'Distributed energy collection algorithm that sources CPU cycles from volunteer devices to solve complex cryptographic puzzles.',
    powerLevel: '99,000',
    tech: ['WebRTC', 'Rust', 'Wasm'],
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '6',
    title: 'Going Merry Navigation',
    description: 'Autonomous sailing AI that calculates the most chaotic paths through the Grand Line while avoiding Sea Kings.',
    powerLevel: '15,000',
    tech: ['Python', 'PyTorch', 'ROS'],
    image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  },
  {
    id: '7',
    title: 'Gintoki’s Tab Tracker',
    description: 'A high-stakes debt management system for the Yorozuya. Includes a "pachinko-mode" for risky financial projections.',
    powerLevel: '1,200',
    tech: ['Svelte', 'D3.js', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Web Development Intern',
    company: 'Indian Institute Of Technology Guwahati',
    period: '2024 - 2025',
    description: 'Architecting global-scale infrastructure while maintaining high-uptime for the Earth Defense network.',
    saga: 'Baby Worker Saga'
  },
  // {
  //   id: '2',
  //   role: 'Android Specialist',
  //   company: 'Red Ribbon Labs (Reformed)',
  //   period: '2020 - 2022',
  //   description: 'Optimized neural networks for bio-mechanical efficiency. Transitioned from legacy Gero-stack to modern microservices.',
  //   saga: 'Cell Games Saga'
  // },
  // {
  //   id: '3',
  //   role: 'Junior Space Explorer',
  //   company: 'Frieza Force Logistics',
  //   period: '2018 - 2020',
  //   description: 'Managed multi-planet inventory deployments. Escaped the toxic workplace culture before the planet exploded.',
  //   saga: 'Namek Saga'
  // }
];

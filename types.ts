
export interface Project {
  id: string;
  title: string;
  description: string;
  powerLevel: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  saga: string; // Dragon Ball Saga theme
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

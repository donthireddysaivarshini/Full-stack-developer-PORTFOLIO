
import {
  Code,
  Database,
  Smartphone,
  Server,
  Cloud,
  GitMerge,
  Cpu,
  BrainCircuit,
  GraduationCap,
  Briefcase,
  Star,
  Zap,
  BookOpen,
  type LucideIcon,
  ShieldCheck,
  Search,
  Wrench,
  Layers,
  HeartHandshake,
  MessageSquare,
  BarChart,
} from 'lucide-react';
import { Icons } from '@/components/portfolio/Icons';

export const portfolioData = {
  name: 'Donthireddy Sai Varshini',
  title: 'Full Stack Developer',
  subtitles: ['Frontend', 'Backend', 'Database', 'DevOps'],
  contact: {
    email: 'dsaivarshini30@gmail.com',
    phone: '+91-9866063125',
    github: 'https://github.com/donthireddysaivarshini',
    linkedin: 'https://www.linkedin.com/in/saivarshini-donthireddy/',
  },
  capabilities: [
    {
      title: 'Frontend Skills',
      icon: Smartphone,
      skills: ['React/JavaScript expertise', 'HTML5/CSS3 mastery', 'UI/UX implementation', 'Responsive design proficiency'],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Python/Java server-side development', 'API design and development', 'Database integration', 'Server architecture'],
    },
    {
      title: 'DevOps & Tools',
      icon: GitMerge,
      skills: ['Git/GitHub workflow', 'Database management (MySQL)', 'Development environment setup', 'Testing and debugging'],
    },
    {
      title: 'Problem Solving',
      icon: BrainCircuit,
      skills: ['Algorithm implementation', 'Data structures optimization', 'System design thinking', 'Performance optimization'],
    },
  ],
  education: [
    {
      degree: 'B.Tech in CSE (IoT)',
      institution: 'Malla Reddy Engineering College For Women',
      period: '2022 – 2026',
      details: 'CGPA: 9.11. Relevant Coursework: Data Structures, Algorithms, Web Technologies, IoT integration.',
      icon: GraduationCap,
    },
    {
      degree: 'NPTEL Data Structures & Algorithms',
      institution: 'Certification',
      period: '2025',
      details: 'Completed certification to deepen understanding of core data structures and algorithms in python.',
      icon: Star,
    },
    {
      degree: 'Oracle Gen AI Professional',
      institution: 'Certification',
      period: '2024',
      details: 'Gained expertise in modern AI integration and generative models.',
      icon: Zap,
    },
     {
      degree: 'Continuous Learning',
      institution: 'Self-Taught',
      period: 'Ongoing',
      details: 'Actively learning web technologies and frameworks to stay current.',
      icon: BookOpen,
    },
  ],
  experience: [
    {
      role: 'Full Stack Development Intern',
      company: 'Infosys Springboard',
      period: 'Oct 2024 – Dec 2024',
      description: 'Focused on the end-to-end development of "DealHunter," a web scraping application. Responsible for frontend dashboard, backend scraping engine, and data processing.',
      achievements: [
        'Developed a Streamlit dashboard with interactive filtering for frontend.',
        'Built a Python scraping engine for the backend.',
        'Achieved 15% faster performance than existing solutions.',
        'Delivered over 50+ daily deals with a seamless user experience.',
      ],
      icon: Briefcase,
    },
  ],
  projects: [
    {
      tier: 1,
      title: 'Recipe Snap - AI Recipe Generator',
      year: '2025',
      description: 'An AI-powered full stack application that generates recipes from ingredients. Features an interactive UI and a machine learning backend for intelligent suggestions.',
      techStack: ['AI/ML', 'Python', 'React', 'Node.js', 'MySQL'],
      liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_ai-genai-edunetfoundation-activity-7354524969650868227-tTMF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
      github: 'https://github.com/donthireddysaivarshini/Recipe-Snap',
      image: 'https://picsum.photos/seed/recipes/600/400',
      imageHint: 'food ingredients',
    },
    {
      tier: 1,
      title: 'Deal Scraper - Data Aggregator',
      year: '2024',
      description: 'A platform for aggregating e-commerce deals. Features a user-friendly browsing interface, an advanced web scraping engine, and real-time data pipeline.',
      techStack: ['Python', 'Selenium', 'BeautifulSoup', 'Streamlit'],
      liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_infosysspringboardinternship-pythonprojects-activity-7353692116599910400-664U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
      github: 'https://github.com/donthireddysaivarshini/Deal_Scraper',
      image: 'https://picsum.photos/seed/deals/600/400',
      imageHint: 'online shopping'
    },
    {
      tier: 1,
      title: 'Job Scraper',
      year: '2025',
      description: 'A full stack job board that scrapes and aggregates listings from multiple platformsIncludes job matching, filtering, and tracking features, with a functional frontend.',
      techStack: ['Python', 'BeautifulSoup', 'Streamlit'],
      liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_built-a-smarter-way-to-discover-behance-activity-7354026177709182976-kbhX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
      github: 'https://github.com/donthireddysaivarshini/Job-Scraper',
      image: 'https://picsum.photos/seed/jobs/600/400',
      imageHint: 'job search'
    },
    {
      tier: 2,
      title: 'Student Management System',
      year: '2024',
      description: 'A complete CRUD desktop application for educational institutions. Built with Java Swing and a MySQL backend, featuring role-based access and modules for attendance, grades, and messaging.',
      techStack: ['Java', 'Java Swing', 'MySQL', 'MVC'],
      liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_javaprojects-studentmanagementsystem-mysql-activity-7354776720702394368-Cac6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
      github: 'https://github.com/donthireddysaivarshini/Student-Management-System',
      image: 'https://picsum.photos/seed/student/600/400',
      imageHint: 'education management'
    },
    {
      tier: 2,
      title: 'AI-Powered Smart Surveillance',
      year: '2025',
      description: 'An IoT full stack solution for real-time anomaly detection using a Raspberry Pi and TensorFlow Lite. The system includes a Python backend for video processing and alerts.',
      techStack: ['IoT', 'Raspberry Pi', 'TensorFlow Lite', 'Python', 'OpenCV'],
      liveDemo: '#',
      github: '#',
      image: 'https://picsum.photos/seed/surveillance/600/400',
      imageHint: 'security camera'
    },
    {
      tier: 2,
      title: 'Comfort Companion - AI Chatbot',
      year: '2024',
      description: 'An AI chatbot platform providing personalized assistance and emotional support. Features an interactive chat interface and a natural language processing backend.',
      techStack: ['AI', 'NLP', 'Python', 'TypeScript', 'React', 'Next.js', 'Genkit'],
      liveDemo: 'https://www.linkedin.com/posts/saivarshini-donthireddy_of-course-it-doesnt-actually-talk-like-activity-7362544100404822017-APHM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEt6PFsBaskPzve_4TPMTCg1SDQWjaZukKM',
      github: 'https://github.com/donthireddysaivarshini/Comfort_Companion',
      image: 'https://picsum.photos/seed/chatbot/600/400',
      imageHint: 'chat bubbles'
    },
    {
      tier: 3,
      title: 'Financial Fraud Detection',
      year: '2025',
      description: 'An ML web service to detect fraudulent financial transactions. The system uses a Random Forest Classifier with 95% accuracy, exposed via a RESTful API.',
      techStack: ['Machine Learning', 'Scikit-learn', 'Pandas', 'Flask', 'REST API'],
      liveDemo: '#',
      github: '#',
      image: 'https://picsum.photos/seed/fraud/600/400',
      imageHint: 'finance chart'
    }
  ],
  skills: {
    frontend: [
      { name: 'HTML5/CSS3', level: 85, icon: Icons.html },
      { name: 'JavaScript', level: 70, icon: Icons.javascript },
      { name: 'Streamlit', level: 80, icon: Icons.python },
      { name: 'React', level: 45, icon: Icons.react },
      { name: 'Responsive Design', level: 85, icon: Smartphone },
    ],
    backend: [
      { name: 'Python', level: 85, icon: Icons.python },
      { name: 'Java', level: 70, icon: Icons.java },
      { name: 'SQL', level: 80, icon: Database },
      { name: 'API Development', level: 70, icon: Code },
      { name: 'Data Processing', level: 85, icon: Cpu },
    ],
    databasesAndDevOps: [
      { name: 'MySQL', level: 80, icon: Icons.mysql },
      { name: 'Database Design', level: 85, icon: Database },
      { name: 'Git/GitHub', level: 90, icon: Icons.github },
      { name: 'VS Code', level: 95, icon: Icons.vscode },
      { name: 'Testing & Debugging', level: 75, icon: Wrench },
    ],
    emerging: [
      { name: 'TensorFlow/Keras', level: 70, icon: Icons.tensorflow },
      { name: 'Scikit-learn', level: 80, icon: Icons.python },
      { name: 'OpenCV', level: 65, icon: BrainCircuit },
      { name: 'Raspberry Pi', level: 75, icon: Cpu },
    ],
  },
  achievements: {
    technical: [
      {
        title: 'HSBC Hackathon 2025 - Top 117 Finalist',
        description: 'Selected from over 30,000 developers worldwide, demonstrating full stack problem-solving under pressure.',
        icon: 'trophy',
      },
      {
        title: '5+ Full Stack Applications',
        description: 'Built multiple complete applications from concept to deployment, showcasing end-to-end development capabilities.',
        icon: 'package',
      },
    ],
    academic: [
      {
        title: 'CGPA: 9.11/10.0',
        description: 'Consistent academic excellence in Computer Science & Engineering.',
        icon: 'graduation-cap',
      },
      {
        title: '98.7% in Senior Secondary',
        description: 'Strong foundation in mathematics and science, enabling robust problem-solving skills.',
        icon: 'book',
      },
    ],
  },
  developmentProcess: [
    { title: 'Requirements Analysis', icon: Search, description: 'Stakeholder communication, system requirements gathering, and technical feasibility assessment.' },
    { title: 'System Design', icon: Layers, description: 'Database schema, API architecture, frontend wireframing, and technology stack selection.' },
    { title: 'Backend Development', icon: Server, description: 'Database implementation, API development, business logic, and security implementation.' },
    { title: 'Frontend Development', icon: Smartphone, description: 'UI/UX design, interactive component development, and responsive implementation.' },
    { title: 'Testing & Deployment', icon: ShieldCheck, description: 'Unit/integration testing, performance optimization, and production deployment.' },
    { title: 'Maintenance & Updates', icon: Wrench, description: 'Bug fixes, feature enhancements, performance monitoring, and user feedback integration.' },
  ],
  whatICanBuild: [
    { title: 'Full Stack Web Applications', description: 'E-commerce platforms, CMS, educational platforms, data dashboards, and API-driven applications.', icon: Code },
    { title: 'Specialized Solutions', description: 'ML-integrated applications, IoT data systems, automated data collection tools, and performance-optimized apps.', icon: BrainCircuit },
  ],
};

export type PortfolioData = typeof portfolioData;

    
    

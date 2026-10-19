/**
 * Marwa's portfolio content lives here.
 * Add or update projects without touching the React layout.
 * All displayed work is real; unconfirmed live links are intentionally omitted.
 */
export const profile = {
  name: 'Marwa Naikkhwah',
  firstName: 'Marwa',
  role: 'Computer Science Student & Frontend Developer',
  shortRole: 'Frontend Developer',
  location: 'Kabul, Afghanistan',
  email: 'marwanaikkhwah@gmail.com',
  linkedin: 'https://www.linkedin.com/in/marwa-naikkhwah-baa355338',
  github: 'https://github.com/marwanaikkhwah1',
  availability: 'Open to remote opportunities & collaboration',
  intro: 'I turn ideas into thoughtful digital experiences — blending clean code, functional design, and a curiosity to keep learning.',
  about: 'I am a Computer Science student and frontend developer based in Kabul, Afghanistan. I enjoy designing responsive, accessible interfaces and transforming ideas into practical web experiences. Through personal projects and team collaboration, I am growing my React, JavaScript, and software development skills. I am especially interested in meaningful technology projects and remote opportunities where I can contribute, learn, and grow.',
};

export const featuredProjects = [
  {
    id: 'blog', title: 'Blog Management Dashboard', type: 'Dashboard / Internship project', year: '2026',
    summary: 'A responsive dashboard interface designed to organize blog content and make everyday content-management tasks clearer.',
    contribution: 'Built and refined the frontend pages and responsive layouts during my web development internship.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: '/projects/blog-dashboard.svg',
    github: 'https://github.com/marwanaikkhwah1/blog-management-dashboardc',
    demo: 'https://marwa-blog-dashboard.netlify.app',
    alt: 'Stylized illustrative artwork representing a blog management dashboard',
    badge: 'Live demo',
  },
  {
    id: 'patient', title: 'MyPatientHUB', type: 'Healthcare / Team project', year: '2026',
    summary: 'A healthcare interface developed collaboratively, progressing from HTML, CSS, and JavaScript to reusable React components.',
    contribution: 'Worked on the dashboard and Find Doctor page, responsive layouts, React conversion, and Git collaboration.',
    tags: ['React', 'Vite', 'JavaScript', 'Git'],
    image: '/projects/patient-hub.svg',
    github: 'https://github.com/marwanaikkhwah1/MyPatientHUB',
    demo: '',
    alt: 'Stylized illustrative artwork representing a patient healthcare dashboard',
    badge: 'Team project',
  },
  {
    id: 'travel', title: 'Travel Recommendation', type: 'Website / Frontend', year: '2026',
    summary: 'A travel-themed website built with foundational web technologies to practice visual layout and user interactions.',
    contribution: 'Developed the interface using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/travel.svg',
    github: 'https://github.com/marwanaikkhwah1/travel-recommendation',
    demo: '',
    alt: 'Stylized illustrative artwork representing a travel destination website',
    badge: 'Source available',
  },
];

export const otherProjects = [
  {
    id: 'calculator', title: 'Calculator', type: 'JavaScript practice', year: '2026',
    summary: 'A small interactive calculator built to practice JavaScript events, functions, and everyday UI logic.',
    contribution: 'Built the calculator interface and interaction logic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/calculator.svg',
    github: 'https://github.com/marwanaikkhwah1/first-git/blob/main/calculator.html',
    demo: '',
    alt: 'Stylized illustrative artwork representing a calculator application',
    badge: 'Practice project',
  },
  {
    id: 'gallery', title: 'Responsive Image Gallery', type: 'Frontend / Gallery', year: '2026',
    summary: 'A responsive image gallery project focused on image presentation, layout, and client-side interactions.',
    contribution: 'Built the gallery frontend for different screen sizes.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/gallery.svg',
    github: 'https://github.com/marwanaikkhwah1/Responsive-image-gallery',
    demo: '',
    alt: 'Stylized illustrative artwork representing a responsive image gallery',
    badge: 'Practice project',
  },
];

export const certificates = [
  {
    title: 'JavaScript Programming Essentials',
    issuer: 'IBM', platform: 'Coursera', date: 'September 2026',
    description: 'Completed a course focused on core JavaScript programming concepts.',
    image: '/certificates/ibm-javascript-preview.png',
    alt: 'Cropped screenshot of the IBM JavaScript Programming Essentials Coursera certificate supplied by Marwa',
  },
  {
    title: 'Web Development Fundamentals: HTML, CSS, and JavaScript',
    issuer: 'University of Michigan', platform: 'Coursera', date: 'September 2026',
    description: 'Completed introductory studies in web development fundamentals.',
    image: '/certificates/michigan-web-preview.png',
    alt: 'Cropped screenshot of the University of Michigan Web Development Fundamentals Coursera certificate supplied by Marwa',
  },
];

export const skillGroups = [
  { label: 'FRONTEND', note: 'Used in web projects', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Responsive Design'] },
  { label: 'TOOLS & WORKFLOW', note: 'Development workflow', skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'Netlify'] },
  { label: 'ADDITIONAL STUDIES', note: 'Learning & academic foundations', skills: ['Python', 'Java', 'SQL'] },
];

export const education = [
  { degree: 'B.S. in Computer Science', school: 'University of the People', date: '2024 — Present', status: 'In progress' },
  { degree: 'Computer Science Studies', school: 'Women Online University', date: 'Present', status: 'In progress' },
  { degree: 'Bachelor’s in Law & Political Science', school: 'Kabul University', date: 'Graduated 2022', status: 'Completed' },
];

export const experience = [
  {
    title: 'Web Development Intern', organization: 'Hewad Future Consulting · HBC', date: 'October 2026',
    description: 'Frontend development experience through a UNICEF-supported program. Worked on responsive dashboard interfaces and practical web development tasks.',
    note: 'UNICEF-supported initiative, not direct UNICEF employment.',
  },
];

export const myProjects = [
  {
    id: 1,
    title: "JobHive - Job Portal Application",
    description:
      "A modern job portal application that connects job seekers with employers, providing features like job posting, applications, and secure authentication.",
    subDescription: [
      "Developed a full-stack job portal enabling job seekers and employers to post, search, and apply for jobs, using React.js, Node.js, and Express.js.",
      "Integrated secure authentication and user management with Clerk, supporting multi-role access for employers and applicants.",
      "Implemented advanced search, filtering, and pagination for job listings to optimize performance and usability.",
      "Enhanced reliability by configuring Sentry for real-time error monitoring and logging in production.",
      "Designed and built responsive, accessible UI components with Tailwind CSS, ensuring a mobile-first experience.",
      "Built scalable REST APIs for job management and applications using MongoDB for persistence.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/jobhive.jpg", // replace with your project image path
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 6,
        name: "Clerk",
        path: "/assets/logos/clerk.svg", // add if you have
      },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile", // replace with yours
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername", // replace with your repo
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yourusername", // optional
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    job: "JobHive - Job Portal",
    date: "2024-Present",
    contents: [
      "Engineered a scalable job portal connecting employers and applicants.",
      "Integrated Clerk authentication for secure role-based access.",
      "Built REST APIs for job posting, search, and application management.",
      "Enhanced UX with mobile-first responsive design using Tailwind CSS.",
      "Implemented error monitoring with Sentry and performance optimization techniques.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "Ongoing",
    contents: [
      "Building innovative web applications like JobHive to solve real-world problems.",
      "Continuously improving full-stack development skills with modern tools and frameworks.",
    ],
  },
];

export const reviews = [
  {
    name: "Emma",
    username: "@emma",
    body: "JobHive made my internship search so much easier! The search and filter system saved me a ton of time.",
    img: "https://robohash.org/emma",
  },
  {
    name: "Michael",
    username: "@michael",
    body: "Posting jobs as an employer was seamless. Love the clean UI and fast performance!",
    img: "https://robohash.org/michael",
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "The authentication flow is super smooth and secure. I felt confident applying through JobHive.",
    img: "https://robohash.org/sophia",
  },
  {
    name: "Daniel",
    username: "@daniel",
    body: "A well-designed platform. The mobile-first approach is a game-changer for quick job browsing.",
    img: "https://robohash.org/daniel",
  },
];

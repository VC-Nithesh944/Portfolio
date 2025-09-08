export const myProjects = [
  {
    id: 1,
    title: "JobHive - Job Portal Application",
    description:
      "A modern job portal application that connects job seekers with employers, providing features like job posting, applications, and secure authentication.",
    subDescription: [
      "Built a full-stack application using React.js, Node.js, Express.js, and MongoDB",
      "Integrated secure authentication and multi-role management with Clerk",
      "Implemented advanced job search with filtering and pagination",
      "Designed a responsive, mobile-first UI with Tailwind CSS",
    ],
    href: "https://job-hive-client.vercel.app/",
    logo: "",
    image: "/assets/projects/jobhive.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "Clerk", path: "/assets/logos/clerk.png" },
    ],
  },
  {
    id: 2,
    title: "Help2Heal - Doctor Appointment App",
    description:
      "An ongoing project to simplify booking doctor appointments with an intuitive interface and real-time scheduling.",
    subDescription: [
      "Developed appointment scheduling features with real-time availability.",
      "Designed a clean and responsive UI for patients and doctors.",
      "Integrated secure authentication for patients and healthcare providers.",
      "Currently adding features like prescription uploads and payment integration.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/help2heal.jpg",
    tags: [
      { id: 1, name: "NextJs", path: "/assets/logos/nextjs2.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 5, name: "NodeJs", path: "/assets/logos/nodejs.svg" },
    ],
  },
  {
    id: 3,
    title: "Soundstream - Spotify Inspired App",
    description:
      "A Spotify-inspired music streaming frontend built with React Native, designed to deliver a modern and smooth user experience.",
    subDescription: [
      "Designed and implemented Spotify-like UI using React Native components.",
      "Built navigation with React Navigation for seamless browsing between screens.",
      "Integrated dummy data for playlists, songs, and artists for demo purposes.",
      "Focused on pixel-perfect design, animations, and responsive layouts for mobile.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/soundstream.jpg",
    tags: [
      { id: 1, name: "React Native", path: "/assets/logos/reactnative.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Expo", path: "/assets/logos/expo.svg" },
    ],
  },
  {
    id: 4,
    title: "WeatherCast - Weather App",
    description:
      "A simple and clean weather application that fetches live weather data via an API and displays it in a user-friendly interface.",
    subDescription: [
      "Developed frontend interface with React for fetching and displaying weather data.",
      "Integrated OpenWeather API to fetch real-time weather updates.",
      "Added city-based search with instant results.",
      "Focused on creating a clean, minimal UI for a smooth user experience.",
    ],
    href: "https://vc-nithesh944.github.io/WeatherCast/",
    logo: "",
    image: "/assets/projects/weathercast.jpg",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nithesh-naik",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "#href",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itz_vc_nithesh/",
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
    title: "Mobile App Developer",
    job: "Help2Heal (Ongoing)",
    date: "2025-Present",
    contents: [
      "Building a doctor appointment booking system with React Native.",
      "Adding real-time availability and scheduling for patients and doctors.",
      "Working on integrations for payments and prescriptions.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "Ongoing",
    contents: [
      "Developed apps like Soundstream (Spotify-inspired) and WeatherCast (API-based weather app).",
      "Continuously learning and applying modern full-stack and mobile development practices.",
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
    body: "Help2Heal is exactly what our college needed. Booking appointments online is so much smoother now.",
    img: "https://robohash.org/michael",
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "Soundstream looks and feels like Spotify! Loved the smooth UI and animations.",
    img: "https://robohash.org/sophia",
  },
  {
    name: "Daniel",
    username: "@daniel",
    body: "WeatherCast is clean and simple. Perfect when I just need a quick weather check.",
    img: "https://robohash.org/daniel",
  },
];

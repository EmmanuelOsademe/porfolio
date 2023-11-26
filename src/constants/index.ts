import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  threejs,
  customizeit,
  shopinn,
  metaverses,
  grafql,
  next,
  janet,
  gloria,
  adetayo,
  java,
  springboot,
  dalle,
  devOverflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Product Manager",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "grafql",
    icon: grafql,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "springboot",
    icon: springboot,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "CypherCrescent",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Present",
    points: [
      "Developing and maintaining web applications using Nextjs, React.js, Nodejs, MongoDB, other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Seamfix",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jun 2023",
    points: [
      "Developing and maintaining backend services using Springboot (Java).",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Supporting the frontend team with codes to consume the services.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SyreSoft",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Nov 2023",
    points: [
      "Developing and maintaining web applications using Nextjs, Reactjs, Nodejs, MongoDB, grafql and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility using Tailwind.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Emmanuel has the rare ability to work independently, and stay on task/problems till they are resolved.",
    name: "Adetayo Adeyemi ",
    designation: "CTO",
    company: "SyreSoft Limited",
    image: adetayo,
  },
  {
    testimonial:
      "Emmanuel has an impressive understanding of software engineering, and employs best practices in his approach to solving problems.",
    name: "Gloria Nwokoye",
    designation: "Backend Engineer",
    company: "M-Kopa",
    image: gloria,
  },
  {
    testimonial:
      "Emmanuel has exceptional critical thinking and problem-solving skills. He is quick to adapt new technologies and cutting-edge approaches",
    name: "Janet Ikhile",
    designation: "Backend Engineer",
    company: "Seamfix",
    image: janet,
  },
];

const projects = [
  {
    name: "Shop Inn",
    description:
      "A Web-based e-Commerce platform that allows users to search, order and pay for products, providing an efficient solution for meeting their shopping needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: shopinn,
    source_code_link: "https://github.com/EmmanuelOsademe/shop-in",
    deployment_link: "https://shop-7zpy5wad1-emmanuelosademe.vercel.app/",
  },
  {
    name: "Dev Overflow",
    description:
      "A Stack Overflow clone, this web application provides a collaborative platform for developers to ask questions, and for asked questions to be answered.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: devOverflow,
    source_code_link: "https://github.com/EmmanuelOsademe/devoverflow",
    deployment_link: "https://devoverflow-eight.vercel.app/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/EmmanuelOsademe/emmys-carhub",
    deployment_link:
      "https://emmys-carhub-6cdu7y7id-emmanuelosademe.vercel.app/",
  },
  {
    name: "Metaverses",
    description:
      "A prototype of the Metaversus landing page, with fantastic animations for visualising metaverses",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverses,
    source_code_link: "https://github.com/EmmanuelOsademe/metaverses",
    deployment_link: "https://metaverses-five.vercel.app/",
  },
  {
    name: "Customize It",
    description:
      "A web application for customizing and downloading T-Shirts leveraging AI and other features for colors and texture modifications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: customizeit,
    source_code_link: "https://github.com/EmmanuelOsademe/customizzer",
    deployment_link:
      "https://customizzer-b9sfyg1zz-emmanuelosademe.vercel.app/",
  },
  {
    name: "DALL-E",
    description:
      "A social-themed web application that allows the community to created and share their AI-generated images leveraging Open-AI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/EmmanuelOsademe/dalle-imagery",
    deployment_link: "https://dalle-imagery.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

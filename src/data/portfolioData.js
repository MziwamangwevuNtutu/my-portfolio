 import movieLibraryImg from "../assets/Movie-Library.png"
 import TodoImg from "../assets/Todo.png"
 import LMSImage from "../assets/Loan Management System.png"

export const portfolioData = {
  personal: {
    name: "Mziwamangwevu Ntutu",
    title: "Full Stack Engineer",
    bio: "Passionate about building scalable web applications and exploring new technologies. My journey in software development is driven by curiosity and a love for clean, efficient code. Whether I'm building a Spring Boot REST API or crafting a responsive React.js interface, I bring the same level of dedication and attention to detail.",
    email: "mzi.ntutu@gmail.com",
    socials: [
      { name: "GitHub", href: "https://github.com/MziwamangwevuNtutu", type: "github" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/mziwamangwevu-ntutu-568863232/", type: "linkedin" },
      { name: "Email", href: "mailto:mzi.ntutu@gmail.com", type: "email" },
    ]
  },
  skills: [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "SQL", "Java","Rest APIs","Spring Boot","Python"
  ],
  projects: [
    {
      id: 1,
      title: "Movie Library Dashboard",
      description: "A dynamic dashboard for managing and exploring a movie library, built with React for the frontend and Java with Spring Boot for the backend.",
      tags: ["React", "Java", "MySQL"],
      image: movieLibraryImg,
      link: "https://teal-gingersnap-06b461.netlify.app/",
      repo: "https://github.com/MziwamangwevuNtutu/movie-library",
      repoBackend: "https://github.com/MziwamangwevuNtutu/Movie-Library-Backend"
    },
    {
      id: 2,
      title: "To-do List Application",
      description: "A simple and efficient to-do list application built with React for the frontend and Java with Spring Boot for the backend.",
      tags: ["React", "Java", "MySQL"],
      image: TodoImg,
      link: "https://demo.com",
      repo: "https://github.com/MziwamangwevuNtutu/todo-frontend",
      repoBackend: "https://github.com/MziwamangwevuNtutu/ToDoList-Backend"
    },
    {
      id: 3,
      title: "Loan Management System",
      description: "A comprehensive system for managing loan applications and tracking repayment schedules.",
      tags: [ "React","MySQL"],
      image: LMSImage,
      link: "https://demo.com",
      repo: "https://github.com/MziwamangwevuNtutu/Loan-Management-System--4-",
      repoBackend: ""
    }
  ]
};
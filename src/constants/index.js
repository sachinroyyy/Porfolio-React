import project1 from "../assets/projects/Screenshot 2024-07-31 020035.png";
import project2 from "../assets/projects/hsm.png";
import project3 from "../assets/projects/Screenshot 2024-07-31 021759.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const TRAINING = [
  {
    year: "Jun 2023 - July 2023",
    role: "DSA for top companies and Low Level Design",
    company: "Programming Pathshala.",
    description: `Utilized complex data structures and algorithms to optimize performance and improve the efficiency of code.
                    Resolved complex problems by breaking them into manageable components and designing detailed low-level solution.`,
    technologies: ["Low level design and Data Structures and Algorithms"],
  },

];

export const PROJECTS = [
  {
    title: "Job Portal",
    image: project1,
    description:
      "A web application for job seeking with a multi-role login system (Admin, Applicant).Displayed details of available jobs, allowing only admins to post new job listings.Facilitated admins with additional features in the navbar to supervise the jobs and applications.Enabled applicants to fetch and view all the applications applied and edit or delete.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Hospital Management App",
    image: project2,
    description:
      "Created a hospital management app with a special dashboard for the hospital admin and staff.Provided secure login and signup facilities . Delivered tailored information and functionalities for both admin and patient users. Enabled patients to seamlessly book appointments with doctors and access information on available doctors.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "E-book Store Management App",
    image: project3,
    description:
      "Built a book store management application which enabled readers to explore and add books.Enabled secure registration and login for users.Allowed admins to edit and update book- related data.Provided distinct information and functionalities for admins and users.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },

];

export const CONTACT = {
  address: "Jalandhar Punjab ",
  phoneNo: "+91 8709262180 ",
  email: "sachinroy9973@gmail.com",
};

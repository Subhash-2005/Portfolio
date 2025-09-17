document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.querySelector(".project-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const projects = [
        {
            id: 1,
            name: "Learn Hub – Online Learning Platform",
            description: "Built a scalable full-stack e-learning web application using HTML, CSS, JavaScript (Frontend) and Node.js, Express.js, MongoDB (Backend). Developed RESTful APIs for user registration, login, and course management using Express.js and Mongoose. Implemented secure authentication and authorization using JWT for token-based access and bcrypt for password hashing. Planning enhancements like role-based dashboards, course progress tracking, quizzes, and certification features.",
            image: "./assets/elearning.png", // changed image
            techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
            categories: ["js", "mongodb"],
            liveLink: "#",
            githubLink: "#"
        },
        {
            id: 2,
            name: "Quiz App – React/Vite Single-Page Application",
            description: "Developed an interactive quiz platform using React.js with a Node.js + Express.js backend and MongoDB. Implemented a countdown timer, hint feature, and persistent high-score tracking using localStorage and Firebase. Integrated Firebase Authentication for secure user login and quiz participation. Planned Features: Role-based access with admin-created quizzes, unique join codes for students, and an admin dashboard for quiz creation, question management, and analytics.",
            image: "./assets/quiz.png", // changed image
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Vite"],
            categories: ["react", "mongodb"],
            liveLink: "#",
            githubLink: "#"
        }
    ];

    function displayProjects(filter = "all") {
        projectGrid.innerHTML = "";
        const filteredProjects = filter === "all" ? projects : projects.filter(project => project.categories.includes(filter));

        filteredProjects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.dataset.id = project.id;
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <div class="project-card-content">
                    <h3>${project.name}</h3>
                    <p>${project.description.substring(0, 150)}...</p> <!-- Truncate for card view -->
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join("")}
                    </div>
                </div>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    // Initial display
    displayProjects();

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            displayProjects(button.dataset.filter);
        });
    });

    // Project Modal (simplified for now, will be expanded)
    projectGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".project-card");
        if (card) {
            const projectId = parseInt(card.dataset.id);
            const project = projects.find(p => p.id === projectId);
            if (project) {
                // In a real scenario, you\'d populate a modal here
                alert(`Project: ${project.name}\nDescription: ${project.description}\nTech Stack: ${project.techStack.join(", ")}`);
            }
        }
    });
});

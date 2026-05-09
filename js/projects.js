document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.querySelector(".project-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectModal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalTechStack = document.getElementById("modalTechStack");
    const modalLiveLink = document.getElementById("modalLiveLink");
    const modalGithubLink = document.getElementById("modalGithubLink");
    const closeButton = document.querySelector(".close-button");

    const projects = [
        {
            id: 1,
            name: "Learn Hub – E-Learning Platform",
            description: "Developed a scalable MERN stack e-learning platform with role-based access, course management, and secure authentication.",
            image: "./assets/elearning.png",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
            categories: ["mern", "mongodb"],
            liveLink: "https://learning-hub-oowi.onrender.com/",
            githubLink: "https://github.com/Subhash-2005/Learning_hub",
            features: [
                "Role-based login for Admin, Instructor, and Student",
                "Admin course management with Add/Edit/Delete",
                "Secure JWT authentication and protected APIs",
                "Responsive dashboard and modern UI"
            ],
            responsibilities: [
                "Built frontend with React.js and ensured responsive UI",
                "Implemented backend APIs using Node.js and Express.js",
                "Integrated MongoDB and Firebase Authentication",
                "Designed data models and course management logic"
            ]
        },
        {
            id: 2,
            name: "Quiz App – Full Stack Quiz Platform",
            description: "Built a full-stack quiz platform with secure authentication, admin quiz creation, performance tracking, and analytics.",
            image: "./assets/quiz.png",
            techStack: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
            categories: ["mern", "react", "mongodb"],
            liveLink: "https://quiz-frontend-0g4l.onrender.com/",
            githubLink: "https://github.com/Subhash-2005/quiz",
            features: [
                "User authentication and authorization",
                "Admin-created quizzes and access control",
                "Leaderboard and performance analytics",
                "Automatic scoring and quiz history"
            ],
            responsibilities: [
                "Developed frontend with React.js and Vite",
                "Created backend endpoints using Express.js",
                "Managed secure sessions with JWT",
                "Optimized data loading and quiz flow"
            ]
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
                    <p>${project.description.substring(0, 150)}...</p>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join("")}
                    </div>
                    <div class="project-buttons">
                        <a href="${project.liveLink}" target="_blank" class="btn">Live Demo</a>
                        <a href="${project.githubLink}" target="_blank" class="btn">GitHub</a>
                    </div>
                </div>
            `;
            projectGrid.appendChild(projectCard);
        });
    }

    function openModal(project) {
        modalTitle.textContent = project.name;
        modalDescription.textContent = project.description;
        modalTechStack.innerHTML = project.techStack.map(tech => `<span>${tech}</span>`).join("");
        document.getElementById("modalFeatures").innerHTML = project.features.map(feature => `<li>${feature}</li>`).join("");
        document.getElementById("modalResponsibilities").innerHTML = project.responsibilities.map(item => `<li>${item}</li>`).join("");
        modalLiveLink.href = project.liveLink;
        modalGithubLink.href = project.githubLink;
        projectModal.style.display = "flex";
    }

    function closeModal() {
        projectModal.style.display = "none";
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

    projectGrid.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") return;
        const card = e.target.closest(".project-card");
        if (card) {
            const projectId = parseInt(card.dataset.id, 10);
            const project = projects.find(p => p.id === projectId);
            if (project) {
                openModal(project);
            }
        }
    });

    closeButton.addEventListener("click", closeModal);
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });
});

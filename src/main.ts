interface Project {
    name: string;
    description: string;
    githubUrl: string;
}

const projects: Project[] = [
    {
        name: "HiberMenta",
        description: "A CRUD MVC project, using: Java 8, Hibernate and Mentawai.",
        githubUrl: "https://github.com/merlinmec/HiberMenta"
    },
    {
        name: "Arvore Geradora Minima",
        description: "Trabalho em que usei Python para criar uma interface gráfica do usuário usando a biblioteca tkinter para resolver o problema da Árvore Geradora Mínima.",
        githubUrl: "https://github.com/merlinmec/Arvore-Geradora-Minima"
    }
];

function loadProjects() {
    const projectContainer = document.getElementById("project-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        const title = document.createElement("h3");
        title.innerText = project.name;

        const description = document.createElement("p");
        description.innerText = project.description;

        const link = document.createElement("a");
        link.href = project.githubUrl;
        link.className = "project-link";
        link.innerText = "Ver no GitHub";
        link.target = "_blank";

        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);

        projectContainer?.appendChild(projectCard);
    });
}

loadProjects();

"use strict";
var projects = [
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
    var projectContainer = document.getElementById("project-container");
    projects.forEach(function (project) {
        var projectCard = document.createElement("div");
        projectCard.className = "project-card";
        var title = document.createElement("h3");
        title.innerText = project.name;
        var description = document.createElement("p");
        description.innerText = project.description;
        var link = document.createElement("a");
        link.href = project.githubUrl;
        link.className = "project-link";
        link.innerText = "Ver no GitHub";
        link.target = "_blank";
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);
        projectContainer === null || projectContainer === void 0 ? void 0 : projectContainer.appendChild(projectCard);
    });
}
loadProjects();

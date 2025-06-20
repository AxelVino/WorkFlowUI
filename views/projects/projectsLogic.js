import myProjectsView from "./views/myProjects/myProjectsView.js";
import evaluateProjectsView from "./views/evaluateProject/evaluateProjectsView.js";
import createProjectView from "./views/createProject/createProjectView.js";

const inicializeProjectSection = () => {
  const myProjects = document.getElementById("myProjects");
  const evaluateProjects = document.getElementById("evaluateProjects");
  const createProject = document.getElementById("createProjects");

  const SeeProjects = () => {
    let index = document.getElementById("viewBox");
    index.innerHTML = "";
    index.appendChild(myProjectsView());

    let currentPage = 0; // Pagina inicial
    let pageSize = 10; // Número de proyectos por página

    const fetchData = async (endpoint) => {
      try {
        const response = await fetch(endpoint, { method: "GET" });
        if (!response.ok) throw new Error("Error");
        return response.json();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAndRenderProjects = async () => {};

    // Evento para buscar con paginación
    searchButton.addEventListener("click", async () => {
      currentPage = 0;
      fetchAndRenderProjects();
    });
    // Botón "Next"
    nextButton.addEventListener("click", () => {
      currentPage++;
      fetchAndRenderProjects();
    });
    // Botón "Back"
    prevButton.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        fetchAndRenderProjects();
      }
    });
  };

  const EvaluateProjects = () => {
    let index = document.getElementById("viewBox");
    index.innerHTML = "";
    index.appendChild(evaluateProjectsView());
  };

  const CreateProject = () => {
    let index = document.getElementById("viewBox");
    index.innerHTML = "";
    index.appendChild(createProjectView());
  };

  myProjects.addEventListener("click", SeeProjects);

  evaluateProjects.addEventListener("click", EvaluateProjects);

  createProject.addEventListener("click", CreateProject);
};

export { inicializeProjectSection };

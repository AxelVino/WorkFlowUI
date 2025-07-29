import createProjectView from "./views/createProject/createProjectView.js";
import { EP_GETPROJECT } from "../../config.js";

const inicializeProjectSection = () => {
  let url = EP_GETPROJECT;

  const createProject = document.getElementById("createProjects");
  const searchButton = document.querySelector(".sendButton");
  const projectsList = document.getElementById("proyectName");

  // Variables para paginación
  let currentPage = 1;
  let totalPages = 1;
  let projectsPerPage = 10;
  let allProjects = [];

  const inicializePagination = () => {
    let prevButton = document.getElementById("paginationButtonBack");
    let nextButton = document.getElementById("paginationButtonNext");
    let pageNumber = document.getElementById("pageNumber");

    if (prevButton && nextButton && pageNumber) {
      prevButton.remove();
      nextButton.remove();
      pageNumber.remove();
    }

    let container = document.getElementById("paginationContainer");

    const back = document.createElement("button");
    back.textContent = "Anterior";
    back.className = "paginationButton";
    back.id = "paginationButtonBack";
    back.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayProjects();
        updatePaginationButtons();
      }
    });

    const page = document.createElement("span");
    page.textContent = `Página ${currentPage} de ${totalPages}`;
    page.className = "pageNumber";
    page.id = "pageNumber";

    const next = document.createElement("button");
    next.textContent = "Siguiente";
    next.className = "paginationButton";
    next.id = "paginationButtonNext";
    next.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayProjects();
        updatePaginationButtons();
      }
    });

    container.appendChild(back);
    container.appendChild(page);
    container.appendChild(next);

    // Actualizar el estado de los botones después de crearlos
    updatePaginationButtons();
  };

  const updatePaginationButtons = () => {
    const prevButton = document.getElementById("paginationButtonBack");
    const nextButton = document.getElementById("paginationButtonNext");
    const pageNumber = document.getElementById("pageNumber");

    if (prevButton && nextButton && pageNumber) {
      // Deshabilitar ambos botones si hay 10 o menos proyectos
      if (allProjects.length <= 10) {
        prevButton.disabled = true;
        nextButton.disabled = true;
      } else {
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
      }
      pageNumber.textContent = `Página ${currentPage} de ${totalPages}`;
    }
  };

  // Función para mostrar proyectos en la página actual

  const displayProjects = () => {
    // Limpiar lista actual
    projectsList.innerHTML = "";

    // Calcular índices para la página actual
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, allProjects.length);

    // Si no hay proyectos, mostrar mensaje
    if (allProjects.length === 0) {
      const emptyItem = document.createElement("li");
      emptyItem.textContent = "No se encontraron proyectos";
      projectsList.appendChild(emptyItem);
      // Actualizar botones de paginación
      updatePaginationButtons();
      return;
    }

    // Mostrar proyectos de la página actual
    for (let i = startIndex; i < endIndex; i++) {
      const project = allProjects[i];
      const listItem = document.createElement("li");
      listItem.textContent = project.title;
      listItem.className = "project-item";
      listItem.addEventListener("click", () => {
        // Aquí se puede agregar la lógica para mostrar detalles del proyecto
        console.log("Proyecto seleccionado:", project);
      });
      projectsList.appendChild(listItem);
    }

    // Rellenar con elementos vacíos si hay menos de 10 proyectos
    for (let i = endIndex - startIndex; i < projectsPerPage; i++) {
      const emptyItem = document.createElement("li");
      projectsList.appendChild(emptyItem);
    }

    // Actualizar botones de paginación después de mostrar los proyectos
    updatePaginationButtons();
  };

  // Función para buscar proyectos
  const searchProjects = async () => {
    try {
      // Obtener valores de los filtros
      const titleFilter = document.getElementById("nameProject").value;
      const statusFilter = document.getElementById("statusFilter").value;
      const approvalUserFilter =
        document.getElementById("approverUserFilter").value;

      // Construir URL con parámetros de búsqueda
      let searchUrl = new URL(url);

      // Agregar parámetros solo si tienen valor
      if (titleFilter) searchUrl.searchParams.append("title", titleFilter);
      if (statusFilter) searchUrl.searchParams.append("status", statusFilter);
      if (approvalUserFilter)
        searchUrl.searchParams.append("approvalUser", approvalUserFilter);

      // Agregar el ID del usuario actual como applicant
      if (window.savedId)
        searchUrl.searchParams.append("applicant", window.savedId);

      // Realizar la solicitud
      const response = await fetch(searchUrl);
      if (!response.ok) throw new Error("Error en la respuesta de la red");

      const data = await response.json();
      allProjects = data;

      // Calcular total de páginas
      totalPages = Math.ceil(allProjects.length / projectsPerPage);
      if (totalPages === 0) totalPages = 1;

      // Resetear a la primera página
      currentPage = 1;
      inicializePagination();
      // mostrar proyectos
      displayProjects();
    } catch (error) {
      console.error("Error al buscar proyectos:", error);
      projectsList.innerHTML = "<li>Error al cargar proyectos</li>";
    }
  };

  // Event listener para el botón de búsqueda
  searchButton.addEventListener("click", searchProjects);

  // Event listener para crear proyecto
  const CreateProject = () => {
    let dialogRoot = document.getElementById("dialogRoot");
    dialogRoot.innerHTML = "";
    dialogRoot.appendChild(createProjectView());
    dialogRoot.style.display = "flex";

    function hideModal() {
      dialogRoot.style.display = "none";
    }

    function handleOutsideClick(event) {
      if (event.target === dialogRoot) {
        hideModal();
      }
    }

    const closeButton = document.getElementsByClassName("closeCreate")[0];
    closeButton.addEventListener("click", hideModal);
    dialogRoot.addEventListener("click", handleOutsideClick);
  };

  createProject.addEventListener("click", CreateProject);
};

export { inicializeProjectSection };

import createProjectView from "./views/createProject/createProjectView.js";

const inicializeProjectSection = () => {
  const createProject = document.getElementById("createProjects");

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

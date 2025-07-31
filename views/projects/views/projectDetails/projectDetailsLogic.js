import { EP_PATCHPROJECT } from "../../../../config";

document.body.addEventListener("click", async function (event) {
  if (event.target.id === "projectDetailsEditButton") {
    await initializeProjectDetails();
  }
});

const initializeProjectDetails = async () => {
  const url = new URL(EP_PATCHPROJECT);

  const modifyProject = document.getElementById("projectDetailsEditButton");
  const closeButton = document.getElementsByClassName("closeDetails")[0];
  const dialog = document.getElementById("projectStepDialog");

  function hideModal() {
    dialog.style.display = "none";
  }

  closeButton.addEventListener("click", hideModal);

  modifyProject.addEventListener("click", async () => {
    const dialog = document.getElementById("projectStepDialog");
    dialog.innerHTML = "";
    dialog.style.display = "flex";
  });
};

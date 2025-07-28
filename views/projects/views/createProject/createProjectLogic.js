import { EP_POSTPROJECT } from "../../../../config.js";
import { savedId } from "../../../../main.js";

let url = new URL(EP_POSTPROJECT);

document.body.addEventListener("click", async function (event) {
  if (event.target.id === "createButton") {
    await handleInteraction();
  }
});

const handleInteraction = async () => {
  let errorMsgTitle = document.getElementById("errorMsgTitle");
  let errorMsgDescription = document.getElementById("errorMsgDescription");
  let errorMsgAmount = document.getElementById("errorMsgAmount");
  let errorMsgDuration = document.getElementById("errorMsgDuration");

  let inputProjectTitle = document.getElementById("projectTitle");
  let inputProjectDescription = document.getElementById("projectDescription");
  let inputProjectAmount = document.getElementById("projectAmount");
  let inputProjectDuration = document.getElementById("projectDuration");
  let selectProjectArea = document.getElementById("projectArea");
  let selectProjectType = document.getElementById("projectType");

  let savedUser = savedId;

  errorMsgDescription.style.display = "none";
  errorMsgAmount.style.display = "none";
  errorMsgDuration.style.display = "none";
  errorMsgTitle.style.display = "none";

  if (!inputProjectTitle.value.trim()) {
    errorMsgTitle.textContent = "El título no puede estar vacío";
    errorMsgTitle.style.display = "flex";
    return;
  }

  if (!inputProjectDescription.value.trim()) {
    errorMsgDescription.textContent = "La descripción no puede estar vacía";
    errorMsgDescription.style.display = "flex";
    return;
  }

  const amount = Number(inputProjectAmount.value);
  if (amount <= 0) {
    errorMsgAmount.textContent = "El monto no puede ser vacio";
    errorMsgAmount.style.display = "flex";
    return;
  }

  const duration = Number(inputProjectDuration.value);
  if (duration <= 0) {
    errorMsgDuration.textContent = "La duración no puede ser vacia";
    errorMsgDuration.style.display = "block";
    return;
  }

  const loadingContainer = document.getElementById("loadingContainer");
  loadingContainer.style.display = "flex";

  const requestData = {
    title: inputProjectTitle.value,
    description: inputProjectDescription.value,
    amount: amount,
    duration: duration,
    area: selectProjectArea.value,
    status: 1,
    type: selectProjectType.value,
    user: savedUser,
  };

  const data = await fetchData(url, requestData);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loadingContainer.style.display = "none";

  if (data) {
    const successDialog = document.getElementById("successDialog");
    successDialog.style.display = "flex";

    const successOkButton = document.getElementById("successOkButton");
    successOkButton.addEventListener("click", () => {
      const dialogRoot = document.getElementById("dialogRoot");
      dialogRoot.style.display = "none";
    });
  }
};

const fetchData = async (endpoint, requestData) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      errorMsgTitle.textContent = errorData.message || "Error inesperado";
      errorMsgTitle.style.display = "block";
      return;
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error("Error en fetchData:", error);
    alert("Error, try again.");
  }
};

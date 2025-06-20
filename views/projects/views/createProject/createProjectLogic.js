import { EP_POSTPROJECT } from "../../../../config.js";
import { savedId } from "../../../../main.js";

let url = new URL(EP_POSTPROJECT);

let errorMsgTitle = document.getElementById("errorMsgTitle");
let errorMsgDescription = document.getElementById("errorMsgDescription");
let errorMsgAmount = document.getElementById("errorMsgAmount");
let errorMsgDuration = document.getElementById("errorMsgDuration");

document.body.addEventListener("click", async function (event) {
  if (event.target.id === "createButton") {
    await handleInteraction();
  }
});

const handleInteraction = async () => {
  let inputProjectTitle = document.getElementById("projectTitle");
  let inputProjectDescription = document.getElementById("projectDescription");
  let inputProjectAmount = document.getElementById("projectAmount");
  let inputProjectDuration = document.getElementById("projectDuration");
  let selectProjectArea = document.getElementById("projectArea");
  let selectProjectType = document.getElementById("projectType");

  inputProjectAmount.addEventListener("keydown", function (e) {
    if (e.key === "-" || e.key === "." || e.key === "e" || e.key === ",") {
      e.preventDefault();
    }
  });

  inputProjectDuration.addEventListener("keydown", function (e) {
    if (e.key === "-" || e.key === "." || e.key === "e" || e.key === ",") {
      e.preventDefault();
    }
  });

  let savedUser = savedId;

  const requestData = {
    title: inputProjectTitle.value,
    description: inputProjectDescription.value,
    amount: inputProjectAmount.value,
    duration: inputProjectDuration.value,
    area: selectProjectArea.value,
    status: 1,
    type: selectProjectType.value,
    user: savedUser,
  };
  const data = await fetchData(url, requestData);
  if (data) {
    console.log("creado con exito");
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
      errorMsgTitle.textContent = "Title in use";
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

import { router } from "./router.js";
import loginDialog from "./views/dialogs/loginDialog.js";
import { EP_GETCLIENT } from "./config.js";
import { Disable } from "./utils.js";
import { inicializeProjectSection } from "./views/projects/projectsLogic.js";

let savedId = null;
window.savedId = null; // Hacer accesible globalmente

const lazyLoad = () => {
  const dialog = document.getElementById("dialogRoot");
  dialog.innerHTML = "";

  // Crear overlay para bloquear clics
  const blocker = document.createElement("div");
  blocker.className = "overlay-blocker";
  blocker.id = "clickBlocker";

  // Crear contenedor de loading
  const loadingContainer = document.createElement("div");
  loadingContainer.id = "loadingContainer";
  loadingContainer.className = "loading-container";
  loadingContainer.style.display = "flex";

  const spinner = document.createElement("div");
  spinner.className = "loading-spinner";

  const text = document.createElement("p");
  text.textContent = "Validando usuario...";

  loadingContainer.appendChild(spinner);
  loadingContainer.appendChild(text);

  // Agregar todo al DOM
  document.body.appendChild(blocker); // para bloquear clics globales
  dialog.appendChild(loadingContainer);
  dialog.style.display = "flex";
};

const inicializeHomeSection = () => {
  // Variables globales
  let selectedClient = null;

  const btnLogin = document.getElementById("btnLogin");
  const projects = document.getElementById("projectsRef");
  const userName = document.getElementById("userName");
  const btnLogOut = document.getElementById("btnLogOut");
  if (savedId == null) {
    projects.style.visibility = "hidden";
  }

  const defaultLoad = () => {
    const dialog = document.getElementById("dialogRoot");

    dialog.innerHTML = "";
    dialog.appendChild(loginDialog());
    dialog.style.display = "flex";

    const btnCloseModal = document.getElementsByClassName("close")[0];
    const dialogBtn = document.getElementById("dialogBtn");
    const errorMsg = document.getElementById("errorMsg");
    let input = document.getElementById("id");

    document.getElementById("id").addEventListener("keydown", function (e) {
      if (e.key === "-" || e.key === "." || e.key === "e" || e.key === ",") {
        e.preventDefault(); // Bloquea el ingreso de negativos, decimales y notación científica
      }
    });

    // Función para ocultar el modal
    function hideModal() {
      dialogRoot.style.display = "none";
    }

    // Manejo del evento click fuera del modal
    function handleOutsideClick(event) {
      if (event.target === dialogRoot) {
        hideModal();
      }
    }

    function handleLogOutClick() {
      userName.textContent = "";
      selectedClient = null;
      savedId = null;
      window.savedId = null; // Restablecer la variable global
      projects.style.visibility = "hidden";
      btnLogin.style.display = "flex";
      userName.style.display = "none";
      btnLogOut.style.display = "none";
      errorMsg.textContent = "";
      input.value = "";
      window.location.hash = "#/home";
    }

    // Función para actualizar la UI al seleccionar un cliente

    function updateUIForClient(client) {
      // Mostrar el nombre del cliente

      const { name } = client;
      const lastName = name.split(" ")[1] || ""; // Obtiene la segunda parte o una cadena vacía si no existe

      userName.textContent = lastName;

      // Ocultar/mostrar elementos
      projects.style.visibility = "visible";
      btnLogin.style.display = "none";
      userName.style.display = "flex";
      btnLogOut.style.display = "flex";

      hideModal();
    }

    // Función para manejar la selección del cliente
    async function handleAcceptClick() {
      let input = document.getElementById("id");
      const savedValue = parseInt(input.value);
      const dialogBtn = document.getElementById("dialogBtn");
      errorMsg.classList.remove("errorVisible");

      if (isNaN(savedValue)) {
        errorMsg.textContent = "Porfavor, ingrese un ID ";
        errorMsg.classList.add("errorVisible");
        return;
      }

      try {
        lazyLoad();

        document.getElementById("loadingContainer").style.display = "flex";

        dialogBtn.disabled = true;

        const response = await fetch(EP_GETCLIENT);
        if (!response.ok) throw new Error("Error en la respuesta de la red");

        const data = await response.json();
        const client = data.find((user) => user.id === savedValue);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        dialogBtn.disabled = false;

        if (client) {
          selectedClient = client;
          savedId = client.id;
          window.savedId = client.id; // Actualizar la variable global
          window.location.hash = "#/home";

          updateUIForClient(client);
          document.getElementById("clickBlocker")?.remove();
        } else {
          errorMsg.textContent = "ID Invalido";
          errorMsg.classList.add("errorVisible");
        }
      } catch (error) {
        dialogBtn.disabled = false;
        console.error("Error en la solicitud fetch:", error);
        errorMsg.textContent = "Error al validar usuario";
        errorMsg.classList.add("errorVisible");
      }
    }

    btnCloseModal.addEventListener("click", hideModal);

    window.addEventListener("click", handleOutsideClick);

    dialogBtn.addEventListener("click", handleAcceptClick);

    btnLogOut.addEventListener("click", handleLogOutClick);
  };

  btnLogin.addEventListener("click", defaultLoad);

  projects.addEventListener("click", Disable);

  //Carrousel logica

  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const slideWidth = () => carousel.offsetWidth;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: slideWidth(), behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -slideWidth(), behavior: "smooth" });
  });

  //Logica de deslizamiento

  const carouselBox = document.getElementById("carouselRef");

  carouselBox.addEventListener("click", () => {
    const target = document.getElementById("carouselBox");
    target.scrollIntoView({ behavior: "smooth" });
  });

  const plataform = document.getElementById("plataformRef");

  plataform.addEventListener("click", () => {
    const target = document.getElementById("plataform");
    target.scrollIntoView({ behavior: "smooth" });
  });

  const contact = document.getElementById("contactRef");

  contact.addEventListener("click", () => {
    const target = document.getElementById("contact");
    target.scrollIntoView({ behavior: "smooth" });
  });

  const bindScrollLinks = () => {
    document.querySelectorAll("a[data-target]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  };

  bindScrollLinks();
};

inicializeHomeSection();

//Logica de renderizado

window.addEventListener("load", () => {
  if (window.location.hash === "#/home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.location.hash = "#/home";
  }
});

window.addEventListener("hashchange", () => {
  router(window.location.hash);
  if (window.location.hash == "#/projects") {
    inicializeProjectSection();
  } else if (window.location.hash == "#/home") {
    inicializeHomeSection();
  }
});

export { savedId };

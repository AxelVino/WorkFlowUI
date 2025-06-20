import home from "./views/home/home.js";
import projects from "./views/projects/projects.js";

const content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/home": {
      return content.appendChild(home());
    }
    case "#/projects": {
      return content.appendChild(projects());
    }
  }
};

export { router };

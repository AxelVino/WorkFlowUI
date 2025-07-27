import { loadStyle } from "../../loadStyles.js";
import { loadScript } from "../../loadScripts.js";

export default () => {
  const views = `
  <div class="filtersBox" id="viewBox">
    <div class="myProjectsSection">
      <div class="filtersTitle" >
        <h2>MIS PROYECTOS</h2>
      </div>
      <div class="filtersInterface">
        <div class="filters">
          <div class="nameFilter" id="nameFilter">
                  <label for="nameProject" class="nameFilterLabel">Nombre</label>
                  <input
                    type="text"
                    id="nameProject"
                    name="name"
                    class="nameProjectFilter"
                    required
                  />
          </div>
          <div class="statusFilterDiv">
            <label for="statusFilter" class="StatusfilterLabel">Estado</label>
            <select id="statusFilter" class="statusFilter">
              <option value=""></option>
              <option value="1">Pendiente</option>
              <option value="2">Aprobado</option>
              <option value="3">Rechazado</option>
              <option value="4">Observado</option> 
            </select>
          </div>

          <div class="approverFilterDiv">
            <label for="approverUserFilter" class="approverUserfilterLabel">Evaluador</label>
            <select id="approverUserFilter" class="approverUserFilter">
              <option value=""></option>
              <option value="1">José Ferreyra</option>
              <option value="2">Ana Lucero</option>
              <option value="3">Gonzalo Molinas</option>
              <option value="4">Lucas Olivera</option>
              <option value="5">Danilo Fagundez</option>
              <option value="6">Gabriel Galli</option>
            </select>
          </div>
          <div class="buttonDiv" >
            <button type="submit" class="sendButton">Buscar</button>
          </div>
        </div>
        <div class="projectsList" id="projectsList">
          <ul id="proyectName" class = "projectName">
                            <li></li>
                            <li></li>      
                            <li></li>      
                            <li></li>      
                            <li></li>      
                            <li></li>      
                            <li></li>      
                            <li></li>
                            <li></li>
                            <li></li>      
          </ul>
        </div>
      </div>
      <div class="createProjectsContainer">
        <button class ="createProjects" id ="createProjects">Crear proyectos</button>
      </div>
    </div>
  </div>
  `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "projectSection");
  sectionElement.innerHTML = views;

  loadStyle("../../views/projects/projectStyle.css");
  loadScript("../../views/projects/projectsLogic.js");
  return sectionElement;
};

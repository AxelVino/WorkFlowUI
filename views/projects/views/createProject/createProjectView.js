import { loadScript } from "../../../../loadScripts.js";
import { loadStyle } from "../../../../loadStyles.js";
export default () => {
  const views = `
            <div>
                <span class="closeCreate">&times;</span>
            </div>
            <div id="loadingContainer" class="loading-container" style="display: none;">
              <div class="loadingContent">
                <div class="loading-spinner"></div>
                <p>Creando proyecto...</p>
              </div>
            </div>
            <div id="successDialog" class="success-dialog" style="display: none;">
              <div class="success-content">
                <h3>¡Proyecto Creado!</h3>
                <p>El proyecto se ha creado exitosamente.</p>
                <button id="successOkButton" class="success-button">Aceptar</button>
              </div>
            </div>
  <div id ="createBox" class="createBox">
    <div class="newProjectTitle" >
        <h2>NUEVO PROYECTO</h2>
        <p class ="helpInfo"> Complete los siguientes campos para crear un nuevo proyecto<br>
        </p>
        <div class="createButtonBox" >
            <button type="submit" class="createButton" id="createButton">Crear</button>
          </div>
      </div>
      <div class="creationInterface">
        <div class="inputs">
          <div class="projectTitleBox" id="projectTitleBox">
                  <label for="projectTitle" class="projectTitleLabel">Titulo</label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    class="projectTitle"
                    required
                  />
                  <p id = "errorMsgTitle" class = "errorCreationMsg"></p>
          </div>
          <div class="projectDescriptionBox" id="projectDescriptionBox">
                  <label for="projectDescription" class="projectDescriptionLabel">Descripcion</label>
                  <input
                    type="text"
                    id="projectDescription"
                    name="projectDescription"
                    class="projectDescription"
                    required
                  />
                  <p id = "errorMsgDescription" class = "errorCreationMsg"></p>

          </div>
          <div class="projectAmountbox" id="projectAmountbox">
                  <label for="projectAmount" class="projectAmountLabel">Monto</label>
                  <input
                    type="number"
                    min = 1
                    id="projectAmount"
                    name="projectAmount"
                    class="projectAmount"
                    required
                  />
                  <p id = "errorMsgAmount" class = "errorCreationMsg"></p>

          </div>
          <div class="projectDurationBox" id="projectDurationbox">
                  <label for="projectDuration" class="projectDurationLabel">Duracion</label>
                  <input
                    type="number"
                    min = 1
                    id="projectDuration"
                    name="projectDuration"
                    class="projectDuration"
                    required
                  />
                  <p id = "errorMsgDuration" class = "errorCreationMsg"></p>
          </div>
          <div class="projectAreaBox">
            <label for="projectArea" class="projectAreaLabel">Area</label>
            <select id="projectArea" class="projectArea">
              <option value="1">Finanzas</option>
              <option value="2">Tecnología</option>
              <option value="3">Recursos Humanos</option>
              <option value="4">Operaciones</option>
            </select>
          </div>

          <div class="projectTypebox">
            <label for="projectType" class="projectTypeLabel">Tipo</label>
            <select id="projectType" class="projectType">
              <option value="1">Mejora de Procesos</option>
              <option value="2">Innovación y Desarrollo</option>
              <option value="3">Infraestructura</option>
              <option value="4">Capacitación Interna</option>
            </select>
          </div>
        </div>
      </div>
  `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "myProjectsSection");
  sectionElement.innerHTML = views;
  loadScript(
    "../../../../views/projects/views/createProject/createProjectLogic.js"
  );
  loadStyle("/views/projects/views/createProject/createProjectStyle.css");
  return sectionElement;
};

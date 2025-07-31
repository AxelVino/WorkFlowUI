import { loadScript } from "../../../../loadScripts.js";
import { loadStyle } from "../../../../loadStyles.js";

export default (project) => {
  const views = `
            <div class="closeDiv">
                <span class="closeDetails">&times;</span>
            </div>
            <div id="loadingContainer" class="loading-container" style="display: none;">
              <div class="loadingContent">
                <div class="loading-spinner"></div>
                <p>Modificando proyecto...</p>
              </div>
            </div>
            <div id="successDialog" class="success-dialog" style="display: none;">
              <div class="success-content">
                <h3>¡Proyecto modificado!</h3>
                <p>El proyecto se ha modificado correctamente.</p>
                <button id="successOkButton" class="success-button">Aceptar</button>
              </div>
            </div>
            <div id ="projectDetails" class="projectDetails">
                <h2 id="projectTitleDetails" class ="projectDetailsTitle">${
                  project.title
                }</h2>
                <div class="projectDetailsStatusses" id="projectDetailsStatusses">
                    <div class="div1">
                        <span id="projectAmountDetails" class ="proyectAmountStatus">Monto: <strong id="projectAmountDetailsValue">$${
                          project.amount
                        }</strong></span>
                        <span id="projectAreaDetails" class ="proyectAreaStatus">Area: <strong id="projectAreaDetailsValue">${
                          project.area.name
                        }</strong></span>
                    <span id="projectTypeDetails" class ="proyectTypeStatus">Tipo: <strong id="projectTypeDetailsValue">${
                      project.type.name
                    }</strong></span>
                    </div>
                    <div class="div2">
                        <span id="projectDurationDetails" class ="proyectDurationStatus">Duración: <strong id="projectDurationDetailsValue">${
                          project.duration
                        } Days</strong></span>
                        <span id="projectStatusDetails" class ="proyectStatusStatus">Estado: <strong id="projectStatusDetailsValue">${
                          project.status.name
                        }</strong></span>
                    <span id="projectOwnerDetails" class ="proyectOwnerStatus">Propietario: <strong id="projectOwnerDetailsValue">${
                      project.user.name
                    }</strong></span>
                    </div>
                </div>
                <div class="projectDetailsDescription">
                    <p id="projectDescriptionDetails" class ="proyectDetailsDescription">${
                      project.description
                    }</p>
                </div>
                <div class="div3">
                    <div class="projectDetailsActions" id="projectDetailsActions">
                        <button id="projectDetailsEditButton" class="projectDetailsEditButton">Modificar proyecto</button>
                    </div>
                    <div class="projectDetailsSteps" id="projectDetailsSteps">
                        <span class ="steps">Pasos disponibles</span>
                        <ul id="projectDetailsStepsList" class="projectDetailsStepsList">
                        ${project.steps
                          .map(
                            (step) => `
                            <li class="projectDetailsStep" id="projectDetailsStep">
                                <span class="projectDetailsStepTitle">${step.stepOrder}</span>
                            </li>
                        `
                          )
                          .join("")}
                        </ul>
                    </div>
                </div>
                <dialog id="projectStepDialog" class="projectStepDialog">
                </dialog>
            </div>
            `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "projectDetailsSection");
  sectionElement.innerHTML = views;

  loadScript(
    "../../../../views/projects/views/projectDetails/projectDetailsLogic.js"
  );
  loadStyle(
    "../../../../views/projects/views/projectDetails/projectDetailsStyle.css"
  );
  return sectionElement;
};

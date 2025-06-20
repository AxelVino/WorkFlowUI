import { loadStyle } from "../../loadStyles.js";
import { loadScript } from "../../loadScripts.js";
import { Available } from "../../utils.js";

export default () => {
  const views = `
  <div class="hero-ext">
        <div class="hero">
          <h2 class="bodyBrandName">Bienvenido a Windflow</h2>
          <p class="textUnderWelcome">Tu proyectos en segundos</p>
        </div>
      </div>

      <div class="plataformBox" id="plataform">
        <div class="plataform">
          <div class="legend">
            <h3>Automatiza tu flujo de trabajo</h3>
            <p>Ya no necesita papel y tinta para documentar sus proyectos</p>
          </div>
          <div class="boxs">
            <div class="box">
              <span><strong class="relevantData">+500</strong></span>
              <div class="subtext">
                <p>proyectos/mes</p>
              </div>
            </div>
            <div class="box">
              <span><strong class="relevantData">+50</strong></span>
              <div class="subtext">
                <p>horas ahorradas/mes</p>
              </div>
            </div>
            <div class="box">
              <span><strong class="relevantData">+1000</strong></span>
              <div class="subtext">
                <p>dolares ahorrados/mes en insumos</p>
              </div>
            </div>
            <div class="box">
              <span><strong class="relevantData">+3 Años</strong></span>
              <div class="subtext">
                <p>de experiencia</p>
              </div>
            </div>
          </div>
          <div class="product">
            <div class="productPhoto">
              <img src="/img/placeholder.jpeg" alt="product photo" />
            </div>
            <div class="productDescription">
              <h4>
                Cree, apruebe y rechaze proyectos <br />¡con pocos clicks!
              </h4>
              <p>
                Ten una vision detallada de los proyectos para poder tener
                mejores decisiones.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="carouselBox" id="carouselBox">
        <button class="nav left" id="prevBtn">‹</button>
        <div class="carousel" id="carousel">
          <div class="carousel-track">
            <div class="carousel-slide">
              <div class="card">
                <h3><span class="placeholder">[Título 1]</span></h3>
                <p>
                  <span class="placeholder"
                    >[Descripción breve del servicio 1]</span
                  >
                </p>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="card">
                <h3><span class="placeholder">[Título 2]</span></h3>
                <p>
                  <span class="placeholder"
                    >[Descripción breve del servicio 2]</span
                  >
                </p>
              </div>
            </div>
            <div class="carousel-slide">
              <div class="card">
                <h3><span class="placeholder">[Título 3]</span></h3>
                <p>
                  <span class="placeholder"
                    >[Descripción breve del servicio 3]</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="nav right" id="nextBtn">›</button>
      </section>

      <section class="stepsBox">
        <div class="steps">
          <div class="stepsDescription">
            <h3>El camino a la eficiencia en 4 pasos</h3>
          </div>
          <div class="boxSteps">
            <div class="boxStep">
              <div class="boxNumber">
                <span>1</span>
              </div>
              <div class="boxContent">
                <img src="/img/login.png" alt="" />
                <span class="text">Inicie sesion</span>
              </div>
            </div>
            <div class="boxStep">
              <div class="boxNumber">
                <span>2</span>
              </div>
              <div class="boxContent">
                <img src="/img/Create.png" alt="" />
                <span class="text">Cree proyectos</span>
              </div>
            </div>
            <div class="boxStep">
              <div class="boxNumber">
                <span>3</span>
              </div>
              <div class="boxContent">
                <img src="/img/Edit.png" alt="" />
                <span class="text">Apruebe o rechaze otros</span>
              </div>
            </div>
            <div class="boxStep">
              <div class="boxNumber">
                <span>4</span>
              </div>
              <div class="boxContent">
                <img src="/img/View.png" alt="" />
                <span class="text">Visualice los estados</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="contact">
          <div class="contactBox">
            <form
              action="/enviar-mensaje"
              method="POST"
              class="contactContainer"
            >
              <p>
                ¿Tenés alguna pregunta o duda y querés ponerte en contacto?
                <br />
                ¡Completá el siguiente formulario!
              </p>
              <div class="nameBox">
                <label for="nombre" class="nameLabel">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  class="nameInput"
                  required
                />
              </div>

              <div class="emailBox">
                <label for="email" class="emailLabel"
                  >Correo electrónico:</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="emailInput"
                  required
                />
              </div>

              <div class="msjBox">
                <label for="mensaje" class="msjLabel">Mensaje:</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  class="msjArea"
                  required
                ></textarea>
              </div>

              <button type="submit" class="sendButton">ENVIAR</button>
            </form>
          </div>
      </section>
        `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "homeSection");
  sectionElement.innerHTML = views;
  Available();
  loadStyle("../../Style.css");
  loadScript("../../main.js");
  return sectionElement;
};

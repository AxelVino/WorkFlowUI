export default () => {
  const views = `
            <div>
                <span class="close">&times;</span>
            </div>
            <div class="dialogLogin">
                <label for="id" class ="idUser">ID USUARIO</label>
                <input type="number" min=1 id="id" name="id" required placeholder="Ej:1,2,3,4...">
                <p class ="errorMsg" id="errorMsg"></p>
                <input type="submit" id ="dialogBtn" class="dialogBtn" value="Aceptar">
            </div>`;
  const divElement = document.createElement("div");
  divElement.setAttribute("id", "dialogDiv");
  divElement.setAttribute("class", "dialogDiv");
  divElement.innerHTML = views;

  return divElement;
};

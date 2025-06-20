export default () => {
  const views = `
    <div class="myProjectSection">
      Hola
    </div>
  `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "myProjectsSection");
  sectionElement.innerHTML = views;

  return sectionElement;
};

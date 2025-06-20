export default () => {
  const views = `
    <div class="myProjectSection">
      feo
    </div>
  `;
  const sectionElement = document.createElement("Section");
  sectionElement.setAttribute("class", "myProjectsSection");
  sectionElement.innerHTML = views;

  return sectionElement;
};

export function Disable() {
  const projects = document.getElementById("projectsRef");
  const plataform = document.getElementById("plataformRef");
  const carousel = document.getElementById("carouselRef");
  const contact = document.getElementById("contactRef");

  projects.style.visibility = "hidden";
  plataform.style.visibility = "hidden";
  carousel.style.visibility = "hidden";
  contact.style.visibility = "hidden";
}

export function Available() {
  const projects = document.getElementById("projectsRef");
  const plataform = document.getElementById("plataformRef");
  const carousel = document.getElementById("carouselRef");
  const contact = document.getElementById("contactRef");

  projects.style.visibility = "visible";
  plataform.style.visibility = "visible";
  carousel.style.visibility = "visible";
  contact.style.visibility = "visible";
}

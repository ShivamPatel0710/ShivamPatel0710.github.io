function toggleProjects() {
  const projectList = document.getElementById("project-list");
  if (projectList.style.display === "none" || projectList.style.display === "") {
    projectList.style.display = "block";
  } else {
    projectList.style.display = "none";
  }
}

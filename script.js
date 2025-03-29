const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#file-input");

dropZone.addEventListener("click", () => {
  fileInput.click();
});

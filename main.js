document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.style.opacity = 0;
  header.style.transition = "opacity 2s ease-in-out";
  setTimeout(() => {
    header.style.opacity = 1;
  }, 500);

  const fundadorMark = document.querySelector(".fundador-mark img");
  fundadorMark.addEventListener("click", () => {
    alert("Fundador: Andre.Evans\nTransparencia, legado, Venezuela.");
  });
});

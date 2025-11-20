const btn_open = document.querySelector("#cta_open");
const btn_close = document.querySelectorAll("#close_btn");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  console.log("der er klikket");
  document.querySelector("#popover1").classList.add("fadeIn");
  document.querySelector("#popover1").showModal();
}

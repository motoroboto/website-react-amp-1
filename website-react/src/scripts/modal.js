// // open modal by id
// function openModal(id) {
//   document.getElementById(id).classList.add("open");
//   document.body.classList.add("jw-modal-open");
// }

// // close currently open modal
// function closeModal() {
//   document.querySelector(".jw-modal.open").classList.remove("open");
//   document.body.classList.remove("jw-modal-open");
// }

// window.addEventListener("load", function () {
//   // close modals on background click
//   document.addEventListener("click", (event) => {
//     if (event.target.classList.contains("jw-modal")) {
//       closeModal();
//     }
//   });
// });

// document.addEventListener(
//   "click",
//   function (event) {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (
//       event.target.matches(".modal-button") ||
//       !event.target.closest(".modal-body")
//     ) {
//       closeModal();
//     }
//   },
//   false
// );

// function closeModal() {
//   document.querySelector(".modal").style.display = "none";
// }

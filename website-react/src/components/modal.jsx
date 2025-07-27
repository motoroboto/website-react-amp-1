import React from "react";
import "../css/modal.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/mixtapes/", true, /\.(png|jpe?g|svg)$/)
);

function Modal({ isOpen, onClose, id, mix }) {
  if (!isOpen) return null;
  console.log("is this here");
  console.log(`${mix}`);
  return (
    <div>
      <input class='modal-state' id='modal-1' type='checkbox' />
      <div class='modal'>
        <label class='modal__bg' for='modal-1'></label>
        <div class='modal__inner'>
          <div>
            <label class='modal__close' for='modal-1'></label>
          </div>
          <img
            alt='cover'
            className='modal-image'
            src={images[`${mix}/${id}/cover.jpg`]}
          />
          <img
            alt='tracks'
            className='modal-image'
            src={images[`${mix}/${id}/tracks.jpg`]}
          />
          <div>
            <a
              href='https://mega.nz/fm/pksUnaQR'
              target='_blank'
              rel='noreferrer'
            >
              <button className={`modal-button ${mix}`}>Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

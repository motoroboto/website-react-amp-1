import React, { useState } from "react";
import "../css/christmas.css";
import "../css/modal.css";
import Modal from "../components/modal";
import "../scripts/modal.js";
import { volumes } from "../lib/christmaslist.js";
const TITLE = "christmas";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../assets/img/mixtapes/christmas",
    true,
    /\.(png|jpe?g|svg)$/
  )
);

export default function Christmas() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("01");
  const [mixStyle, setMixStyle] = useState("christmas");

  function handleClick(e) {
    setModalOpen(true);
    setModalId(e.target.id);
    setMixStyle("christmas");
  }

  return (
    <body className='christmas-body'>
      <title>{TITLE}</title>

      <div class='gallery'>
        <div class='row row-cols-3'>
          {volumes.map((volume) => (
            <div className='col' id={volume}>
              <div className='card-body'>
                <label for='modal-1'>
                  <img
                    className='gallery-image'
                    onClick={handleClick}
                    src={images[`${volume}/cover.jpg`]}
                    width='100%'
                    id={volume}
                    alt='cover art'
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        id={modalId}
        mix={mixStyle}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        cover={`${EventTarget.id}/cover.jpg`}
        tracks={`${EventTarget.id}/tracks.jpg`}
      />
    </body>
  );
}

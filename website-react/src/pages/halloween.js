import React, { useState } from "react";
import "../css/halloween.css";
import "../css/modal.css";
import { volumes } from "../lib/halloweenlist";
import Modal from "../components/modal";
const TITLE = "halloween";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context(
    "../assets/img/mixtapes/tracksandtreats",
    true,
    /\.(png|jpe?g|svg)$/
  )
);

export default function Halloween() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("01");
  const [mixStyle, setMixStyle] = useState("tracksandtreats");

  function handleClick(e) {
    setModalOpen(true);
    setModalId(e.target.id);
    setMixStyle("tracksandtreats");
  }

  return (
    <body className='halloween-body'>
      <title>{TITLE}</title>

      {/* <header class='masthead'>
        <div className='container d-flex h-100 align-items-center mx-auto text-center'>
          <h1 className='text-white-50 mx-auto mt-1 mb-5'>Halloween</h1>
          <h2>
      </header> */}

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

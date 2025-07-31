import React, { useState } from "react";
import "../css/originals.css";
import "../css/modal.css";
import { volumes } from "../lib/originalslist";
import Modal from "../components/modal";
const TITLE = "originals";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/originals", true, /\.(png|jpe?g|svg)$/)
);

export default function Originals() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("01");
  const [mixStyle, setMixStyle] = useState("originals");

  function handleClick(e) {
    setModalOpen(true);
    setModalId(e.target.id);
    setMixStyle("originals");
  }

  return (
    <body className='originals-body'>
      <title>{TITLE}</title>

      <header class='masthead'>
        <div className='container d-flex h-100 align-items-center mx-auto text-center'>
          <h1 className='text-white-50 mx-auto mt-1 mb-5'>Coming Soon</h1>
          {/* <h2>Coming soon</h2> */}
        </div>
      </header>

      <div class='gallery'>
        <div class='row'>
          {volumes.map((volume) => (
            <div className='gallery-col' id={volume}>
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

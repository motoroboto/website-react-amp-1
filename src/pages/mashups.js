import React, { useState } from "react";
import "../css/mashups.css";
import "../css/modal.css";
import { volumes } from "../lib/mashuplist";
import Modal from "../components/modal";
const TITLE = "mashups";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/mashups", true, /\.(png|jpe?g|svg)$/)
);

export default function Mashups() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState("01");
  const [mixStyle, setMixStyle] = useState("mashups");

  function handleClick(e) {
    setModalOpen(true);
    setModalId(e.target.id);
    setMixStyle("mashups");
  }

  return (
    <body className='mashup-body'>
      <title>{TITLE}</title>

      <header className='masthead'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            {/* <h1 className='text-white-50 mx-auto mt-1 mb-5'>Mashups</h1> */}
            <h2 className='text-white-50 mx-auto mt-1 mb-5'>
              Do you ever want to be listening to more than one song at the same
              time? Here there will soon be collections of tracks that will
              allow you to do just that.
            </h2>
          </div>
        </div>
      </header>

      <div class='gallery'>
        <div class='row row-cols-3'>
          {volumes.map((volume) => (
            <div className='col' id={volume}>
              <div className='card-body'>
                <img
                  onClick={handleClick}
                  src={images[`${volume}/cover.jpg`]}
                  width='100%'
                  id={volume}
                  alt='cover art'
                />
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

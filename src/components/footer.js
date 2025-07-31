import React from "react";
import "../css/footer.css";
import {
  faGithub,
  faFacebookF,
  faInstagram,
  faSoundcloud,
  faBandcamp,
  faBluesky,
  faLastfm,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <section className='contact-section bg-black'>
        <div className='container'>
          <div className='social d-flex'>
            <a className='mx-2' href='https://bsky.app/profile/motoroboto.co'>
              <FontAwesomeIcon icon={faBluesky} />
            </a>
            <a className='mx-2' href='https://github.com/motoroboto'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className='mx-2' href='https://www.facebook.com/RACullen3'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a classname='mx-2' href='https://www.last.fm/user/_COG_'>
              <FontAwesomeIcon icon={faLastfm} />
            </a>
            <a className='mx-2' href='https://www.instagram.com/motoroboto/'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className='mx-2' href='https://soundcloud.com/robertcullen'>
              <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a className='mx-2' href='https://robertcullen.bandcamp.com/'>
              <FontAwesomeIcon icon={faBandcamp} />
            </a>
          </div>
        </div>
      </section>

      <footer className='footer bg-black small text-center text-white-50'>
        <div className='container'>Created by Robert Cullen-Keel 2020-2025</div>
      </footer>
    </div>
  );
}

export default Footer;

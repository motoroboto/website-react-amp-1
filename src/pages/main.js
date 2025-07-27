import React from "react";
import "../css/styles.css";
import "../scripts/masthead.js";
import Housecat from "../assets/img/housecat.png";
import project1 from "../assets/img/project-one/color.png";
import project2 from "../assets/img/project-two/color.png";
import project3 from "../assets/img/project-three.jpeg";
import project4 from "../assets/img/mashups.png";
import Card from "../components/card.js";
import Signup from "../components/signup.js";

const TITLE = "motoroboto";

function Main() {
  return (
    <div id='page-top'>
      <title>{TITLE}</title>
      {/* Navigation */}
      {/* <Nav /> */}
      {/* Masthead */}
      <header className='masthead index-bg'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h1 className='mx-auto my-0 text-uppercase' id='myName'>
              Robert Cullen-Keel
            </h1>
            <h2 className='text-white-50 mx-auto mt-2 mb-5' id='subTitle'>
              motoroboto
            </h2>
          </div>
        </div>
      </header>

      {/* About */}
      <section className='about-section text-center' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 mx-auto'>
              {/* <h2 className='text-white mb-4'></h2> */}
              <p className='text-white-50'></p>
            </div>
          </div>
        </div>
        <img className='img-fluid' src={Housecat} alt='' width='100%' />
      </section>

      {/* Projects */}
      <section className='projects-section bg-light' id='projects'>
        <div className='container'>
          <Card
            title='Mixtapes'
            url='/mixtapes'
            description="I make mixtapes for the holidays... perhaps someday soon I'll get around to the summer ones as well."
            image={project1}
          />
          <Card
            title='Mashup Albums (Coming Soon)'
            url='/mashups'
            description='I have been really getting into doing mashups recently and this is where I will be putting them.'
            image={project4}
          />
          <Card
            title='Original Compositions (Coming Soon)'
            url='/'
            description='I think it would be cool to have a place for random non-album tracks instead of cluttering my bandcamp with a lot of single song releases. Maybe...'
            image={project3}
          />
          <Card
            title='Blogging??????'
            url='/'
            description='Do I want to write about music in a place where I can share it? Maybe instead I will just do my music lists'
            image={project2}
          />
        </div>
      </section>
      <Signup />
    </div>
  );
}

export default Main;

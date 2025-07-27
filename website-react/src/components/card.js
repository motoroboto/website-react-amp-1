import React from "react";
import "../css/card.css";
import styled from "styled-components";

const SquareDiv = styled.div`
  display: inline-block;
  background-color: black;
  padding: 0rem;
  margin: 1rem;
`;

const SquareImg = styled.div`
  display: inline-block;
  background-color: black;
  padding: 0rem;
  margin: 0rem;
`;

const BeveledDiv = styled(SquareDiv)`
  ${({ cornerAngleRadians }) => `
  clip-path: polygon(
    ${Math.sin(cornerAngleRadians[0])}rem 0%,
    0% ${Math.cos(cornerAngleRadians[0])}rem,
  
    0% calc(100% - ${Math.cos(cornerAngleRadians[3])}rem),
    ${Math.sin(cornerAngleRadians[3])}rem 100%,
  
    calc(100% - ${Math.sin(cornerAngleRadians[2])}rem) 100%,
    100% calc(100% - ${Math.cos(cornerAngleRadians[2])}rem),
  
    100% ${Math.cos(cornerAngleRadians[1])}rem,
    calc(100% - ${Math.sin(cornerAngleRadians[1])}rem) 0%
  );
`}
`;

const BeveledImg = styled(SquareImg)`
  ${({ cornerAngleRadians }) => `
  clip-path: polygon(
    ${Math.sin(cornerAngleRadians[0])}rem 0%,
    0% ${Math.cos(cornerAngleRadians[0])}rem,
  
    0% calc(100% - ${Math.cos(cornerAngleRadians[3])}rem),
    ${Math.sin(cornerAngleRadians[3])}rem 100%,
  
    calc(100% - ${Math.sin(cornerAngleRadians[2])}rem) 100%,
    100% calc(100% - ${Math.cos(cornerAngleRadians[2])}rem),
  
    100% ${Math.cos(cornerAngleRadians[1])}rem,
    calc(100% - ${Math.sin(cornerAngleRadians[1])}rem) 0%
  );
`}
`;

const ShadowCaster = styled.div`
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
`;

function Card({ title, url, image, mouseover, description }) {
  const cornerAngles = [0, 45, 0, 45];
  const cornerAnglesImg = [0, 0, 45, 0];

  return (
    <a href={url}>
      <ShadowCaster>
        <BeveledDiv
          cornerAngleRadians={cornerAngles.map((a) => (a * Math.PI) / 180)}
        >
          <div className=' row roundoff no-gutters justify-content-center'>
            <div className='col-4'>
              <BeveledImg
                cornerAngleRadians={cornerAnglesImg.map(
                  (a) => (a * Math.PI) / 180
                )}
              >
                <img
                  className='img-fluid'
                  id='project1'
                  src={`${image}`}
                  alt='project'
                  height='100%'
                />
              </BeveledImg>
            </div>
            <div className='col-8'>
              <div className='bg-black text-center h-100'>
                <div className='d-flex h-100'>
                  <div className='project-text w-100 my-auto text-center text-lg-left'>
                    <h4 className='card-title'>{title}</h4>
                    <p className='text-white-50'>{description}</p>
                    <hr className='d-none d-lg-block mb-0 ml-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BeveledDiv>
      </ShadowCaster>
    </a>
  );
}

export default Card;

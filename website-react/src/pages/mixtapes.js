import React from "react";
const TITLE = "mixtapes";

export default function Mixtapes() {
  return (
    <div id='page-top'>
      <title>{TITLE}</title>
      <header className='masthead mixtape'>
        <div className='container d-flex h-100 align-items-center'>
          <div className='mx-auto text-center'>
            <h2 className='text-white-50 mx-auto mt-1 mb-5'>
              There is no reason for me not to have one simple place to store
              all of my mixes and make them easy for people to peruse.
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
}

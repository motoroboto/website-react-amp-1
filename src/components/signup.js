import "../css/signup.css";
import "../scripts/navbar.js";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Signup() {
  return (
    <section className='signup-section' id='signup'>
      <div className='container'>
        <div className='row'>
          <div className='signup-col mx-auto text-center'>
            <FontAwesomeIcon icon={faPaperPlane} className='fa-2x text-white' />
            <h2 className='text-white mb-5'>Want To Discuss A Project?</h2>
            <form className='form-inline d-flex'>
              <input
                className='form-control-email'
                id='inputEmail'
                type='email'
                placeholder="This doesn't even work..."
              />
              <button type='submit'>Drop Me A Line</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;

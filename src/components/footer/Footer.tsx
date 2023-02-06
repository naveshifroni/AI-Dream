
import design from './Footer.module.scss';
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiInstagram, FiTwitter } from 'react-icons/fi'


function Footer() {
  return (
    <div className={design.footer}>
      <div className="container text-center">
        <div className={`row d-flex ${design.rows} text-center`}>
          {/* Column1 */}
          <div className={`col text-center ${design.rows}`}>
            <h4 className={design.title}>About Us</h4>
            <ul className={`list-unstyled text-center ${design.rows}`}>
              <li className='text-center'> Story</li>
              <li>Clients</li>
              <li>Testimonials</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className={design.title}>Services</h4>
            <ul className="list-unstyled">
              <li> Consolting </li>
              <li> Development </li>
              <li> Design </li>
           </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className={design.title}> Social </h4>
            <ul className="list-unstyled">
              <li><AiOutlineFacebook/> Facebook </li>
              <li> <FiInstagram/> Instagram </li>
              <li> <FiTwitter/> Twitter </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row d-flex">
          <p className="col-sm text-center">
            &copy;{new Date().getFullYear()} Nave Shifroni | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;



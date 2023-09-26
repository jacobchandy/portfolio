import './contact.css';
import Walmart from '../../w-assets/walmart.png';
import Adobe from '../../w-assets/adobe.png';
import Microsoft from '../../w-assets/microsoft.png';
import Facebook from '../../w-assets/facebook.png';

import FacebookIcon from '../../w-assets/facebook-icon.png';
import TwitterIcon from '../../w-assets/twitter.png';
import YoutubeIcon from '../../w-assets/youtube.png';
import InstagramIcon from '../../w-assets/instagram.png';

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="clientPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
          </p>
          <div className="clientImgs">
            <img src={Walmart} alt="client" className="clientImg" />
            <img src={Adobe} alt="client" className="clientImg" />
            <img src={Microsoft} alt="client" className="clientImg" />
            <img src={Facebook} alt="client" className="clientImg" />
          </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunites.</span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder='Your Name'/>
          <input type="email" className="email" placeholder='Your Email'/>
          <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
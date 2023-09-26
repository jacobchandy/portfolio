import "./intro.css";
import bg from "../../assets/jpc.png";
import btnImg from "../../w-assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jacob</span>
          <br />
          Website Designer
        </span>
        <p className="intropara">
          I am a skilled web designer with experience in creating <br /> visualy
          appealing and user friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

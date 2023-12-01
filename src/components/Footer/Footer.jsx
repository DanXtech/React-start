
import "./Footer.css";
import Wave from '../../assets/img/wave.png'
import { CiInstagram } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaGithubSquare } from "react-icons/lia";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" />
      <div className="f-content">
        <span>adetoyedaniel2020@gmail.com</span>
        <div className="f-icons">
          <CiInstagram color="white" size={"3rem"} />
          <AiOutlineFacebook color="white" size={"3rem"} />
          <LiaGithubSquare color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

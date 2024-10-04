import {BsTwitter,BsInstagram} from 'react-icons/bs'
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin,GrGithub } from "react-icons/gr";



const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <GrLinkedin />
      </div>
      <div>
        <GrGithub />
      </div>
      {/* <div>
        <FaFacebook />
      </div> */}
    </div>
  );
}

export default SocialMedia
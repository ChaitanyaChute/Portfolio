import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Navbar() {
  return <nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
    {/*<img className='mx-2 w-40' src={logo} alt="dfdf"/> */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
      
    <a  href="https://github.com/Chaitanya-chute" target="_blank" >
    <FaGithub />
       </a>
     
    <a  href=" " target="_blank" >
      <FaLinkedin />
    </a>
    <a  href="" target="_blank" >
    <FaXTwitter />
    </a>
    <h3 >
      <a href=" ">Resume
        </a>
      </h3>
    <h3>Connect</h3>
    </div>
    


  </nav>
};

export default Navbar
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <a href="#"><img src={logo} className="mx-2 w-10" alt="logo"/></a>
        
    </div>
    <div className="m-6 flex items-center justify-center gap-4 text-2xl ">
         <a href="#"><FaLinkedin/></a>
         <a href="#"><FaGithub/></a>
         <a href="#"><FaInstagram/></a>
         
    </div>
  </nav>
}

export default Navbar
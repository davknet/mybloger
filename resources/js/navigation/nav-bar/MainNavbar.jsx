import MainLoginNav from "../nav/MainLoginNav";
import MainNav from "../nav/MainNav";
import Hamburger from '../nav/Hamburger';
import './main-navbar.css';









const MainNavbar = () => {


    return(


        <nav className="main-nav" id="main-nav">
             <MainNav  />
             <MainLoginNav/>
           
        </nav>
    );

}



export default MainNavbar ;

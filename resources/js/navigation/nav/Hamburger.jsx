import  {useState } from 'react';
import MainMobileNav from "./MainMobileNav";
import './hamburger.css' ;











const Hamburger = () => {

    const [open, setOpen] = useState(false);

    const toggleHamburger = () => {
      setOpen(!open);
    };

    return (

        <div className={ `humburger-icon ${ open ? 'open' : '' }`} onClick={toggleHamburger}
        id="hamburger">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            <MainMobileNav />
        </div>
    );
}



export default Hamburger ;

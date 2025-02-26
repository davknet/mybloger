import MainBrand from "../navigation/brand/MainBrand";
import MainNavbar from "../navigation/nav-bar/MainNavbar";
import { Head } from '@inertiajs/react';
import './header.css' ;
import Hamburger from "../navigation/nav/Hamburger";












const MainHeader = () => {


    return (

       <header className="header">
            <MainBrand />
            <MainNavbar />
            <Hamburger />
       </header>

    );
}


export default MainHeader ;

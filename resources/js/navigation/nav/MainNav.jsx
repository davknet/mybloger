import React , {useState  , useRef } from 'react' ;
import { Link } from "@inertiajs/react";
import './main-nav.css';
import DropDownIcon from "../../icons/DropdownIcon";
import MiniDropDown from '../../dropdowns/MiniDropDown' ;








const  MainNav = () => {


    const dropdownRef     = useRef(null);
    const [direction, setDirection] = useState(false);

  const toggleDropdown = () => {



    if (dropdownRef.current) {
        // Find the <ul> element within the dropdown
        const dropList = dropdownRef.current.querySelector('ul');

        if (dropList) {
          // Toggle the "show" class
          dropList.classList.toggle('show');
        }

        setDirection(prevDirection => !prevDirection);


      }
  };





    return(

        <ul className="main-list" id="main-list">

                   <li className="main-list-item" id="main-link-list-1">
                        <Link href="/" className="main-link" id="main-link-1">Home</Link>
                    </li>
                    <li className="main-list-item" id="main-link-list-1">
                        <Link href="/about" className="main-link" id="main-link-1">About</Link>
                    </li>
                    <li className="main-list-item" id="main-link-list-1">
                        <Link href="/service" className="main-link" id="main-link-1">Blog</Link>
                    </li>
                    <li className="main-list-item" id="main-link-list-1">
                        <Link href="contact" className="main-link" id="main-link-1">Contacts</Link>
                    </li>
                    <li className="main-list-item dropdown" id="dropdown-mini"  ref={dropdownRef}  >
                         <p className="dropdown-list" onClick={toggleDropdown} >Categories <span> <DropDownIcon master={direction} /></span>

                         </p>
                         <MiniDropDown  />
                    </li>
                    <li className="main-list-item" id="main-link-list-1">
                        <Link href="privacy-policy" className="main-link" id="main-link-1">Resources</Link>
                   </li>
        </ul>
     );
}


export default MainNav ;





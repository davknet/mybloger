import React , {useState  ,  useEffect , useRef } from 'react' ;
import { Link } from "@inertiajs/react";
import axios from "axios";
import './main-nav.css';
import DropDownIcon from "../../icons/DropdownIcon";
import MiniDropDown from '../../dropdowns/MiniDropDown' ;









const  MainNav = () => {

    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        axios.get("/api/navbars").then((response) => {
            setNavItems(response.data);
        });
    }, []);


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


//   console.log(navItems);



    return(

        <ul className="main-list" id="main-list">

                    {navItems.map((item) => (

                     item.drop_id ? (


                     <li  key={`li-${item.nav_id}`} className="main-list-item dropdown" id={`dropdown-mini-${item.nav_id}`}  ref={dropdownRef} >
                         <p className="dropdown-list" onClick={toggleDropdown} >{item.extra } <span> <DropDownIcon master={direction} /></span>
                         </p>
                         <MiniDropDown  />
                    </li>



                ) : (

                        <li key={`li-${item.nav_id}`} className="main-list-item" id={`main-link-list-${item.nav_id}`}>
                            <Link  href={item.slug}  className="main-link" id={`main-link-${item.nav_id}`}>
                                {item.name}
                            </Link>
                        </li>

                   )
                    ))}

                   {/* <li className="main-list-item" id="main-link-list-1">
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
                   </li> */}
        </ul>
     );
}


export default MainNav ;





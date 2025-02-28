import React , {useRef , useState , useEffect} from 'react' ;
import { Link } from "@inertiajs/react";
import axios from "axios";
import DropDownIcon from "../../icons/DropdownIcon";
import './mobile-nav.css';
import MiniDropDown from "../../dropdowns/MiniDropDown";
import MiniMobileDropDown from '../../dropdowns/MiniMobileDropDown';










const MainMobileNav = () => {

  const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        axios.get("/api/navbars").then((response) => {
            setNavItems(response.data);
        });
    }, []);


       const dropdownRef = useRef(null);
       const [direction, setDirection] = useState(false);

      const toggleDropdown = (e) => {

        e.stopPropagation();
        //  console.log(dropdownRef.current);
        if (dropdownRef.current) {
            // Find the <ul> element within the dropdown
            const dropList = dropdownRef.current.querySelector('ul');
            console.log(dropList);
            if (dropList) {
              // Toggle the "show" class
              dropList.classList.toggle('show');
            }

            setDirection(prevDirection => !prevDirection);
          }
      };


     return (
        <>
        <ul className="mobile-menu">
            <h3> My Blog </h3>

             <hr></hr>



                    {navItems.map((item) => (

                     item.drop_id ? (

                    <li key={`li-${item.nav_id}`} className="main-list-item dropdown" ref={dropdownRef} >
                          <p className="dropdown-list"  onClick={toggleDropdown} >{item.extra} <span> <DropDownIcon master={direction} /> </span> </p>
                        <MiniMobileDropDown />
                    </li>



                ) : (

                        <li  key={`li-${item.nav_id}`}  className="main-link-items" id={`main-link-list-${item.nav_id}`}>
                                <Link href={item.slug} className="main-link" id={`main-link-${item.nav_id}`}>{item.name}</Link>
                        </li>

                   )
                    ))}


{/*
             <li className="main-link-items" id="main-link-list-1">
                <Link href="/" className="main-link" id="main-link-1">Home</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/about" className="main-link" id="main-link-1">About</Link>
            </li>

            <li className="main-link-items" id="main-link-list-1">
                <Link href="/servises" className="main-link" id="main-link-1">Servises</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/products" className="main-link" id="main-link-1">Our Products</Link>
            </li>
            <li className="main-list-item dropdown" ref={dropdownRef} >
                <p className="dropdown-list"  onClick={toggleDropdown} >Categories <span> <DropDownIcon master={direction} /> </span> </p>
                <MiniMobileDropDown />
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/Technologies" className="main-link" id="main-link-1">Technologies</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="contact" className="main-link" id="main-link-1">Contacts</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/our-policies" className="main-link" id="main-link-1">Privacy Policy</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/login" className="main-link" id="main-link-1">Login</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
                <Link href="/sign-up" className="main-link" id="main-link-1">Sign-up</Link>
            </li> */}
      </ul>
       </>
     );

}


export default MainMobileNav ;

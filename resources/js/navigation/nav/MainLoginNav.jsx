import { Link } from "@inertiajs/react";












const MainLoginNav = () => {


    return(
        <ul className="main-small-unordered-list" id="main-small-unordered-list">
            <li className="main-link-items" id="main-link-list-1">
               <Link href="/login" className="main-link" id="main-link-1">Login</Link>
            </li>
            <li className="main-link-items" id="main-link-list-1">
               <Link href="/sign-up" className="main-link" id="main-link-1">Sign-up</Link>
            </li>

        </ul>
    );
}


export default MainLoginNav;

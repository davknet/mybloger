import { Link } from "@inertiajs/react";

import './min-drodown.css' ;




















const MiniDropDown = ({ }) => {



    return(

         <>
            <ul className={`min-dropdown `} id="mini-dropdown-01" >

                <li className="mini-list-item" id="mini-list-item-1">
                    <Link href="/Lifestyle" className="mini-link" id="mini-link-1">Lifestyle</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-2">
                    <Link href="/Travel" className="mini-link" id="mini-link-2">Travel</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-3">
                    <Link href="/food&recipes" className="mini-link" id="mini-link-3">Food & Recipes</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-4">
                    <Link href="/technology" className="mini-link" id="mini-link-4">Technology</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-5">
                    <Link href="/diy&crafts" className="mini-link" id="mini-link-5">DIY & Crafts</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-6">
                    <Link href="/health&wellnes" className="mini-link" id="mini-link-6">Health & Wellness</Link>
                </li>
                <li className="mini-list-item" id="mini-list-item-7">
                    <Link href="/entertainment" className="mini-link" id="mini-link-7">Entertainment</Link>
                </li>

            </ul>
         </>

    );
};



export default  MiniDropDown;

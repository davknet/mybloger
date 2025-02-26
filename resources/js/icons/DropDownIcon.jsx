import React , {useState } from 'react';
import dropdown_icon from '../../img/drop-list.svg';
import dropdown_icon_up from '../../img/drop-list-up.svg';
import './drop-down-icon.css'











const DropDownIcon = ( {  master =  false } ) => {

    //  const {icon  , setIcon } = useState(master)  ;




return(

     <>
        <img  className='dropdown-icon' src={ master ? dropdown_icon_up : dropdown_icon }/>
     </>

);

}



export  default DropDownIcon ;

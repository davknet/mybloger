import { Link } from "@inertiajs/react";
import DefaultLayout from "../layouts/DefaultLayout"




const About = ({page}) => {

  

    return(
       <div className="home-page w-full p-1 ">

              <h1 className="title text-center text-gray-900 text-lg"> {page.title } </h1>
              <Link preserveScroll className="block text-center title mt-[1000px]" href="/about"> { new Date().toLocaleTimeString() }</Link>

       </div>
    )
}

export default About ;

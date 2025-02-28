import { Head } from "@inertiajs/react";
import DefaultLayout from "../layouts/DefaultLayout"




const Home = ({page}) => {

    // console.log(page);

    return(
        <>
            <Head title="Home Page" />
            <div className="home-page w-full p-1 ">

                    <h1 className="title text-center text-gray-900 text-lg"> {page.title} </h1>

            </div>
        </>
    )
}






export default Home ;

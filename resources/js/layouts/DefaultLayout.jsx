import MainHeader from "../header/MainHeader";





const DefaultLayout = ({children }) => {


    return (
           <>
            <MainHeader />
            <div className="grid grid-cols-4  m-0 p-0 h-screen">
                <main className="col-span-4  bg-slate-50 p-4"> {children}    </main>
            </div>
           </>

    )
}

export default DefaultLayout ;

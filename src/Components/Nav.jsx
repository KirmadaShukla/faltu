import { CiSearch } from "react-icons/ci"; 
const Nav = () => {

    return (
        <>
            <div>
                <nav className="flex w-full justify-between items-center px-10">
                    <div className="flex items-center gap-2">
                        <img src='https://img.freepik.com/free-vector/logo-tie-design-template_474888-1906.jpg?semt=ais_hybrid&w=740' alt="logo" className="w-10 h-10"/>
                        <h1>UiXSHUVO</h1>
                    </div>
                    <div className="flex items-center gap-2 list-none">
                        <li>Discover</li>
                        <li>About Us</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiSearch />
                        <button> Book Now</button>
                    </div>
                </nav>

            </div>
        </>
    )

}

export default Nav;
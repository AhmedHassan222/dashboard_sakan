import { Link } from "react-router-dom";
import logo from "../../src/Assets/logo.png"
export default function TopBar() {
    return <>
        <div className="py-3 shadow-sm">
            <div className="container ">
                <div className="d-flex justify-content-between">
                    <Link className="nav-link fs-3" to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <Link to={'https://ahmedhassan222.github.io/Sakan/'} target="_blank"> 
                        <button className="btn rounded-0 px-4 btn-primary py-2">Go To Website</button>
                    </Link>
                </div>
            </div>
        </div>


    </>
}
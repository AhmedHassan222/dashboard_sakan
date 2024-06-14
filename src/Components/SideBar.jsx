import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function SideBar() {
    const [status, setStatus] = useState('')
    const cookie = new Cookies();
    const token = cookie.get("Bearer")
    let navigate = useNavigate()
    async function logOut() {
        try {
            await axios.post(`http://127.0.0.1:8000/api/logout`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            cookie.remove("Bearer")
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <aside className='p-3 shadow-lg '>
            <Link onClick={() => { setStatus('users') }} to={'/dashboard/users'} className={`btn text-black  d-flex justify-content-start px-2 align-items-center fw-bold  nav-link ${status == 'users' ? "bg-primary text-white" : "bg-light text-black"} button-hover w-100 my-2 py-2 `}>
                <i className="fa-solid  fa-users me-2"></i>
                <span  >Users</span>
            </Link>
            <Link onClick={() => { setStatus('create') }} to={'/dashboard/users/create'} className={`btn text-black  d-flex justify-content-start px-2 align-items-center fw-bold  nav-link ${status == 'create' ? 'bg-primary text-white' : 'bg-light text-black'} button-hover w-100 my-2 py-2 `}>
                <i className="fa-solid  fa-plus me-2"></i>
                <span  >AddUser</span>
            </Link>
            <Link onClick={() => { setStatus('products') }} to={'/dashboard/products'} className={`btn text-black  d-flex justify-content-start px-2 align-items-center fw-bold  nav-link ${status == 'products' ? 'bg-primary text-white' : 'bg-light text-black'} button-hover w-100 my-2 py-2 `}>
                <span  >Products</span>
            </Link>
            <Link onClick={() => { setStatus('createProduct') }} to={'/dashboard/products/create'} className={`btn text-black  d-flex justify-content-start px-2 align-items-center fw-bold  nav-link ${status == 'createProduct' ? 'bg-primary text-white' : 'bg-light text-black'} button-hover w-100 my-2 py-2 `}>
                <i className="fa-solid  fa-plus me-2"></i>
                <span  >AddProduct</span>
            </Link>

        </aside>
        <div className="my-5">
            <button onClick={logOut} className="btn-primary btn px-5 me-3">Log Out</button>
            <i className=" fa-solid fa-gear fs-4 btn btn-primary"></i>

        </div>
    </>
}
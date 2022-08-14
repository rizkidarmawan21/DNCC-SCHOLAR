import url from '@/Helpers/url';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';


const Navbar = ({ auth }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl hidden md:flex sm:flex lg:flex">
                    <img src={url('/assets/dncc-scholar.png')} />
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Research paper" className="input input-bordered" />
                </div>
                <div className="text-[14px]">{auth.user ? auth.user.name : null}</div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {/* <img src="https://placeimg.com/80/80/people" /> */}
                            {/* <img src={url+'/assets/logo.png'} width="100" /> */}
                            <img src={url('/assets/logo.png')} width="100" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {!auth.user ?
                            <>
                                <li><Link href={route('login')} as="button">Sign In</Link></li>
                            </>
                            :
                            <>
                                <li><Link href={route('research')} >Research</Link></li>
                                <li><Link href={route('dashboard')} >Dashboard Creator</Link></li>
                                <hr />
                                <li><Link href={route('settings')} >Settings</Link></li>
                                <li><Link href={route('logout')} method="post" as='button' >Logout</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
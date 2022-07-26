import { menu } from "@/Pages/Settings/DataMenu"
import { Link } from "@inertiajs/inertia-react"
import React from "react"
const DataMenu = (menu) => {
    return menu.map((item, index) => {
        return (
            <li key={index} className={`${window.location.href === item.url && "bordered"}`}>
                <Link href={item.url}>{item.title}</Link>
            </li>
        )
    })
}

export const MenuSettings = () => {
    return (
        <>
            <div className="">
                <div className="bg-base-100">
                    <ul className="menu menu-compact hidden lg:flex">
                        <li className="menu-title mt-3">
                            <span>{menu.title}</span>
                        </li>
                        {DataMenu(menu.items)}
                    </ul>
                </div>
            </div>
            <div className="lg:hidden col-span-5">
                <ul className="menu menu-compact menu-horizontal ">
                    <li className="bg-slate-100">  <span>{menu.title}</span></li>
                    {DataMenu(menu.items)}
                </ul>
            </div>
        </>
    )
}
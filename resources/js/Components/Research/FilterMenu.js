import { filterMenu } from "@/Pages/Research/DataFilter"
import { Link } from "@inertiajs/inertia-react"

const ListFilter = (menu) => {
    return menu.map((item, index) => {
        return (
            <li key={index} className={`${window.location.href === item.url && "bordered"}`}>
                <Link href={item.url}>{item.title}</Link>
            </li>
        )
    })
}

export const FilterMenu = () => {
    return (
        <>
            <div className="">
                <div className="bg-base-100 rounded-md">
                    <ul className="menu menu-compact hidden lg:flex">
                        <li className="menu-title mt-3">
                            <span> {filterMenu.title} </span>
                        </li>
                        {ListFilter(filterMenu.items)}
                    </ul>
                </div>
            </div>
            <div className="lg:hidden col-span-5 overflow-x-auto bg-white no-scrollbar rounded-md">
                <ul className="menu menu-compact menu-horizontal ">
                    <li className="bg-slate-100"><a>Filter</a></li>
                    {ListFilter(filterMenu.items)}
                </ul>
            </div>
        </>
    )
}
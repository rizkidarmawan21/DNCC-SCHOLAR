export const FilterMenu = () => {
    return (
        <>
            <div className="">
                <div className="bg-base-100">
                    <ul className="menu menu-compact hidden lg:flex">
                        <li className="menu-title mt-3">
                            <span>FILTER</span>
                        </li>
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden col-span-5">
                <ul className="menu menu-compact menu-horizontal ">
                    <li className="bg-slate-100"><a>Filter</a></li>
                    <li><a>Item 1</a></li>
                    <li tabIndex="0">
                        <span>Parent</span>
                        <ul className="bg-base-100">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li><a>Submenu 3</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </>
    )
}
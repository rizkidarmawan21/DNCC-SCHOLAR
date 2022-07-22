import Navbar from "@/Components/Navbar";
import { FooterResearch } from "@/Components/Research/FooterResearch";
import { MenuSettings } from "@/Components/Settings/MenuSettings";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Setting({ auth, url, header, children }) {
    return (
        <div className="relative container w-full min-h-screen px-10 mx-auto">
            <Head title={header} />
            <Navbar auth={auth} url={url} />
            <div className="grid grid-cols-5 gap-6 pt-14 pb-36 ">
                <MenuSettings />
                <div className="col-span-5 lg:col-span-4 bg-base-100">
                    {children}
                </div>
            </div>
            <FooterResearch />
        </div>
    )
}
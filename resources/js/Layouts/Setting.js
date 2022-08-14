import Navbar from "@/Components/Navbar";
import { FooterResearch } from "@/Components/Research/FooterResearch";
import { MenuSettings } from "@/Components/Settings/MenuSettings";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Setting({ auth, url, header, children, flash }) {
    const flashMessage = flash.message ? (
        <div className="m-5">
            <div className="alert alert-success shadow-lg text-slate-50">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{flash.message}</span>
                </div>
            </div>
        </div>
    ) : null;

        
        
        return (
        <div className="relative container w-full min-h-screen px-10 mx-auto">
            <Head title={header} />
            <Navbar auth={auth} url={url} />
            <div className="grid grid-cols-5 gap-6 pt-14 pb-36 ">
                <MenuSettings />
                <div className="col-span-5 lg:col-span-4 bg-base-100">
                    {flashMessage}
                    {children}
                </div>
            </div>
            <FooterResearch />
        </div>
    )
}
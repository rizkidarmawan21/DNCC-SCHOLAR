import { Footer } from '@/Components/Homepage/Footer';
import Navbar from '@/Components/Navbar';
import { CardResearch } from '@/Components/Research/CardResearch';
import { FilterMenu } from '@/Components/Research/FilterMenu';
import { FooterResearch } from '@/Components/Research/FooterResearch';
import { Head } from '@inertiajs/inertia-react';
import React from 'react';

export default function Research(props) {
    return (
        <>
            <div className="relative container w-full min-h-screen px-10 mx-auto">
                <Head title={props.title} />
                <Navbar auth={props.auth} url={props.ziggy.url} />
                <div className="grid grid-cols-5 gap-6 pt-14 pb-36 ">
                    <FilterMenu />
                    <div className="col-span-5 lg:col-span-4">
                        <CardResearch />
                        <CardResearch />
                        <CardResearch />
                        <CardResearch />
                        <CardResearch />
                        <CardResearch />
                        <CardResearch />
                    </div>
                </div>
                <FooterResearch />
            </div>
            {<Footer /> && false}
        </>
    )
}


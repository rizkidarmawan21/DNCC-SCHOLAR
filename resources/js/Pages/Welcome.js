import { Footer } from '@/Components/Homepage/Footer';
import Hero from '@/Components/Homepage/Hero';
import Navbar from '@/Components/Navbar';
import { Stat } from '@/Components/Homepage/Stat';
import { Head } from '@inertiajs/inertia-react';
import React from 'react';


export default function Welcome(props) {
    return (
        <>
            <Head title={props.title} />
            <div className="w-full text-white h-full bg-gradient-to-b from-[#112037] to-[#58667C]">
                {<Navbar /> && false}
                <Hero />
                {<Stat /> && false}
                <Footer />
            </div>
        </>
    );
}

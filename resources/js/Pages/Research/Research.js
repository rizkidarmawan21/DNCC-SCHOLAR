import React from 'react';
import { Footer } from '@/Components/Homepage/Footer';
import Navbar from '@/Components/Navbar';
import { CardResearch } from '@/Components/Research/CardResearch';
import { FilterMenu } from '@/Components/Research/FilterMenu';
import { FooterResearch } from '@/Components/Research/FooterResearch';
import { Head } from '@inertiajs/inertia-react';

export default function Research(props) {
    return (
        <>
            <div className="relative container w-full min-h-screen px-10 mx-auto">
                <Head title={props.title} />
                <Navbar auth={props.auth} url={props.ziggy.url} />
                <div className="grid grid-cols-5 gap-6 lg:pt-14 pb-36 ">
                    <FilterMenu />
                    <div className="col-span-5 lg:col-span-4">
                        {props.resumes ? props.resumes.map((research, index) => {
                            return (
                                <CardResearch key={index} research={research} />
                            )
                            
                        }) :
                            <div className="grid content-center text-center w-full min-h-[200px] rounded-md bg-white">
                                <p>Data is null</p>
                            </div>
                        }
                    </div>
                </div>
                <FooterResearch />
            </div>
            {<Footer /> && false}
        </>
    )
}


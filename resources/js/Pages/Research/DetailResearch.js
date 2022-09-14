import Navbar from '@/Components/Navbar';
import { FooterResearch } from '@/Components/Research/FooterResearch';
import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function DetailResearch(props) {
    console.log(props)
    return (
        <div className="relative container w-full min-h-screen px-10 mx-auto">
            <Head title={props.title} />
            <Navbar auth={props.auth} url={props.ziggy.url} />
            <div className="text-sm breadcrumbs mt-4">
                <ul>
                    <li><Link href={route('research')} >Home</Link></li>
                    <li>Detail</li>
                    <li>{props.research.slug}</li>
                </ul>
            </div>
            <div className="mx-auto font-poppins sm:flex md:flex pt-10 pb-36">
                <div className="overflow-hidden mb-5 w-full sm:ml-2 md:ml-2 md:w-[70%] sm:mb-0">
                    <div className="px-6 py-4">
                        <div className=" mb-2 ">
                            <h1 className="font-bold text-3xl text-slate-700">
                                {props.research.title}
                            </h1>
                            <p className="py-3 text-slate-400">Published {props.research.year} - {props.research.category}</p>
                        </div>
                        <h1 className="py-2 font-bold text-xl">Abstrak</h1>
                        <p className="text-md text-slate-600">
                            {props.research.description}
                        </p>
                    </div>
                </div>
                <div className=" overflow-hidden w-full md:w-[30%] sm:mb-0">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-slate-700">By {props.research.author.name}  <span className="badge badge-sm p-2">DNCC {props.research.author.dncc_year}</span></div>
                        <p className="text-md text-slate-600">Merupakan anggota UKM DNCC (Dian Nuswantoro Computer Club) angkatan {props.research.author.dncc_year}
                        </p>
                        <div className="mt-4 flex md:block lg:flex">
                            {props.research.pdf ?
                            <div>
                                <a target="_blank" href={props.research.pdf}><img src="/assets/pdf.svg" /></a>
                            </div>
                            : null
                        }
                            {props.research.link ?
                            <div>
                                    <a href={props.research.link} target="_blank" >
                                    <img className="mt-0 sm:mt-0 md:mt-3 lg:mt-0" src="/assets/link.svg" />
                                </a>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>

            </div>
            <FooterResearch />
        </div>
    )
}
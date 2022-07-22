import Navbar from '@/Components/Navbar';
import { FooterResearch } from '@/Components/Research/FooterResearch';
import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function DetailResearch(props) {
    return (
        <div className="relative container w-full min-h-screen px-10 mx-auto">
            <Head title={props.title} />
            <Navbar auth={props.auth} url={props.ziggy.url} />
            <div className="text-sm breadcrumbs mt-4">
                <ul>
                    <li><Link href={route('research')} >Home</Link></li>
                    <li>Detail</li>
                    <li>perancangan-data-sinis</li>
                </ul>
            </div>
            <div className="mx-auto font-poppins sm:flex md:flex pt-10 pb-36">
                <div className="overflow-hidden mb-5 w-full sm:ml-2 md:ml-2 md:w-[70%] sm:mb-0">
                    <div className="px-6 py-4">
                        <div className=" mb-2 ">
                            <h1 className="font-bold text-3xl text-slate-700">
                                Perancangan sistem aplikasi pembangunan rumah dengan arduino
                            </h1>
                            <p className="py-3 text-slate-400">Published 21-03-2019 - Technology</p>
                        </div>
                        <h1 className="py-2 font-bold text-xl">Abstrak</h1>
                        <p className="text-md text-slate-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor faucibus lacus, in lacinia enim. Aenean in lacus vulputate, efficitur massa quis, mattis ante. Donec eu turpis enim. Nullam eget venenatis odio. Quisque consectetur nulla et odio vulputate, eu viverra nibh aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas semper vel sem et bibendum. Proin et blandit urna, quis blandit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sodales pharetra semper. Quisque placerat ornare quam. Maecenas vehicula tincidunt ex, vel suscipit ex viverra non. Fusce sodales mauris eget luctus dapibus. In euismod nisi eu sem volutpat, vitae tristique diam cursus.
                            <br />
                            Etiam iaculis magna cursus sem faucibus egestas. Fusce vel laoreet ipsum. Phasellus cursus leo nisi, dignissim finibus nisi laoreet eu. Pellentesque nisl nulla, laoreet vehicula nunc at, rhoncus hendrerit magna. Cras nec leo maximus, viverra felis in, cursus tellus. Nulla ut magna lacinia, lobortis dui sit amet, rhoncus enim. Donec nibh nibh, blandit eget tortor ornare, accumsan egestas lorem. Curabitur vel vestibulum mi. Integer non elementum libero.
                        </p>
                    </div>
                </div>
                <div className=" overflow-hidden w-full md:w-[30%] sm:mb-0">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-slate-700">By Rizki Darmawan  <span className="badge badge-sm p-2">DNCC 2020</span></div>
                        <p className="text-md text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, nam.
                        </p>
                        <div className="mt-4 flex md:block lg:flex">
                            <div>
                                <Link><img src="/assets/pdf.svg" /></Link>
                            </div>
                            <div>
                                <Link>
                                    <img className="mt-0 sm:mt-0 md:mt-3 lg:mt-0" src="/assets/link.svg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <FooterResearch />
        </div>
    )
}
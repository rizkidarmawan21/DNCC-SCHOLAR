import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { CardResearch } from '@/Components/Research/CardResearch';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard {props.auth.user.is_admin && 'Admin'
            }</h2>}
        >
            <Head title="Dashboard" />

            <div className="pt-12 pb-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {props.auth.user.is_admin ?
                                <b>Resume All</b>
                                :
                                <b>My Resume</b>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {props.auth.user.is_admin ?
                <div className="pb-12">
                    <div className="max-w-7xl mb-4 mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="w-full">
                                    <div>
                                        <Link href={route('research.show', 1)}>
                                            <h2 className="card-title text-sky-700 hover:text-sky-900">Perancangan sistem aplikasi pembangunan rumah dengan arduino</h2>
                                        </Link>
                                        <p className="text-slate-400 text-sm my-3">Rizki Darmawan - Techlonogy - 21-04-2002</p>
                                        <p>Pengadaan Barang merupakan suatu kegiatan pendistribusian barang yang digunakan untuk mendapatkan suatu barang atau jasa. Dalam suatu perusahaan, pengadaan barang merupakan kegiatan yang penting… <Link className="text-sky-700">Expand</Link></p>
                                        <div className="card-actions justify-end">
                                            <button className="btn text-white btn-sm btn-warning">Edit</button>
                                            <button className="btn text-white btn-sm btn-info">Detail</button>
                                            <button className="btn text-white btn-sm btn-error">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div className="pb-12">
                    <div className="max-w-7xl mb-4 mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="w-full">
                                    <div>
                                        <Link href={route('research.show', 1)}>
                                            <h2 className="card-title text-sky-700 hover:text-sky-900">Perancangan sistem aplikasi pembangunan rumah dengan arduino</h2>
                                        </Link>
                                        <p className="text-slate-400 text-sm my-3">Rizki Darmawan - Techlonogy - 21-04-2002</p>
                                        <p>Pengadaan Barang merupakan suatu kegiatan pendistribusian barang yang digunakan untuk mendapatkan suatu barang atau jasa. Dalam suatu perusahaan, pengadaan barang merupakan kegiatan yang penting… <Link className="text-sky-700">Expand</Link></p>
                                        <div className="card-actions justify-end">
                                            <button className="btn text-white btn-sm btn-warning">Edit</button>
                                            <button className="btn text-white btn-sm btn-info">Detail</button>
                                            <button className="btn text-white btn-sm btn-error">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }

        </Authenticated>
    );
}




import React, { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const flashMessage = props.flash.message ? (
        <div className="m-5">
            <div className="alert alert-success shadow-lg text-slate-50">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{props.flash.message}</span>
                </div>
            </div>
        </div>
    ) : null;

    useEffect(() => {
        if (!props.data) {
            Inertia.get('/dashboard')
        }
        return
    }, [])

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard {props.auth.user.is_admin ? 'Admin'
                : 'Member'}</h2>}
        >
            <Head title="Dashboard" />

            <div className="pt-12 pb-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {flashMessage}
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

            {props.data.length != 0 ? props.data.map((research, i) => {
                return (
                    <div className="pb-5">
                        <div key={i} className="max-w-7xl mb-4 mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <div className="w-full">
                                        <div>
                                            <Link href={route('research.show', 1)}>
                                                <h2 className="card-title text-sky-700 hover:text-sky-900">{research.title} <div className={`badge ${research.published ? "badge-primary" : ""}`}>{ research.published ? 'Public' : 'Members'}</div></h2>
                                            </Link>
                                            <p className="text-slate-400 text-sm my-3">{research.author.name} - {research.category} - {research.year}</p>
                                            <p>{research.excerpt} <Link className="text-sky-700">Expand</Link></p>
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
                )
            }
            ) : null
            }



        </Authenticated>
    );
}




import Authenticated from '@/Layouts/Authenticated'
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm } from '@inertiajs/inertia-react'
import React, { useEffect, useRef, useState } from 'react'
import Form from '@/Components/Form'

export default function createPost(props) {
    const categoris = [
        { category: 'Technology' },
        { category: 'Information Engineering' },
        { category: 'Information System' },
        { category: 'Graphic Design' },
        { category: 'Art' },
        { category: 'Business' },
        { category: 'Computer Science' },
        { category: 'Economics' },
        { category: 'Medicine' },
    ]

    const [published, setPublished] = useState(false)
    const { data, setData, post, errors, processing, reset } = useForm({
        title: '',
        year: '',
        category: '',
        description: '',
        link: '',
        pdf: null,
    })
    const ref = useRef()

    // useEffect(() => { 
    //     ref.current = 
    // })

    const handleChangeCheckbox = () => {
        setPublished(!published)
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    data.published = published

    const submit = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('pdf', data.pdf);

        post(route('research.store'), data);
        // reset()
        // setPublished(false);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Create Post" />
            <div className="pt-12 pb-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {errors.resumeFile &&
                            <div className="m-5">
                                <div className="alert alert-error shadow-lg text-slate-50">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{errors.resumeFile}</span>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="p-6 bg-white border-b border-gray-200"> <b>Your Post</b> </div>
                        <form onSubmit={submit}>
                            <div className="pl-6 pr-6 pb-6 bg-white border-b border-gray-200">
                                <Form title="Title" handleChange={onHandleChange} value={data.title} placeholder="Input title" type="text" name="title" />
                                {errors.title &&
                                    <ul className="ml-5 mt-2 list-disc">
                                        <li className="text-red-500">{errors.title}</li>
                                    </ul>
                                }
                                <Form title="Year" placeholder="Input year" type="number" name="year" handleChange={onHandleChange} value={data.year} />
                                {errors.year &&
                                    <ul className="ml-5 mt-2 list-disc">
                                        <li className="text-red-500">{errors.year}</li>
                                    </ul>
                                }

                                <div className="form-control mt-5">
                                    <label className="label">
                                        <span className="label-text text-[1em] font-semibold">Field of Study</span>
                                    </label>
                                    <label className="input-group">
                                        {/* <span>{title}</span> */}

                                        <select className="select select-bordered w-full" name="category" onChange={(e) => onHandleChange(e)} value={data.category}>
                                            <option value="" disabled selected>[ Select Field of study ]</option>
                                            {
                                                categoris.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.category}>{item.category}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </label>
                                </div>
                                {errors.category &&
                                    <ul className="ml-5 mt-2 list-disc">
                                        <li className="text-red-500">{errors.category}</li>
                                    </ul>
                                }
                                <div className="form-control mt-5">
                                    <label className="label">
                                        <span className="label-text text-[1em] font-semibold">Description</span>
                                    </label>
                                    <label className="input-group">
                                        {/* <span>{title}</span> */}
                                        <textarea name="description" onChange={(e) => onHandleChange(e)} value={data.description} placeholder="Input description" className="input input-bordered w-full h-40" />
                                    </label>
                                </div>
                                {errors.description &&
                                    <ul className="ml-5 mt-2 list-disc">
                                        <li className="text-red-500">{errors.description}</li>
                                    </ul>
                                }
                                <div className="mt-7 text-yellow-500">
                                    • &nbsp; Choose one of uploaded by link external or with pdf.
                                </div>

                                <Form title="Link External" placeholder="Input link resume" type="url" name="link" handleChange={onHandleChange} value={data.link} />
                                <div className="form-control mt-5">
                                    <label className="label">
                                        <span className="label-text text-[1em] font-semibold">File Pdf</span>
                                    </label>
                                    <label className="input-group">
                                        <input accept='.pdf' type="file" name="pdf" placeholder="Upload file pdf" ref={ref} onChange={e => setData('pdf', e.target.files[0])} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="mt-7 text-yellow-500">
                                    • &nbsp; Check this box if you want to publish for everyone, by default your posts are only for members.
                                </div>
                                <div className="lg:w-52 md:w-52 sm:w-52">
                                    <div className="form-control mt-5">
                                        <label className="label cursor-pointer">
                                            <span className="label-text text-[1em] font-semibold">Published in public ?</span>
                                            <input type="checkbox"
                                                onChange={handleChangeCheckbox}
                                                name="published"
                                                checked={published}
                                                className="checkbox" />
                                        </label>
                                    </div>
                                </div>
                                <button className="btn mt-5 w-full text-white btn-sm">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

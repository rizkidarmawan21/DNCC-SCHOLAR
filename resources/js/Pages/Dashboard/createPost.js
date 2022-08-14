import Button from '@/Components/Button'
import Form from '@/Components/Form'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function createPost(props) {
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
                        <div className="p-6 bg-white border-b border-gray-200"> <b>Your Post</b> </div>
                        <div className="pl-6 pr-6 pb-6 bg-white border-b border-gray-200">
                            <form onSubmit="">
                                <Form title="Title" placeholder="Input title" type="text" name="title" />
                                <Form title="Category" placeholder="Input category" type="text" name="category" />
                                <div className="form-control mt-5">
                                    <label className="label">
                                        <span className="label-text text-[1em] font-semibold">Description</span>
                                    </label>
                                    <label className="input-group">
                                        {/* <span>{title}</span> */}
                                        <textarea name="description" placeholder="Input description" className="input input-bordered w-full"></textarea>
                                    </label>
                                </div>
                                <div className="mt-7 text-yellow-500">
                                    • &nbsp; Choose one of uploaded by link external or with pdf.
                                </div>
                                <Form title="Link External" placeholder="Input link resume" type="url" name="link" />
                                <Form title="File PDF" placeholder="Upload file pdf" type="file" name="pdf" />
                                <button className="btn mt-5 w-full text-white btn-sm">Upload</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

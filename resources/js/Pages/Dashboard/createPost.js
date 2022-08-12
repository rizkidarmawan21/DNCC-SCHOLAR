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
                        <div className="pl-6 pb-6 bg-white border-b border-gray-200">
                            <Form title="Title" placeholder="title resume" type="text" name="title" />
                            <Form title="asas" placeholder="asas" type="text" name="asa" />
                            <Form title="asas" placeholder="asas" type="text" name="asa" />
                        </div>

                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

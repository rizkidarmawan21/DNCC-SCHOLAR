import Authenticated from '@/Layouts/Authenticated'
import React from 'react'

function users(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users Account</h2>}>
            <div>users</div>
        </Authenticated>
    )
}

export default users
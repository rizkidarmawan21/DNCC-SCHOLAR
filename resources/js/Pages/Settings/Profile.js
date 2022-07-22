import React from "react";
import Setting from "@/Layouts/Setting";

export default function Profile(props) {
    return (
        <Setting
            auth={props.auth}
            header={props.title}
            url={props.ziggy.url}
        >
            <div className="p-3">
                <h1 className="text-2xl font-bold pb-3">Profile</h1>
                <hr />
                <div className="m-5">
                    <span className="font-bold">Name</span>
                    <input type="text" placeholder="Name" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <span className="font-bold">Email</span>
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <span className="font-bold">Angkatan DNCC</span>
                    <input type="text" placeholder="DNCC Year" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <button class="btn btn-primary btn-sm">Update</button>
                </div>
            </div>
        </Setting>
    );
}

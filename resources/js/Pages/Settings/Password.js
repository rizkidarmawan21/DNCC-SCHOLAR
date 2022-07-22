import React from "react";
import Setting from "@/Layouts/Setting";

export default function Password(props) {
    return (
        <Setting
            auth={props.auth}
            header={props.title}
            url={props.ziggy.url}
        >
            <div className="p-3">
                <h1 className="text-2xl font-bold pb-3">Password</h1>
                <hr />
                <div className="m-5">
                    <span className="font-bold">Password Current</span>
                    <input type="password" placeholder="Password Current" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <span className="font-bold">Password</span>
                    <input type="password" placeholder="Password" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <span className="font-bold">Repeat Password</span>
                    <input type="password" placeholder="Repeat Password" className="input input-bordered w-full" />
                </div>
                <div className="m-5">
                    <button class="btn btn-primary btn-sm">Update</button>
                </div>
            </div>
        </Setting>
    );
}

import React, { useEffect } from "react";
import Setting from "@/Layouts/Setting";
import { useForm } from "@inertiajs/inertia-react";

export default function Password(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password_current: '',
        new_password: '',
        repeat_password: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };


    const submit = (e) => {
        e.preventDefault();
        post(route('settings.password.update', props.auth.user.id), data);
        reset()
    };
   
    return (

        <Setting
            auth={props.auth}
            header={props.title}
            url={props.ziggy.url}
            flash={props.flash}
        >
            <form onSubmit={submit}>
                <div className="p-3">
                    <h1 className="ml-5 text-2xl font-bold pb-3">Password</h1>
                    <hr />
                    <div className="m-5">
                        <span className="font-bold">Password Current</span>
                        <input type="password" placeholder="Password Current" name="password_current" onChange={(e) => onHandleChange(e)} value={data.password_current} className={`input input-bordered w-full  ${errors.password_current && 'input-error'}`} />
                        {errors.password_current &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.password_current}</li>
                            </ul>
                        }
                    </div>
                    <div className="m-5">
                        <span className="font-bold">New Password</span>
                        <input type="password" placeholder="New Password" name="new_password" onChange={(e) => onHandleChange(e)} value={data.new_password} className={`input input-bordered w-full  ${errors.new_password && 'input-error'}`} />
                        {errors.new_password &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.new_password}</li>
                            </ul>
                        }
                    </div>
                    <div className="m-5">
                        <span className="font-bold">Repeat Password</span>
                        <input type="password" placeholder="Repeat Password" name="repeat_password" onChange={(e) => onHandleChange(e)} value={data.repeat_password} className={`input input-bordered w-full  ${errors.repeat_password && 'input-error'}`} />
                        {errors.repeat_password &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.repeat_password}</li>
                            </ul>
                        }
                    </div>
                    <div className="m-5">
                        <button type="submit" className="btn btn-primary btn-sm">Update</button>
                    </div>
                </div>
            </form>
        </Setting>
    );
}

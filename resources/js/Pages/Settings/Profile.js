import React from "react";
import Setting from "@/Layouts/Setting";
import { useForm } from "@inertiajs/inertia-react";

export default function Profile(props) {
    const user = props.auth.user
    const { data, setData, post, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
        dncc_year: user.dncc_year,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('settings.profile.update', user.id), data);
        // post(route('buat'), data);
    };

    return (

        <Setting
            auth={props.auth}
            header={props.title}
            url={props.ziggy.url}
            flash={props.flash}
        >
            {console.log(data)}
            <form onSubmit={submit}>
                <div className="p-3">
                    <h1 className="ml-5 text-2xl font-bold pb-3">Profile</h1>
                    <hr />
                    <div className="m-5">
                        <span className="font-bold">Name</span>
                        <input type="text" placeholder="Name" name="name" onChange={(e) => onHandleChange(e)} value={data.name} className={`input input-bordered w-full  ${errors.name && 'input-error'}`} />
                        {errors.name &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.name}</li>
                            </ul>
                        }
                    </div>
                    <div className="m-5">
                        <span className="font-bold">Email</span>
                        <input type="text" placeholder="Email" name="email" onChange={(e) => onHandleChange(e)} value={data.email} className={`input input-bordered w-full ${errors.email && 'input-error'}`} />
                        {errors.email &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.email}</li>
                            </ul>
                        }
                    </div>
                    <div className="m-5">
                        <span className="font-bold">Angkatan DNCC</span>
                        <input type="number" minLength={4} placeholder="DNCC Year" onChange={(e) => onHandleChange(e)} name="dncc_year" value={data.dncc_year} className={`input input-bordered w-full ${errors.dncc_year && 'input-error'}`} />
                        {errors.dncc_year &&
                            <ul className="ml-5 mt-2 list-disc">
                                <li className="text-red-500">{errors.dncc_year}</li>
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

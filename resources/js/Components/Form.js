import React from 'react'

export default function Form({ title, type, placeholder, name, value, handleChange }) {
    return (
        <div className="form-control mt-5">
            <label className="label">
                <span className="label-text text-[1em] font-semibold">{title}</span>
            </label>
            <label className="input-group">
                {/* <span>{title}</span> */}
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={ (name) => handleChange(name)} className="input input-bordered w-full" />
            </label>
        </div>
    )
}
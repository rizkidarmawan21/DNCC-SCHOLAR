import React from 'react'

export default function Form({ title, type, placeholder, name }) {
    return (
        <div class="form-control">
            <label class="label">
                <span class="label-text">{title}</span>
            </label>
            <label class="input-group">
                <span>{title}</span>
                <input type={type} name={name} placeholder={placeholder} class="input input-bordered" />
            </label>
        </div>
    )
}
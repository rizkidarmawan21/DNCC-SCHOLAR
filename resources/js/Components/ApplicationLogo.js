import getUrl from '@/Helpers/url';
import React from 'react';

export default function ApplicationLogo({ className }) {
    return (
        <img
            src={getUrl('/assets/dncc-scholar.png')}
            alt="Workflow"
            width="100"
        />
    );
}

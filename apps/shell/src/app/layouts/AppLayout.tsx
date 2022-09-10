import { Link, Outlet } from '@tanstack/react-location';
import React from 'react';

export function AppLayout(): JSX.Element {
    return (
        <>
            <div><Link to="/">Home</Link><Link to="/clientOne">Client One</Link></div>
            <Outlet/>
        </>
    )
}
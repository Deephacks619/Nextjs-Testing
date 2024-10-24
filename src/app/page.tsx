// src/pages/index.tsx
'use client';
import Link from 'next/link';
import React, { use } from 'react';

export default function HomePage() {

    function openProfile() {
        console.log("profile clicked");
    }

    return (
        <div style={{ background: 'white' }}>
            <h1 style={{ background: 'black' }}>Welcome to the Pages Directory!</h1>;
            <Link style={{ background: 'black' }} href="/profile">Profile</Link>
        </div>
    )
}
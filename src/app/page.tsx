// src/pages/index.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import test_img from '../app/assets/pexels-navneet-shanu-202773-672630.jpg'

export default function HomePage() {

    const url = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'

    return (
        <div style={{ background: 'white' }}>
            <h1 style={{ background: 'black' }}>Welcome to the Pages Directory!</h1>;
            <Link style={{ background: 'black' }} href="/profile">Profile</Link>
            <Image
                width={500}
                height={500}
                priority={true}
                src={test_img}
                alt="Testing"
            />
        </div>
    )
}
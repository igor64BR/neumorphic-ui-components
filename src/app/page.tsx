"use client";

import { useEffect } from "react";

export default function IndexPage() {
    useEffect(() => {
        window.location.href = "/home-page";
    }, []);

    return (
        <html>
            <body></body>
        </html>
    );
}
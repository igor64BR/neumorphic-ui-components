"use client";

import { useEffect } from "react";

export default function IndexPage() {
    useEffect(() => {
        window.location.href = "/index";
    }, []);

    return (
        <html>
            <body></body>
        </html>
    );
}
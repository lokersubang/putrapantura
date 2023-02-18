import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <div>
            <footer className="py-3 mb-5">
                <ul className="nav justify-content-center border-b border-green-400 border-dashed pb-3 mb-3">
                    <li className="nav-item">
                        <Link
                            as="a"
                            href="/about"
                            className="nav-link font-semibold text-slate-700"
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            as="a"
                            href="/contact"
                            className="nav-link font-semibold text-slate-700"
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            as="a"
                            href="/disclaimer"
                            className="nav-link font-semibold text-slate-700"
                        >
                            Disclaimer
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-slate-500 font-bold">
                    &copy; {tahun} Putra Pantura
                </p>
            </footer>
        </div>
    );
}

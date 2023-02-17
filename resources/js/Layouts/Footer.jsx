import React from "react";

export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <div>
            <footer className="py-3 mb-5">
                <ul className="nav justify-content-center border-b border-green-400 border-dashed pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/about" className="nav-link text-muted">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link text-muted">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/disclaimer" className="nav-link text-muted">
                            Disclaimer
                        </a>
                    </li>
                </ul>
                <p className="text-center text-slate-500 font-bold">
                    &copy; {tahun} Putra Pantura
                </p>
            </footer>
        </div>
    );
}

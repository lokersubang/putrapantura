import React from "react";

export default function Footer() {
    const tahun = new Date().getFullYear();
    return (
        <div>
            <footer className="py-3 mb-5">
                <ul className="nav justify-content-center border-b border-green-400 border-dashed pb-3 mb-3">
                    <li className="nav-item">
                        <a href="https://web.facebook.com/groups/2288309921295419/?_rdc=1&_rdr" className="nav-link text-muted">
                        Tentang Kami
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://t.me/loker-subang" className="nav-link text-muted">
                          Kontak
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.instagram.com/lokersubang_com/" className="nav-link text-muted">
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

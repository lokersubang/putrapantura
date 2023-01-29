import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AdminLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="container-xl mb-5">
                <div className="row mt-3">
                    <div className="col-md-12 mb-4">{children}</div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

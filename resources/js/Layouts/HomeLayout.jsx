import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function HomeLayout({ children }) {
    return (
        <div>
            <Navbar />
            <main className="container-md">
                <div className="row mt-3">
                    <div className="col-md-8 mb-4">{children}</div>
                    <div className="col-md-4">
                        <Sidebar />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

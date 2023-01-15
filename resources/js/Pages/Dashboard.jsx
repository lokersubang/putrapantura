import Jumbotron from "@/Components/Jumbotron";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function Dashboard() {
    return (
        <div>
            <div className="prose max-w-none p-5 rounded-3  bg-slate-200">
                <div className="container-fluid">
                    <h1 className="mb-0 leading-relaxed font-extrabold text-slate-800">
                        Dashboard
                    </h1>
                    <h2 className="mt-0 text-xl">
                        Selamat datang di Halaman Administrator
                    </h2>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;

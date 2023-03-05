import Jumbotron from "@/Components/Jumbotron";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="keywords" content="putra pantura" />
                <meta name="description" content="Dashboard" />
                <meta name="author" content="Dadan Nurmaulana" />
                <link rel="icon" href="/img/icon.ico" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="Website yang membahas seputar Dunia Tekno, Gadget dan Komputer Terbaru"
                />
                <meta
                    property="og:title"
                    content="Putra Pantura - Informasi Digital Terkini"
                />
                <meta property="og:url" content="https:/putrapantura.com" />
                <meta property="og:image" content="/img/logo.webp" />
            </Head>
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

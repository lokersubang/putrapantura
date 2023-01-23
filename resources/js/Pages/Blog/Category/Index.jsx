import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import React from "react";

const Index = ({ categories }) => {
    return (
        <div>
            <Head>
                <title>Semua Kategori</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h2>Semua Kategori</h2>
                    <ul>
                        {categories.map((loker) => (
                            <li>
                                <Link
                                    className="text-decoration-none hover:text-green-400 font-bold text-slate-600"
                                    href={`/?kategori=${loker.slug}`}
                                >
                                    {" "}
                                    {loker.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Content>
            </div>
        </div>
    );
};

export default Index;

Index.layout = (page) => <HomeLayout children={page} />;

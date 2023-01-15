import Jumbotron from "@/Components/Jumbotron";
import Pagination from "@/Components/Pagination";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";

const Index = () => {
    return (
        <div>
            <Head>
                <title>
                    Loker Subang - Informasi Lowongan Kerja Subang dan
                    Sekitarnya
                </title>
            </Head>

            <Jumbotron />

            <div className="mt-3 prose max-w-none text-lg text-blue-900">
                <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                    Loker Terbaru
                </h3>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
                <div className="col-md-6">
                    <Post />
                </div>
            </div>
            <Pagination />
        </div>
    );
};

export default Index;

Index.layout = (page) => <HomeLayout children={page} />;

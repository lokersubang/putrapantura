import Jumbotron from "@/Components/Jumbotron";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import React from "react";

export default function Index() {
    return (
        <div>
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
            <nav aria-label="Page navigation example mt-4 ">
                <ul className="pagination">
                    <li className="page-item p-1">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li className="page-item p-1">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item p-1">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item p-1">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item p-1">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

Index.layout = (page) => <HomeLayout children={page} />;

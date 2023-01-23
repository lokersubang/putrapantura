import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

const Sidebar = () => {
    const { list } = usePage().props;
    console.log(list);
    return (
        <div>
            <div className="prose max-w-none">
                <div className="mb-3 p-3 bg-body rounded shadow-sm">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control rounded-lg border-gray-300"
                            placeholder="Cari lowongan"
                        />
                        <span className="btn btn-primary" id="basic-addon2">
                            <i className="fa-solid fa-magnifying-glass mt-1"></i>
                        </span>
                    </div>
                </div>

                <div className="mb-3 p-3 bg-body rounded shadow-sm">
                    <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                        Lowongan Terbaru
                    </h3>
                    <ul className="list-none">
                        {list.sidebar.map((item) => (
                            <li
                                className="text-relaxed list-disc"
                                key={item.id}
                            >
                                <Link
                                    as="a"
                                    href={route("post.show", item.slug)}
                                    className="text-decoration-none hover:text-green-400"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

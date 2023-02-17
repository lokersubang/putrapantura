import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import Ads from "@/Components/Ads";
import React from "react";

const Sidebar = () => {
    const { list } = usePage().props;

    const { data, setData, get, reset, processing, errors } = useForm({
        search: "",
    });

    function submit(e) {
        e.preventDefault();
        get(route("home"));
    }

    return (
        <div>
            <div className="prose max-w-none">
                <div className="mb-3 p-5 bg-info rounded shadow-sm">
                    <form onSubmit={submit}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control rounded-lg border-gray-300"
                                placeholder="Pencarian.."
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />

                            <button
                                type="submit"
                                className="btn bg-dark text-white"
                            >
                                Cari
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mb-3 p-3 bg-body rounded shadow-sm">
                    <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                        Artikel Terbaru
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
                                    className="text-decoration-none text-gray-700 hover:text-green-400"
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

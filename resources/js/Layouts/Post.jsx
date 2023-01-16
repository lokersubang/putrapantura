import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Post(props) {
    return (
        <div>
            <div className="d-flex text-muted pt-3">
                <img
                    src={props.img}
                    alt=""
                    loading="lazy"
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded p-2 object-center w-20 h-20"
                />

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between mt-2">
                        <Link
                            href={route("show")}
                            className="text-slate-900 hover:text-green-400"
                        >
                            <strong className="text-gray-dark ">
                                {/* <div className="text-success">subang</div> */}
                                <div className="d-block mt-1 leading-relaxed">
                                    {props.title}
                                </div>
                            </strong>
                        </Link>
                    </div>
                    <span className="d-block mt-1">
                        <small>4 hours ago</small>{" "}
                    </span>
                </div>
            </div>
        </div>
    );
}

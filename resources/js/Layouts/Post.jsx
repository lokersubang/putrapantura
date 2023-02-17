import { Link } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import React from "react";

export default function Post(props) {
    return (
        <div>
            {/* <div className="d-flex text-muted pt-3">
                <Link href={route("post.show", props.slug)} className="mr-2">
                    <img
                        src={props.img}
                        alt={props.title}
                        width={120}
                        height={20}
                        loading="lazy"
                        className="bd-placeholder-img flex-shrink-0 me-2 rounded p-2 object-center w-23 h-20"
                    />
                </Link>

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between mt-2">
                        <Link
                            href={route("post.show", props.slug)}
                            className="text-slate-900 hover:text-green-400"
                        >
                            <strong className="text-gray-dark ">
                                <div className="d-block mt-1 leading-relaxed">
                                    {props.title}
                                </div>
                            </strong>
                        </Link>
                    </div>
                    <span className="d-block mt-1">
                        <small>{moment(props.time).fromNow()}</small>
                    </span>
                </div>
            </div> */}

            <div className="bg-white p-3 rounded mb-3 mt-3">
                <Link href={route("post.show", props.slug)}>
                    <img
                        src={props.img}
                        alt={props.title}
                        loading="lazy"
                        className="bd-placeholder-img flex-shrink-0  rounded object-center "
                    />
                </Link>

                <span className="badge bg-success mt-3 mb-3">
                    {props.category}
                </span>
                <Link href={route("post.show", props.slug)}>
                    <h5 className="card-title font-bold hover:text-green-500 mb-3">
                        {props.title}
                    </h5>
                </Link>
                <p className="card-text">
                    <small className="text-muted">
                        Last updated {moment(props.time).fromNow()}
                    </small>
                </p>
            </div>
        </div>
    );
}

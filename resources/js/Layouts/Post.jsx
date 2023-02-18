import { Link } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import React from "react";

export default function Post(props) {
    return (
        <div>
            <div className="bg-white p-3 shadow-sm rounded mb-3">
                <Link href={route("post.show", props.slug)}>
                    <img
                        src={props.img}
                        alt={props.title}
                        loading="lazy"
                        width="100%"
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

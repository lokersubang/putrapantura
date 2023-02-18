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
                        width={300}
                        height={300}
                        className="card-img-top rounded"
                    />
                </Link>

                <span className="badge bg-success mt-3 mb-3">
                    {props.category}
                </span>
                <Link href={route("post.show", props.slug)}>
                    <h5 className="card-title text-stale-700 font-bold hover:text-green-500 mb-3 leading-normal">
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

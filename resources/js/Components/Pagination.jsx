import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <div>
         <div className="table-responsive">
            <nav aria-label="Page navigation example mt-4 ">
                <ul className="pagination mt-3">
                    {links.map((link, k) => (
                        <div key={k}>
                            <li
                                className={`page-item p-1 ${
                                    link.active && "active"
                                } ${link.url === null ? "disabled" : ""}`}
                            >
                                <Link
                                    disabled={link.url === null ? true : false}
                                    as="button"
                                    href={link.url}
                                    className="page-link"
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
          </div>
      </div>
    );
};

export default Pagination;

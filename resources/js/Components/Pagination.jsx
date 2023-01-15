import React from "react";

const Pagination = () => {
    return (
        <div>
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
};

export default Pagination;

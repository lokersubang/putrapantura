import React from "react";

export default function Sidebar() {
    return (
        <div className="prose max-w-none">
            <div className="mb-3 p-3 bg-body rounded shadow-sm">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control rounded-lg border-gray-300"
                        placeholder="Cari lowongan"
                    />
                    <span className="btn btn-primary" id="basic-addon2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>

            <div className="mb-3 p-3 bg-body rounded shadow-sm">
                <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                    Lowongan Terbaru
                </h3>

                <ul className="list-none">
                    <li className="text-relaxed">An item</li>
                    <li className="text-relaxed">A second item</li>
                    <li className="text-relaxed">A third item</li>
                    <li className="text-relaxed">A fourth item</li>
                    <li className="text-relaxed">And a fifth one</li>
                </ul>
                {/* <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div className="d-flex justify-content-between">
                            <div className="text-gray-dark">
                                Lowongan Kerja PT Taekwang Indonesia
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div className="d-flex justify-content-between">
                            <div className="text-gray-dark">
                                Lowongan Kerja PT Taekwang Indonesia
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
                    <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                        <div className="d-flex justify-content-between">
                            <div className="text-gray-dark">
                                Lowongan Kerja PT Taekwang Indonesia
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

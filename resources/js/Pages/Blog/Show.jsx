import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";
import Content from "@/Layouts/Content";

export default function Show() {
    return (
        <div>
            <div className="alert alert-warning mt-2" role="alert">
                <marquee>
                    <i className="fas fa-bullhorn" /> Tahapan seleksi
                    <strong> TIDAK DIPUNGUT BIAYA APAPUN !</strong>
                </marquee>
            </div>
            <div className="p-4 rounded bg-white shadow-sm ">
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-sm">Home</li>
                        <li className="breadcrumb-item text-sm">
                            Lowongan Kerja PT Eco Paper Indonesia Subang
                        </li>
                    </ol>
                </nav>
                <Content>
                    <h1 className="mb-3">
                        Lowongan Kerja PT Eco Paper Indonesia Subang
                    </h1>
                    <span className="text-sm pe-4">
                        <i className="fa-solid fa-clock"></i> 3 days ago
                    </span>
                    <span className="text-sm">
                        <i className="fas fa-user-edit"></i> lokersubang.com
                    </span>
                    <div className="border-dashed border-b mt-2 border-green-600" />
                    <img
                        src="/img/img2.jpg"
                        alt=""
                        className=""
                        loading="lazy"
                    />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet quisquam tenetur voluptatum odit provident
                        nisi magnam porro rem illum fugiat, natus laboriosam,
                        officia corporis dolore eligendi optio facere adipisci
                        labore in reprehenderit saepe. Commodi quod eum
                        temporibus non corrupti aut numquam! Odio sapiente, ut,
                        voluptatibus ducimus illo sed libero a provident,
                        placeat obcaecati at veritatis labore!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet quisquam tenetur voluptatum odit provident
                        nisi magnam porro rem illum fugiat, natus laboriosam,
                        officia corporis dolore eligendi optio facere adipisci
                        labore in reprehenderit saepe. Commodi quod eum
                        temporibus non corrupti aut numquam! Odio sapiente, ut,
                        voluptatibus ducimus illo sed libero a provident,
                        placeat obcaecati at veritatis labore!
                    </p>
                    <h2>ladssadasd</h2>
                    <ul>
                        <li>ldasdasdsadsa</li>
                        <li>ldasdasdsadsa</li>
                        <li>ldasdasdsadsa</li>
                        <li>ldasdasdsadsa</li>
                        <li>ldasdasdsadsa</li>
                        <li>ldasdasdsadsa</li>
                    </ul>
                    <h3>sadasdasdadsdsadad</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem sit quibusdam maxime! Asperiores quidem iure
                        doloribus architecto cupiditate aliquid maiores ex
                        nihil, magnam perspiciatis ad ipsa iusto sint id
                        consectetur nobis, pariatur rem exercitationem rerum
                        voluptatem dolor! Saepe tempore laboriosam recusandae
                        nisi accusantium eum similique.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet quisquam tenetur voluptatum odit provident
                        nisi magnam porro rem illum fugiat, natus laboriosam,
                        officia corporis dolore eligendi optio facere adipisci
                        labore in reprehenderit saepe. Commodi quod eum
                        temporibus non corrupti aut numquam! Odio sapiente, ut,
                        voluptatibus ducimus illo sed libero a provident,
                        placeat obcaecati at veritatis labore!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet quisquam tenetur voluptatum odit provident
                        nisi magnam porro rem illum fugiat, natus laboriosam,
                        officia corporis dolore eligendi optio facere adipisci
                        labore in reprehenderit saepe. Commodi quod eum
                        temporibus non corrupti aut numquam! Odio sapiente, ut,
                        voluptatibus ducimus illo sed libero a provident,
                        placeat obcaecati at veritatis labore!
                    </p>
                    <div className="border-dotted border-b mt-2 border-green-600" />
                    <div className="mt-3">
                        <div className="d-flex align-items-center  my-3 bg-white rounded">
                            <a href="#">
                                <img
                                    className="me-3"
                                    loading="lazy"
                                    src="/img/icon.png"
                                    alt=""
                                    width={70}
                                />
                            </a>
                            <div className="lh-1">
                                <h5 className="leading-normal mb-2">
                                    lokersubang.com
                                </h5>
                                <span className="small text-muted lh-base">
                                    Berbagi informasi lowongan pekerjaan subang
                                    dan sekitarnya.
                                </span>
                            </div>
                        </div>
                        <div className="border-dotted border-b mt-2 border-green-600" />
                    </div>
                </Content>
            </div>
        </div>
    );
}
Show.layout = (page) => <HomeLayout children={page} />;

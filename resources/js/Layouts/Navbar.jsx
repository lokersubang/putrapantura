import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark bg-slate-900 "
                aria-label="Main navigation"
            >
                <div className="container-xl">
                    <Link className="navbar-brand p-2" href={route("home")}>
                        <img src="/img/logo.png" width={135}></img>
                    </Link>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        id="navbarSideCollapse"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            document
                                .querySelector(".offcanvas-collapse")
                                .classList.toggle("open");
                        }}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="navbar-collapse offcanvas-collapse"
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    href={route("home")}
                                    as="a"
                                    className="nav-link active text-decoration-none"
                                >
                                    <i className="fa-solid fa-house"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown m-0">
                                <Link
                                    as="a"
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Lowongan Kerja
                                </Link>
                                <ul className="dropdown-menu ">
                                    <li>
                                        <Link
                                            as="a"
                                            className="dropdown-item"
                                            href={route(
                                                "category.show",
                                                "loker-subang"
                                            )}
                                        >
                                            Loker Subang
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            as="a"
                                            className="dropdown-item"
                                            href={route(
                                                "category.show",
                                                "luar-kota"
                                            )}
                                        >
                                            Luar Kota
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            as="a"
                                            className="dropdown-item"
                                            href={route(
                                                "category.show",
                                                "bumn"
                                            )}
                                        >
                                            BUMN
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            as="a"
                                            className="dropdown-item"
                                            href={route(
                                                "category.show",
                                                "cpns"
                                            )}
                                        >
                                            CPNS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            as="a"
                                            className="dropdown-item"
                                            href={route(
                                                "category.show",
                                                "freelance"
                                            )}
                                        >
                                            Freelance
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link
                                    as="a"
                                    className="nav-link"
                                    href={route("category.show", "magang")}
                                >
                                    Magang
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    as="a"
                                    className="nav-link"
                                    href={route("category.show", "pelatihan")}
                                >
                                    Pelatihan
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    as="a"
                                    className="nav-link"
                                    href={route("category.show", "informasi")}
                                >
                                    Informasi
                                </Link>
                            </li>
                        </ul>
                        {auth.user !== null ? (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa-solid fa-user"></i>{" "}
                                        {auth.user.name}
                                    </a>
                                    <ul className="dropdown-menu dropdown-end">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("dashboard")}
                                                as="a"
                                            >
                                                <i className="fa-solid fa-home"></i>{" "}
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href={route("article.create")}
                                                as="a"
                                            >
                                                <i className="fa-solid fa-pencil"></i>{" "}
                                                Tulis Lowongan
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href={route("article.index")}
                                                as="a"
                                            >
                                                <i className="fa-solid fa-address-book"></i>{" "}
                                                Data Lowongan
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("profile.edit")}
                                                as="a"
                                            >
                                                <i className="fa-solid fa-user-gear"></i>{" "}
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href={route("logout")}
                                                as="button"
                                                method="post"
                                            >
                                                <i className="fa-solid fa-right-to-bracket"></i>{" "}
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        href={route("login")}
                                        className="nav-link text-decoration-none "
                                        as="a"
                                    >
                                        <i className="fa-solid fa-right-to-bracket"></i>{" "}
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>

            <div className="nav-scroller bg-body shadow-sm">
                <div className="container-xl">
                    <nav className="nav" aria-label="Secondary navigation">
                        <Link
                            href={route("about")}
                            className="nav-link text-decoration-none "
                            as="a"
                        >
                            About
                        </Link>
                        <Link
                            href={route("contact")}
                            className="nav-link"
                            as="a"
                        >
                            Contact
                        </Link>
                        <Link
                            href={route("privacyPolicy")}
                            className="nav-link"
                            as="a"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href={route("disclaimer")}
                            className="nav-link text-decoration-none"
                            as="a"
                        >
                            Disclaimer
                        </Link>
                        <Link
                            href={route("termOfService")}
                            className="nav-link text-decoration-none "
                            as="a"
                        >
                            Term Of Service
                        </Link>
                        <Link
                            href={route("faq")}
                            className="nav-link text-decoration-none "
                            as="a"
                        >
                            FAQ?
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment";

const Show = ({ article }) => {
    return (
        <div>
            <Head>
                <title>{article.title}</title>
                <meta name="keywords" content={article.title} />
                <meta name="description" content={article.description} />
                <link rel="icon" href="/img/icon.ico" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.description} />
                <meta property="og:url" content={article.slug} />
                <meta property="og:image" content={article.image} />
            </Head>

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
                        <li className="breadcrumb-item active text-sm">
                            {article.title}
                        </li>
                    </ol>
                </nav>
                {article.category_id == 9 || article.category_id == 8 ? (
                    <div>
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "NewsArticle",
                                headline: article.title,
                                image: [`/img/${article.image}`],
                                datePublished: moment(
                                    article.created_at
                                ).format(),
                                dateModified: moment(
                                    article.created_at
                                ).format(),
                                author: [
                                    {
                                        "@type": "Person",
                                        name: "Dadan Nurmaulana",
                                        url: "https://web.facebook.com/dadannurmaulana",
                                    },
                                ],
                            })}
                        </script>
                    </div>
                ) : (
                    <div>
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "JobPost",
                                headline: article.title,
                                description: article.body,
                                image: [article.image],
                                datePublished: article.created_at,
                                dateModified: article.updated_at,
                                author: [
                                    {
                                        "@type": "Person",
                                        name: "Dadan Nurmaulana",
                                        url: "https://web.facebook.com/dadannurmaulana",
                                    },
                                    {
                                        "@type": "Person",
                                        name: "Dadan Nurmaulana",
                                        url: "https://web.facebook.com/dadannurmaulana",
                                    },
                                ],
                            })}
                        </script>
                    </div>
                )}
                <Content>
                    <h1 className="mb-3">{article.title}</h1>
                    <span className="text-sm pe-4">
                        <i className="fa-solid fa-clock"></i>{" "}
                        {moment(article.created_at).fromNow()}
                    </span>
                    <span className="text-sm">
                        <i className="fas fa-user-edit"></i> {article.user.name}
                    </span>
                    <div className="border-dashed border-b mt-2 border-green-600" />
                    <img
                        src={article.image}
                        alt={article.title}
                        className="img-fluid"
                        loading="lazy"
                    />
                    <div dangerouslySetInnerHTML={{ __html: article.body }} />

                    {article.category_id == 9 || article.category_id == 8 ? (
                        <div />
                    ) : (
                        <>
                            <div className="p-3 text-white bg-danger rounded">
                                <h2 className="text-white mt-0">Penting !!!</h2>
                                <p>
                                    Apabila dalam proses recuitment terdapat
                                    pemungutan biaya atau disarankan menggunakan
                                    jasa travel dan sebagainya. Di harapkan
                                    teman-teman tidak mengikutinya dan abaikan
                                    saja.
                                </p>
                                <p>
                                    Pihak lokersubang.com tidak menyarankan itu
                                    semua. Karena pada dasarnya, proses
                                    recruitment tidak memungut biaya sepeserpun.
                                    Kecuali biaya akomodasi untuk mendatangi
                                    lokasi tes, maka itu tanggung jawab pribadi
                                    masing-masing.
                                </p>
                                <p>
                                    Dan apabila terjadi penipuan dll.
                                    lokersubang.com tidak akan bertanggung
                                    jawab.
                                </p>
                            </div>
                        </>
                    )}

                    <div className="border-dotted border-b mt-2 border-green-600" />
                    <div className="mt-3">
                        <div className="d-flex align-items-center  my-3 bg-white rounded">
                            <a href="#">
                                <img
                                    className="me-3"
                                    loading="lazy"
                                    src="/img/icon.png"
                                    alt="lokersubang.com"
                                    width={70}
                                />
                            </a>
                            <div className="lh-1">
                                <h5 className="leading-normal mb-2">
                                    <a
                                        href="https://web.facebook.com/dadannurmaulana"
                                        className="text-decoration-none"
                                    >
                                        {article.user.name}
                                    </a>
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
                {article.category_id == 9 || article.category_id == 8 ? (
                    <div />
                ) : (
                    <div>
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "http://schema.org/",
                                "@type": "JobPosting",
                                title: article.title,
                                description: article.body,
                                url: `${article.slug}.html`,
                                datePosted: article.created_at,
                                validThrough: "2024-03-18T00:00",
                                employmentType: "FULL_TIME",
                                hiringOrganization: {
                                    "@type": "Organization",
                                    name: article.company,
                                    sameAs: `https://lokersubang.com/${article.slug}.html`,
                                    logo: article.image,
                                },
                                jobLocation: {
                                    "@type": "Place",
                                    address: {
                                        "@type": "PostalAddress",
                                        streetAddress: article.address,
                                        addressLocality: article.address,
                                        addressRegion: "Jawa Barat",
                                        postalCode: "41256",
                                        addressCountry: "Indonesia",
                                    },
                                },
                                baseSalary: {
                                    "@type": "MonetaryAmount",
                                    currency: "IDR",
                                    value: {
                                        "@type": "QuantitativeValue",
                                        value: (() => {
                                            if (article.address === "Karawang")
                                                return "5000000";
                                            if (article.address === "Subang")
                                                return "1800000 - 4000000";
                                            if (
                                                article.address === "Purwakarta"
                                            )
                                                return "2000000 - 4500000";
                                            if (article.address === "Bekasi")
                                                return "2000000 - 5000000";
                                            if (article.address === "Cikarang")
                                                return "2000000 - 5000000";
                                            if (article.address === "Bandung")
                                                return "2000000 - 4500000";
                                            if (article.address === "Indramayu")
                                                return "1800000 - 3500000";
                                            if (
                                                article.address === "Majalengka"
                                            )
                                                return "2000000 - 3500000";
                                            if (article.address === "Cirebon")
                                                return "2000000 - 4000000";
                                            else return "2000000 - 4000000";
                                        })(),
                                        unitText: "MONTH",
                                    },
                                },
                            })}
                        </script>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Show;
Show.layout = (page) => <HomeLayout children={page} />;

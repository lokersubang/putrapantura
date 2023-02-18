import Ads from "@/Components/Ads";
import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment";

const Show = ({ article }) => {
    const articleData = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        image: [article.image],
        datePublished: moment(article.created_at).format(),
        dateModified: moment(article.created_at).format(),
        author: [
            {
                "@type": "Person",
                name: "Dadan Nurmaulana",
                url: "https://web.facebook.com/dadannurmaulana",
            },
        ],
    };

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
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(articleData),
                            }}
                        />
                    </>
                ) : (
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(job1),
                            }}
                        />
                    </>
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
                    <div className="border-dashed border-b mb-3 mt-2 border-green-600" />
                    <center>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="img-fluid mt-2 rounded"
                            loading="lazy"
                        />
                    </center>
                    <div dangerouslySetInnerHTML={{ __html: article.body }} />

                    <div className="border-dotted border-b mt-2 border-green-600" />
                    <div className="mt-3">
                        <div className="d-flex align-items-center  my-3 bg-white rounded">
                            <a href="#">
                                <img
                                    className="me-3"
                                    loading="lazy"
                                    src="/img/logo.webp"
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
                                    Berbagi Informasi Seputar Dunia Digital,
                                    Gadget dan Komputer.
                                </span>
                            </div>
                        </div>
                        <div className="border-dotted border-b mt-2 border-green-600" />
                    </div>
                </Content>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(job2),
                    }}
                />
            </div>
        </div>
    );
};

export default Show;
Show.layout = (page) => <HomeLayout children={page} />;

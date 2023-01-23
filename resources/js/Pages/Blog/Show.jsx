import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment";

const Show = ({ article }) => {
    return (
        <div>
            <Head>
                <title>{article.title}</title>
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
                <Content>
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "NewsArticle",
                            headline: article.title,
                            image: [`/img/${article.image}`],
                            datePublished: moment(article.created_at).format(),
                            dateModified: moment(article.created_at).format(),
                            author: [
                                {
                                    "@type": "Person",
                                    name: "Dadan Nurmaulana",
                                    url: "https://web.facebook.com/dadannurmaulana",
                                },
                            ],
                        })}
                    </script>
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
                        alt=""
                        // width={300}
                        className="img-fluid"
                        loading="lazy"
                    />
                    <div dangerouslySetInnerHTML={{ __html: article.body }} />
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
                                    {article.user.name}
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
};

export default Show;
Show.layout = (page) => <HomeLayout children={page} />;

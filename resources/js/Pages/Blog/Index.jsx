import Jumbotron from "@/Components/Jumbotron";
import Pagination from "@/Components/Pagination";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { data: posts, links, from } = props.posts;
    const { title } = props;
    return (
        <div>
            <Head>
                <title>Putra Pantura - Informasi Digital Terkini</title>
                 <link rel="canonical" href="https://putrapantura.com/" />
                <meta name="keywords" content="putra pantura" />
                <meta name="description" content="Informasi Digital Terkini" />
                <meta name="author" content="Dadan Nurmaulana" />
                <link rel="icon" href="/img/icon.ico" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:description"
                    content="Website yang membahas seputar Dunia Tekno, Gadget dan Komputer Terbaru"
                />
                <meta
                    property="og:title"
                    content="Putra Pantura - Informasi Digital Terkini"
                />
                <meta property="og:url" content="https:/putrapantura.com" />
                <meta property="og:image" content="/img/logo.webp" />
            </Head>

            <div className="prose max-w-none text-lg text-blue-900">
                <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                    Artikel Terbaru
                </h3>
            </div>
            <div className="row mb-3 mt-3">
                {posts.length !== 0 ? (
                    posts.map((post) => (
                        <div className="col-md-6" key={post.id}>
                            <Post
                                title={post.title}
                                img={post.image ?? "/img/404.jpg"}
                                time={post.created_at}
                                slug={post.slug}
                                category={post.category.name}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-md-6 mt-3">
                        <div className="alert alert-warning">
                            <h1 className="font-bold">
                                Artikel Tidak Ditemukan !
                            </h1>
                        </div>
                    </div>
                )}
            </div>

            <Pagination links={links} />
        </div>
    );
};

export default Index;

Index.layout = (page) => <HomeLayout children={page} />;

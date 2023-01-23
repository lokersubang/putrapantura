import Jumbotron from "@/Components/Jumbotron";
import Pagination from "@/Components/Pagination";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";

const Index = (props) => {
    const { data: lokers, links, from } = props.lokers;
    return (
        <div>
            <Head>
                <title>
                    Loker Subang - Informasi Lowongan Kerja Subang dan
                    Sekitarnya
                </title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>

            <Jumbotron />

            <div className="mt-3 prose max-w-none text-lg text-blue-900">
                <h3 className="border-b pb-2 border-dashed  m-0 fw-bold">
                    Loker Terbaru
                </h3>
            </div>
            <div className="row mb-3">
                {lokers.length !== 0 ? (
                    lokers.map((loker) => (
                        <div className="col-md-6" key={loker.id}>
                            <Post
                                title={loker.title}
                                // img={loker.image}
                                img={loker.image ?? "/img/404.jpg"}
                                time={loker.created_at}
                                slug={loker.slug}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-md-6 mt-3">
                        <div className="alert alert-warning">
                            <h1 className="font-bold">
                                Lowongan Tidak Ditemukan !
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

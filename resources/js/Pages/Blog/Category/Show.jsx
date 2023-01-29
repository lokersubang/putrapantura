import Pagination from "@/Components/Pagination";
import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Show = (props) => {
    const { data: lokers, links, from } = props.lokers;
    const { title } = props;
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h2 className="border-b border-dashed">{title}</h2>
                </Content>
                <div className="row mb-3">
                    {lokers.map((loker) => (
                        <div className="col-md-6" key={loker.id}>
                            <Post
                                title={loker.title}
                                img={loker.image ?? "/img/404.jpg"}
                                time={loker.created_at}
                                slug={loker.slug}
                            />
                        </div>
                    ))}
                    <Pagination links={links} />
                </div>
            </div>
        </div>
    );
};

export default Show;

Show.layout = (page) => <HomeLayout children={page} />;

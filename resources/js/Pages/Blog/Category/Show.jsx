import Pagination from "@/Components/Pagination";
import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import Post from "@/Layouts/Post";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Show = (props) => {
    const { data: posts, links, from } = props.posts;
    const { title } = props;
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>

            <Content>
                <h2 className="border-b border-dashed">{title}</h2>
            </Content>
            <div className="row mb-3 mt-3">
                {posts.map((post) => (
                    <div className="col-md-6" key={post.id}>
                        <Post
                            title={post.title}
                            img={post.image ?? "/img/404.jpg"}
                            time={post.created_at}
                            slug={post.slug}
                        />
                    </div>
                ))}
                <Pagination links={links} />
            </div>
        </div>
    );
};

export default Show;

Show.layout = (page) => <HomeLayout children={page} />;

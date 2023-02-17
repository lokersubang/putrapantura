import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";

const About = () => {
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h1>About</h1>
                    <p>
                        putrapantura.com adalah website yang dibuat oleh orang
                        pantura. Dimana website putra pantura dibuat untuk
                        membagikan informasi yang bermanfaat terutama dalam
                        bidang Tekno, gadget dan Komputer secara terupdate..
                    </p>

                    <strong>By putrapantura.com</strong>
                </Content>
            </div>
        </div>
    );
};

export default About;

About.layout = (page) => <HomeLayout children={page} />;

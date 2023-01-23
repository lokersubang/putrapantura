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
                        Berawal dari banyaknya website informasi lowongan kerja
                        yang memberikan informasi dari sumber tidak jelas.
                        Sehingga membuat para pencari kerja tidak bisa
                        mendapatkan informasi yang mereka harapkan.
                    </p>
                    <p>
                        Tidak sedikit juga banyak oknum yang mengatasnamakan
                        perusahaan untuk kepentingan bisnis. Sehingga banyak
                        para pencari kerja yang dirugikan.
                    </p>
                    <p>
                        Lokersubang.com hadir untuk membantu para pencari kerja
                        untuk bisa mendapatkan informasi lowongan pekerjaan yang
                        jelas dan dapat dipertanggungjawabkan sumbernya.{" "}
                    </p>
                    <p>
                        Maka dari itu harapan dari lokersubang.com adalah bisa
                        membantu para pencari kerja untuk mendapatkan pekerjaan
                        dan juga bisa mengurangi pengangguran terutama untuk
                        wilayah Kabupaten Subang dan Sekitarnya.
                    </p>
                    <strong>By Lokersubang.com</strong>
                </Content>
            </div>
        </div>
    );
};

export default About;

About.layout = (page) => <HomeLayout children={page} />;

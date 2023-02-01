import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

const Faq = () => {
    return (
        <div>
            <Head>
                <title>FAQ</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h1>FAQ ?</h1>
                    <h2>
                        Posting lowongan di lokersubang.com apakah berbayar?
                    </h2>
                    <p>
                        Kamu bisa membuat atau memasang iklan lowongan pekerjaan
                        secara gratis dan tanpa batas. Dengan catatan semua
                        informasi yang dikirimkan harus sesuai dengan kebijakan.
                    </p>
                    <h2>Bagaimana saya membuat postingan lowongan?</h2>
                    <p>
                        Kamu hanya tinggal mengisi Judul dan Deskripsi lowongan
                        saja. Selanjutnya tim admin yang akan menentukan
                        kategorinya.
                    </p>
                    <h2>Apa keuntungan memposting di lokersubang.com?</h2>
                    <p>
                        Kamu akan mendapatkan job seeker dengana cepat dan
                        postingan kamu akan mendapatkan kesempatan lebih besar
                        untuk di baca oleh orang-orang. <br />
                        <br />
                        Salah satunya akan masuk Jobpost Google seperti berikut:
                    </p>
                    <img
                        src="https://lokersubang.com/public/img/jobpost.JPG"
                        className="img-fluid mt-2"
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                </Content>
            </div>
        </div>
    );
};

export default Faq;
Faq.layout = (page) => <HomeLayout children={page} />;

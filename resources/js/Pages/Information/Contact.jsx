import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm">
                <Content>
                    <h1>Contact</h1>
                    <p>
                        Untuk informasi tentang putrapantura.com bisa
                        menghubungi via
                        <b> Email</b> atau <b>Nomor WhatsApp</b> Berikut :
                    </p>
                    <ul>
                        <li>dadannurmaulana1@gmail.com</li>
                        <li>085814962075</li>
                    </ul>
                </Content>
            </div>
        </div>
    );
};

export default Contact;
Contact.layout = (page) => <HomeLayout children={page} />;

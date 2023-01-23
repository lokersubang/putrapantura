import Content from "@/Layouts/Content";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/inertia-react";

const TermOfService = () => {
    return (
        <div>
            <Head>
                <title>Term Of Service</title>
                <link rel="icon" href="/img/icon.ico" />
            </Head>
            <div className="p-4 rounded bg-white shadow-sm ">
                <Content>
                    <h1>Term Of Service</h1>
                    <h2>1. Persyaratan</h2>
                    <p>
                        Dengan mengakses Situs Web ini, yang dapat diakses dari
                        lokersubang.com, Anda setuju untuk terikat dengan Syarat
                        dan Ketentuan Penggunaan Situs Web ini dan setuju bahwa
                        Anda bertanggung jawab atas perjanjian dengan hukum
                        setempat yang berlaku. Jika Anda tidak setuju dengan
                        salah satu persyaratan ini, Anda dilarang mengakses
                        situs ini. Materi yang terkandung dalam Situs Web ini
                        dilindungi oleh undang-undang hak cipta dan merek
                        dagang.
                    </p>
                    <h2>2. Gunakan Lisensi</h2>
                    <p>
                        Izin diberikan untuk mengunduh sementara satu salinan
                        materi di Situs web lokersubang.com untuk tampilan
                        sementara non-komersial pribadi saja. Ini adalah
                        pemberian lisensi, bukan pengalihan hak, dan di bawah
                        lisensi ini Anda tidak boleh:
                    </p>
                    <ul>
                        <li>memodifikasi atau menyalin materi;</li>
                        <li>
                            menggunakan materi untuk tujuan komersial apa pun
                            atau untuk tampilan publik apa pun;
                        </li>
                        <li>
                            berusaha merekayasa balik perangkat lunak apa pun
                            yang terdapat di Situs web lokersubang.com;
                        </li>
                        <li>
                            menghapus hak cipta atau notasi kepemilikan lainnya
                            dari materi; atau
                        </li>
                        <li>
                            mentransfer materi ke orang lain atau "mencerminkan"
                            materi di server lain.
                        </li>
                    </ul>
                    <p>
                        Ini akan membuat lokersubang.com berhenti jika melanggar
                        salah satu batasan ini. Setelah pengakhiran, hak
                        menonton Anda juga akan dihentikan dan Anda harus
                        memusnahkan materi unduhan apa pun yang Anda miliki baik
                        dalam format cetak maupun elektronik.{" "}
                    </p>
                    <h2>3. Disclaimer</h2>
                    <p>
                        Semua materi di Situs lokersubang.com disediakan
                        "sebagaimana adanya". lokersubang.com tidak memberikan
                        jaminan, baik tersurat maupun tersirat, oleh karena itu
                        meniadakan semua jaminan lainnya. Selanjutnya,
                        lokersubang.com tidak membuat pernyataan apa pun
                        mengenai keakuratan atau keandalan penggunaan materi di
                        Situs Web-nya atau yang berkaitan dengan materi tersebut
                        atau situs apa pun yang tertaut ke Situs Web ini.
                    </p>
                    <h2>4. Batasan</h2>
                    <p>
                        lokersubang.com atau pemasoknya tidak akan bertanggung
                        jawab atas segala kerusakan yang akan timbul dengan
                        penggunaan atau ketidakmampuan untuk menggunakan materi
                        di Situs web lokersubang.com, bahkan jika
                        lokersubang.com atau perwakilan resmi dari Situs Web ini
                        telah diberitahu , secara lisan atau tertulis, tentang
                        kemungkinan kerusakan tersebut. Beberapa yurisdiksi
                        tidak mengizinkan batasan pada jaminan tersirat atau
                        batasan tanggung jawab atas kerusakan insidental,
                        batasan ini mungkin tidak berlaku untuk Anda.
                    </p>
                    <h2>5. Revisi dan Errata</h2>
                    <p>
                        Materi yang muncul di Situs lokersubang.com mungkin
                        mengandung kesalahan teknis, tipografi, atau fotografi.
                        lokersubang.com tidak akan menjanjikan bahwa materi apa
                        pun di Situs Web ini akurat, lengkap, atau terkini.
                        lokersubang.com dapat mengubah materi yang terdapat di
                        Situsnya kapan saja tanpa pemberitahuan. lokersubang.com
                        tidak membuat komitmen apa pun untuk memperbarui materi.
                    </p>
                    <h2>6. Tautan</h2>
                    <p>
                        lokersubang.com belum meninjau semua situs yang tertaut
                        ke Situs Webnya dan tidak bertanggung jawab atas konten
                        dari situs tertaut tersebut. Kehadiran tautan apa pun
                        tidak menyiratkan pengesahan oleh lokersubang.com dari
                        situs tersebut. Penggunaan situs web tertaut apa pun
                        merupakan risiko pengguna sendiri.
                    </p>
                    <h2>7. Modifikasi Persyaratan Penggunaan Situs</h2>
                    <p>
                        lokersubang.com dapat merevisi Ketentuan Penggunaan ini
                        untuk Situs Webnya kapan saja tanpa pemberitahuan
                        sebelumnya. Dengan menggunakan Situs Web ini, Anda
                        setuju untuk terikat dengan versi terbaru dari Syarat
                        dan Ketentuan Penggunaan ini.
                    </p>
                    <h2>8. Privasi Anda</h2>
                    <p>Harap baca Kebijakan Privasi kami.</p>
                    <h2>9. Hukum yang Mengatur</h2>
                    <p>
                        Setiap klaim yang terkait dengan Situs lokersubang.com
                        akan diatur oleh hukum id tanpa memperhatikan
                        pertentangan ketentuan hukumnya.
                    </p>
                </Content>
            </div>
        </div>
    );
};

export default TermOfService;
TermOfService.layout = (page) => <HomeLayout children={page} />;

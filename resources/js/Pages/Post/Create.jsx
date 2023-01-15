import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import Content from "@/Layouts/Content";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function Create() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name] = e.target.value
    //     })
    // }

    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("post.store"), { onSuccess: () => reset() });
    };

    return (
        <div>
            <Content>
                <div className="p-4 bg-white rounded shadow-sm">
                    <div className="container">
                        <h2 className="mt-0">
                            {" "}
                            <i className="fa-solid fa-pencil"></i> Posting
                            Lowongan
                        </h2>
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="judul"
                                            className="form-label font-bold"
                                        >
                                            Judul
                                        </label>
                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            className="form-control rounded border-gray-300"
                                            id="judul"
                                            placeholder="Masukan judul lowongan "
                                        />
                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="deskripsi"
                                            className="form-label font-bold"
                                        >
                                            Deskripsi
                                        </label>
                                        <textarea
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="form-control"
                                            style={{ resize: "none" }}
                                        />
                                        <InputError
                                            message={errors.description}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="konten"
                                            className="form-label font-bold"
                                        >
                                            Konten
                                        </label>
                                        {/* <textarea
                                            value={data.body}
                                            onChange={(e) =>
                                                setData("body", e.target.value)
                                            }
                                        /> */}
                                        <SunEditor
                                            name="body"
                                            as="textarea"
                                            // value={data.body}
                                            onChange={handleChange}
                                            height="320"
                                            // setContents="My contents"
                                            setOptions={{
                                                buttonList: [
                                                    [
                                                        "formatBlock",
                                                        "bold",
                                                        "underline",
                                                        "italic",
                                                        "strike",
                                                        "fontSize",
                                                        "fontColor",
                                                        "hiliteColor",
                                                        "list",
                                                        "align",
                                                        "link",
                                                        "table",
                                                        "image",
                                                        "video",
                                                        "audio",
                                                        "codeView",
                                                    ],
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="kategori"
                                            className="form-label font-bold"
                                        >
                                            Kategori
                                        </label>
                                        <select
                                            className="form-control"
                                            id="kategori"
                                        >
                                            <option value="">-Pilih-</option>
                                            <option value="">CPNS</option>
                                            <option value="">BUMN</option>
                                            <option value="">
                                                Loker Subang
                                            </option>
                                            <option value="">Luar Kota</option>
                                            <option value="">Tutorial</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="perusahaan"
                                            className="form-label font-bold"
                                        >
                                            Nama Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded border-gray-300"
                                            id="persusahaan"
                                            placeholder="Nama Perusahaan"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="alamat"
                                            className="form-label font-bold"
                                        >
                                            Alamat Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control rounded border-gray-300"
                                            id="alamat"
                                            placeholder="Alamat Perusahaan"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="gambar"
                                            className="font-bold"
                                        >
                                            Gambar
                                        </label>
                                        <input
                                            as="button"
                                            id=""
                                            className="form-control p-1 rounded border-2 border-grey-300"
                                            type="file"
                                            onChange={handleChange}
                                        />
                                        <img
                                            src={file ?? "/img/default.png"}
                                            alt="Image_Photo"
                                            className="shadow-sm mt-3 rounded p-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <PrimaryButton
                                className="mt-4"
                                processing={processing}
                            >
                                Save
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </Content>
        </div>
    );
}

Create.layout = (page) => <AdminLayout children={page} />;

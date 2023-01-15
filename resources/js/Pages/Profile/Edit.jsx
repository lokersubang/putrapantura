import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/inertia-react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Edit({ auth, mustVerifyEmail, status, children }) {
    return (
        <>
            <Head title="Profile" />
            <div className="p-4 bg-white rounded shadow-sm">
                <div className="p-4 mb-4 bg-light">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>

                <div className="p-4 mb-4 bg-light">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>

                <div className="p-4 mb-4 bg-light">
                    <DeleteUserForm className="max-w-xl" />
                </div>
            </div>
        </>
    );
}

Edit.layout = (page) => <AdminLayout children={page} />;

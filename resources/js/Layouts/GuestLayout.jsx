import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import Content from "./Content";

export default function Guest({ children }) {
    return (
        <div className="prose max-w-none min-h-full flex flex-col sm:justify-center items-center mt-4  pt-6 sm:pt-0">
            <div>
                <h1 className="mb-0 text-slate-900">Login</h1>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}

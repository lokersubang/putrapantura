import React from "react";

export default function AuthLayout({ children }) {
    return (
        <div>
            <main className="form-signin w-100 m-auto">{children}</main>
        </div>
    );
}

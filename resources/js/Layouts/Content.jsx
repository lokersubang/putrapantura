import React, { useEffect } from "react";

export default function Content({ children }) {
    return (
        <div>
            <article className="prose prose-base prose-gray max-w-none leading-normal">
                {children}
            </article>
        </div>
    );
}

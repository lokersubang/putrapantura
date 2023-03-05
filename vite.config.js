import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            ssr: "resources/js/ssr.jsx",
            refresh: true,
        }),
        react(),
    ],
    ssr: {
<<<<<<< HEAD
        noExternal: ["@inertiajs/server"],
=======
        noExternal: ['laravel-vite-plugin','@inertiajs/server'],
>>>>>>> 3adefcc (Hapus vite Config)
    },
});

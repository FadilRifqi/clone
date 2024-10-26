import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    build: {
        rollupOptions: {
            input: {
                app: "resources/js/app.js",
            },
        },
    },
});

const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
export function resolvePageComponent(name) {
    return pages[`./Pages/${name}.jsx`];
}

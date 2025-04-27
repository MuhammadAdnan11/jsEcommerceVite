import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                main:resolve(__dirname, "index.html"),// your main
                addToCart:resolve(__dirname,"addToCart.html"),
            },
        },
    },
})
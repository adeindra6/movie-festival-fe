import { createWebHistory, createRouter } from "vue-router"

// Home Page
import Home from "../components/Home.vue"

// Analytics Page
import Analytics from "../components/Analytics.vue"

const routes = [
    // Home Page
    {
        path: "/",
        name: "Movie Festival",
        component: Home,
        props: true,
    },
    // Analytics Page
    {
        path: "/analytics",
        name: "Movie Analytics",
        component: Analytics,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
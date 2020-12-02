import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home"
import Login from "../views/Login"
import Register from "../views/Register"
import Search from "../views/Search"

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
        {
            path: "/search",
            component: Search
        },
    ]
})
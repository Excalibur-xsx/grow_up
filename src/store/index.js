import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

//存储状态数据的容器
const state = {
    // countData: 0,
};

//存储只读的计算属性容器
const getters = {};

//间接修改state的函数对象
const actions = {};

//直接修改state的函数对象
const mutations = {};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules, //其他vuex模块的数据
    // modules: {
    //     home: {     //home的vuex数据
    //         state: {},
    //         getters: {},
    //         actions: {},
    //         mutations: {},
    //     },
    //     login: {    //login的vuex数据
    //         state: {},
    //         getters: {},
    //         actions: {},
    //         mutations: {},
    //     }
    // }
})
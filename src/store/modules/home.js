import { reqGetBaseCategoryList } from "@api/home";

//home 的vuex状态数据
export default {
    state: {
        categoryList: [],//首页三级列表数据
    },
    getters: {},
    actions: {
        //获取首页三级列表数据
        async getCategoryList({ commit }) {
            //请求数据
            const categoryList = await reqGetBaseCategoryList();
            //触发 mutations 更新数据
            commit("GET_CATEGORY_LIST", categoryList);
        }
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList;
        }
    },
}
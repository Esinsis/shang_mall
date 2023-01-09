import { getSearchList } from "@/api";

export default {
    namespaced: true,
    state: {
        searchList: {}
    },
    actions: {
        async getSearchList(context, params = {}) {
            let result = await getSearchList(params);
            if (result.code === 200) {
                context.commit("GET_SEARCH_LIST", result.data)
            }
        }
    },
    mutations: {
        GET_SEARCH_LIST(state, searchList) {
            state.searchList = searchList;
        }
    },
    getters: {
        goodsList(state) {
            return state.searchList.goodsList || []
        },
        attrsList(state) {
            return state.searchList.attrsList || []
        },
        trademarkList(state) {
            return state.searchList.trademarkList || []
        }
    }
}
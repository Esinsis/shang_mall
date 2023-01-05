import {getBannerList, getCategories, getFloorList} from "@/api";

const state = {
    categories: [],
    banners: [],
    floors: []
}

const actions = {
    async getCategories({commit}){
        let result = await getCategories();
        if (result.code === 200){
            commit('GET_CATEGORIES', result.data)
        }
    },
    async getBannerList({commit}){
        let result = await getBannerList();
        if (result.code === 200){
            commit('GET_BANNERS', result.data)
        }
    },
    async getFloorList({commit}){
        let result = await getFloorList();
        if (result.code === 200) {
            commit('GET_FLOORS', result.data);
        }
    }
}

const mutations = {
    GET_CATEGORIES(state, categories){
        state.categories = categories
    },
    GET_BANNERS(state, banners){
        state.banners = banners
    },
    GET_FLOORS(state, floors){
        state.floors = floors
    }
}

const getters = {}

export default {
    namespaced: true,
    state, actions, mutations, getters
}
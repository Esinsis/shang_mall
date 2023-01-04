import {getCategories} from "@/api";

const state = {
    categories: []
}

const actions = {
    async getCategories({commit}){
        let result = await getCategories();
        if (result.code === 200){
            commit('GET_CATEGORIES', result.data)
        }
    }
}

const mutations = {
    GET_CATEGORIES(state, categories){
        state.categories = categories
    }
}

const getters = {}

export default {
    namespaced: true,
    state, actions, mutations, getters
}
import { cartList, checkCart, deleteCartById } from "@/api";

const state = {
    cartList: []
}

const actions = {
    async cartList({ commit }) {
        let result = await cartList();
        if (result.code == 200) {
            commit("CART_LIST", result.data);
        }
    },
    async checkCart({commit}, {skuId, isChecked}){
        let result = await checkCart(skuId, isChecked);
        if(result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error('Failed'));
        }
    },
    async deleteCart({commit}, skuId){
        let result = await deleteCartById(skuId);
        if(result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error('Failed'));
        }
    },
    async deleteAllSelectedCart({state, dispatch}){
        let result = [];
        state.cartList[0].cartInfoList.forEach(item => {
            if(item.isChecked == 1){
                result.push(dispatch('deleteCart', item.skuId));
            }
        });
        return Promise.all(result);
    },
    async changeAllChecked({state, dispatch}, isChecked){
        let result = [];
        state.cartList[0].cartInfoList.forEach(item => {
            result.push(dispatch('checkCart', {skuId: item.skuId, isChecked}));
        })
        return Promise.all(result);
    }
}

const mutations = {
    CART_LIST(state, cartList) {
        state.cartList = cartList;
    }
}

const getters = {
    cartList(state){
        return state.cartList[0] || {};
    }
}

export default {
    namespaced: true,
    state, actions, mutations, getters
}
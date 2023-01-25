import Vue from 'vue';
import Vuex from 'vuex';
import search from "@/store/search";
import home from "@/store/home";
import detail from '@/store/detail';
import shopcart from './shopcart';
import user from './user';
import trade from './trade';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})
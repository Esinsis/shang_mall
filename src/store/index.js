import Vue from 'vue'
import Vuex from 'vuex'
import search from "@/store/search";
import home from "@/store/home";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home, search
    }
})
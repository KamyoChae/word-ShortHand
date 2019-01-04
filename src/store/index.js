import Vue from 'vue'
import Vuex from 'vuex' 
// import state from './store_components/state'
// import actions from './store_components/actions'
// import mutations from './store_components/mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        showModel:false,
        str:"",
        wantCreateWord: false,
    },  
    actions:{
        changeModel(ctx, str){
            ctx.commit("changeModel", str)
        },
        initModel(ctx){
            ctx.commit("initModel")
        },
        closeModel(ctx){
            ctx.commit("closeModel")
        },
        createWord(ctx,str){
            ctx.commit("createWord",str)
        }
    },
    mutations:{
        changeModel(state, str){
            state.showModel = true
            state.str = str
        },
        initModel(state){
            // 初始化数据 全部默认
            state.showModel = false
            state.str = ""
            state.wantCreateWord = false
        },
        closeModel(state){
            state.showModel = false
        },
        createWord(state,str){
            state.str = str
            state.showModel = true
            state.wantCreateWord = true
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex' 
// import state from './store_components/state'
// import actions from './store_components/actions'
// import mutations from './store_components/mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        showModel:false, // 是否显示模态框
        str:"", // 字符串
        wantCreateWord: false, // 是否想创建词汇
        wordStr:"", // 输入的字符串
        struct:null, // 数据结构
        structItem:null, // 渲染存储对象
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
        },
        getWord(ctx, str){
            ctx.commit("getWord", str)
        },
        createdStruct(ctx, struct){
            ctx.commit("createdStruct", struct)
        },

        checkState(ctx, index){
            // 这里选择上一个 ok 下一个 点击事件
            console.log("checkState:::"+index)
            ctx.commit("_createStructItem", index)
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
            // state.wordStr = "" // 这里会进行一个本地存储的读取作为初始化
        },
        closeModel(state){
            state.showModel = false
        },
        createWord(state,str){
            state.str = str
            state.showModel = true
            state.wantCreateWord = true


        },
        getWord(state, str){
            state.wordStr = str
        },

        createdStruct(state, struct){
            state.struct = struct
            console.log("触发了createStrus")
            this.commit("_createStructItem", 1)
        },
        _createStructItem(state, index){

            
            console.log(index)
            state.structItem = state.struct[index]
            console.log(state.struct[index])
        }
    }
})
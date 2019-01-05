import Vue from 'vue'
import Vuex from 'vuex' 
import state from './store_components/state'
// import actions from './store_components/actions'
// import mutations from './store_components/mutation'
Vue.use(Vuex)

export default new Vuex.Store({
    state, // 数据结构
 
    actions:{
        changeModel(ctx, str){
            ctx.commit("changeModel", str)
        },
        pingModel(ctx){
            ctx.commit("pingModel")
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
        },
        clickOk(ctx, index){
            ctx.commit("clickOk", index)
            ctx.commit("loseFace", "clear")
        },
        clickNext(ctx){
            ctx.commit("loseFace", "clear")
        },
        submitErr(ctx, index){
            ctx.commit("submitErr", index)
        },
        clearTimer(ctx){
            ctx.commit("clearTimer")
        },
        resultFinish(ctx){
            ctx.commit("resultFinish")
        },
        getTimeNum(ctx, num){
            ctx.commit("getTimeNum", num)
        },
        resultFinish(ctx){
            ctx.commit("clearTimer")
        }, 
    },
    mutations:{
        changeModel(state, str){
            state.showModel = true
            state.str = str
        },
        pingModel(state){
            state.pingModel = true
            state.showModel = false
        },
        initModel(state){
            console.log("initModel")
            // 初始化数据 全部默认
            state.showModel = false
            state.pingModel = false
            state.str = ""
            state.wantCreateWord = false
            state.result = false
            state.timeNum = 0
            // state.wordStr = "" // 这里会进行一个本地存储的读取作为初始化

            // 加载题库 开始计时
            let init = "init"
            
            let hash = location.hash
            if(hash == "#/vocabu"){ 
                this.commit("loseFace", init)
            }
            
            if(hash == "#/result"){
                console.log(hash)
                this.result = true 
                clearInterval(state.timer)
            }

        },
        setTimer(state){
            console.log("计算走神")
            state.timer = setInterval(() => {
                state.timeCount ++ 
                console.log(state.timeCount)
                if(state.timeCount == 3){
                    // 走神一次
                    var index = state.structItem.index
                    state.struct[index]["lose"] = state.struct[index].lose + 1
                    state.timeAllLose ++ // 总计走神
                    state.structItem = state.struct[index]
                    state.timeCount = 0
                }
            }, 1000);
        },
        loseFace(state, init){
            

            if(init == "init"){
                this.commit("setTimer", state)
            }
            if(init == "clear"){
                clearInterval(state.timer)
                this.commit("setTimer")
            }
        },
        clearTimer(state){
            clearInterval(state.timer) 
            console.log("clearTimer")
            state.showTimeLong = state.timeNum
        },
        closeModel(state){
            console.log("隐藏")
            state.showModel = false
            state.pingModel = false
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
            if(struct.length != 0){ 
                state.struct = struct 
                // console.log("触发了createStrus>>>>>>>>>>>" + struct) 
                this.commit("_createStructItem", 0)
            }
            
        },
        _createStructItem(state, index){
            
            state.structItem = state.struct[index]
            console.log(state.struct[index])
        },
        clickOk(state, index){ 
            state.struct[index]["isOK"] = state.struct[index].isOK + 1 
            state.clickOk ++
            // console.log(state.struct[index]["isOK"])
            state.structItem = state.struct[index]
        },
        submitErr(state, index){

            state.inputErr ++
            state.struct[index]["inputError"] = state.struct[index].inputError + 1 
            // console.log(state.struct[index]["isOK"])
            state.structItem = state.struct[index]
        },
        resultFinish(state){
            state.result = true
        },
        getTimeNum(state, num){
            state.timeNum = num
        },

    }
})
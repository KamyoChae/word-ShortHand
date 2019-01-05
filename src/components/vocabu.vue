<template>
    <div class="wrap">
        <ShowModel/>
        <PingModel/>
        <IndexTitle/>
        <VocaVo :word="word" :des="des"/>
        <VoPing/>
        <VoCount/>
        <VoLine :index = "index" :length = "length"/>
        <VoState :index = "index" :length = "length"/>
        <VoTime :time = "timeNum" />
    </div>

</template>

<script>
import IndexTitle from "./titleComp/title"
import VocaVo from "./voComp/VocaVo"
import VoPing from "./voComp/VoPing"
import VoCount from "./voComp/VoCount"
import VoLine from "./voComp/VoLine"
import VoState from "./voComp/VoState"
import VoTime from "./voComp/VoTime"

import ShowModel from "./showComp/ShowModel"
import PingModel from "./showComp/PingModel"

export default {
    name:"vocabu",
    data(){
        return{
            timeNum:1,
            timer:null,
            index:0,
            length:0,
            word:"",
            des:""
        }
    },
    components:{
        ShowModel,
        PingModel,
        IndexTitle,
        VocaVo,
        VoPing,
        VoCount,
        VoLine,
        VoState,
        VoTime
    },
    methods: {
        timing(){
            this.timer = setInterval(()=>{
                this.timeNum++ 
            }, 1000)
        },

        createDataStruct(arr){
            let newArr = []
            arr.forEach((element, index) => {
                if(element !== ""){
                    let newObj = {
                        "inputError":0,
                        "isOK":0,
                        "lose":0,
                    }
                    let word = element.split("：")[0]
                    let des = element.split("：")[1]
                    newObj["word"] = word
                    newObj["des"] = des  
                    newObj["index"] = index  
                    newArr.push(newObj) 
                }
            });
            console.log(newArr)
            return newArr
        }
    },
    mounted() {

        console.log("star timer")
        this.$store.dispatch("initModel")
        this.timing()

        console.log("vacabu mounted-structItem:" , this.$store.state.structItem)
        try {
            this.index = this.$store.state.structItem.index
            this.length = this.$store.state.struct.length
            this.word = this.$store.state.structItem.word
            this.des = this.$store.state.structItem.des
        } catch (error) {
            
        }

        console.log(this.index, this.length)
    },
    destroyed() {
        clearInterval(this.timer)
    },
    beforeMount() {
        console.log("beforeMount")
        try {
            let str = this.$store.state.wordStr
            console.log("输入框的字符串已提出")
            var arr = str.split("。") 
        } catch (error) { 
        }
        
        let Struct = this.createDataStruct(arr) 
        this.$store.dispatch("createdStruct", Struct)
         
    },
    updated() {
        console.log("update")
        try {
            this.index = this.$store.state.structItem.index
            this.length = this.$store.state.struct.length
            this.word = this.$store.state.structItem.word
            this.des = this.$store.state.structItem.des
        } catch (error) {
            
        }
    },
  

}
</script>


<style lang="stylus" scoped>

@import "../assets/css/util.styl"
.wrap
    height 100vh
    overflow hidden
</style>


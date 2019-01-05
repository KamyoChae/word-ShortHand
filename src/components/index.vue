<template>
    <div class="wrapper">
        <ShowModel/>
        <index-title></index-title>
        <div class="index-body">
            <input type="text" name="" id="" placeholder="请粘贴..." v-model="wordStr">

            <div class="btn-group"> 
                
                <button class="btn" @click = "createWord">生成词汇</button>
                <router-link to="/vocabu">
                    <button class="btn">马上开始</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ShowModel from "./showComp/ShowModel"
import IndexTitle from "./titleComp/title"
export default {
    name:"index",
    data(){
        return{
            wordStr:""
        }
    },
    components:{
        IndexTitle,
        ShowModel
    },
 
    methods: {
        createWord(){
            this.$store.dispatch("createWord","确定生成词汇吗？")
            this.$store.dispatch("getWord", this.wordStr)
        }
    },
    mounted() { 
        this.$store.dispatch("initModel")
    },
}
</script>

<style lang="stylus" scoped>
    
@import "../assets/css/util.styl"

.index-body
    display flex
    flex-direction column
    padding 20px 
    height 50vh
    input 
        margin 3em 0
        padding .8em .5em
        border 1px solid $mainColor
        border-radius $radius
    .btn-group
        text-align center
    .btn-group button 
        width 60%
        padding .8em .5em
        margin .5em 0
        font-weight 600
        $button()
        
</style>
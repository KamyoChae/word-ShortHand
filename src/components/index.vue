<template>
    <div class="wrapper">
        <index-title></index-title>
        <div class="index-body">
            <input type="text" name="" id="" placeholder="请粘贴...">

            <div class="btn-group"> 
                
                <button class="btn">生成词汇</button>
                <router-link to="/vocabu">
                <button class="btn">马上开始</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import IndexTitle from "./titleComp/title"
export default {
    name:"index",
    components:{
        IndexTitle
    }
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
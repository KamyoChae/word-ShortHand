<template>
    <div class="wrapper">
       <span  @click="goIndex">单词速记神器</span>
        
    </div>
</template>

<script>
export default {
    name:"IndexTitle",
    methods: {
        goIndex(){
            this.$store.dispatch("changeModel","确定返回首页吗？")
        }
    },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl";
.wrapper
    width 100vw
    height 6.25vh
    box-sizing border-box
    padding 1.2em 1.5em
    background $mainColor
    span 
        color #fff

</style>

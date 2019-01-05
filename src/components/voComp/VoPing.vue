<template>
    <div class="wrapper">
        <button @click = "ping">试试拼写</button>
    </div>
</template>

<script>
export default {
    name:"VoPing",
    methods: {
        ping(){
            this.$store.dispatch("pingModel")
            this.$store.dispatch("clearTimer") // 取消走神计时
        }
    },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl"
.wrapper
    box-sizing border-box
    height 12vh
    $botmSol()
    text-align center
    $center()
    button
        width 60%
        height 3em 
        padding .6em 
        background #ffffff
        border 1px solid $mainColor
        color $mainColor
        font-weight  600
        border-radius $radius
</style>

<template>
    <div class="wrapper">
        <button @click = "again">不服？再来！</button>
    </div>
</template>

<script>
export default {
    name:"ResBtn",
    data(){
        return{}
    },
    methods: {
        again(){
            this.$store.dispatch("changeModel","确定再来一遍吗？")
        }
    },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl"
.wrapper
    box-sizing border-box
    height 12vh 
    text-align center
    $center()
    button
        width 60%
        height 3em 
        padding .6em 
        background $mainColor
        color #fff
        font-weight  600
        border-radius $radius
</style>

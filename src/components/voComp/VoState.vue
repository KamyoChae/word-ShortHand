<template>
    <div class="wrapper">
        <button>上一个</button>
        <button>OK</button>
        <button>下一个</button>
    </div>
</template>

<script>
export default {
    name:"VoState"
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl"
.wrapper
    box-sizing border-box
    height 12vh
    $botmSol() 
    $center()
    button
        width 20%
        margin 0 .3em
        height 3em 
        padding .6em 
        background #ffffff
        border 1px solid $mainColor
        color $mainColor
        font-weight  600
        border-radius $radius
</style>

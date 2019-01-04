<template>
    <div class="wrapper">
        <span>当前进度</span>
        <div>10 / 99</div>
    </div>
</template>

<script>
export default {
    name:"VoLine"
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl";

.wrapper
    box-sizing border-box
    height 15vh
    $botmSol()    
    text-align center
    padding 1.5em 0
    span 
        font-size .9em
        color $secBlack
    div
        font-size 2.8em
        margin-top .4em
        font-weight 600
        color $mainColor
</style>


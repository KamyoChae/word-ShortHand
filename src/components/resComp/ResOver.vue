<template>
    <div class="wrapper"> 
        <div class="vocabu-zh">
            速记结束!
        </div>  
    </div>
</template>

<script>
export default {
    name:"ResOver"
}
</script>
<style lang="stylus" scoped>
@import "../../assets/css/util.styl";
.wrapper
    box-sizing border-box
    width 100%
    min-height 23.75vh 
    padding 1em
    $botmSol() 
    $center()
    font-size 12vw
    font-weight 600
    color $mainColor
</style>


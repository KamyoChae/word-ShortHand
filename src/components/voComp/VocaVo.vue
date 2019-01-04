<template>
    <div class="wrapper">
        <div class="vocabu-en">
            vocabulary vocabulary vocabulary
        </div>
        <div class="vocabu-zh">
            词汇
        </div>  
    </div>
</template>

<script>
export default {
    name:"VocaVo"
}
</script>
<style lang="stylus" scoped>
@import "../../assets/css/util.styl";
.wrapper
    box-sizing border-box
    width 100%
    min-height 20vh 
    padding 1em
    $botmSol()
    div
        font-size 2em
        margin .5em 0 
        color $Black
    .vocabu-zh
        color $secBlack
</style>


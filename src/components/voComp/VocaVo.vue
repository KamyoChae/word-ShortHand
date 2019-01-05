<template>
    <div class="wrapper">
        <div class="vocabu-en">
            {{this.$store.state.structItem.word}}
        </div>
        <div class="vocabu-zh">
            {{this.$store.state.structItem.des}}
        </div>  
    </div>
</template>

<script>
export default {
    name:"VocaVo", 
    data(){
        return{ 
        }
    },

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
    div
        font-size 2em
        margin .5em 0 
        color $Black
    .vocabu-zh
        color $secBlack
</style>


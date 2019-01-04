<template>
    <div class="wrapper">
        {{time}}s
    </div>
</template>

<script>
export default {
    name:"VoTime",
    props:["time"],

}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl"
.wrapper
    box-sizing border-box 
    text-align center
    $center()
    background $mainColor
    color #fff 
    height 6vh
    font-weight 600
    font-size 1.3em

</style>

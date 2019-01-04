<template>
    <div class="wrapper">
        <button @click = "pre">上一个</button>
        <button @click = "ok">OK</button>
        <button @click = "next">下一个</button>
    </div>
</template>

<script>
export default {
    name:"VoState", 
    props:["index", "length"],
    data(){
        return{

        }
    },
    mounted() {
        console.log(this.index, this.length)
    },

    methods: {
        pre(){
            var index = this.index
            console.log(index)
            if(index !== 0){
                let num = index-- 
               this.$store.dispatch("checkState", num)
            }

        },
        ok(){},
        next(){
            var index = this.index
            var len = this.length
            console.log(index)
            if(index !== len -1){
                let num = index++ 
               this.$store.dispatch("checkState", num)
            }

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

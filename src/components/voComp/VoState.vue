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
            mapIndex:0,
            mapLength:0,
            flag:true
        }
    },
    mounted() {
        console.log(this.index, this.length)
    },

    methods: {
        pre(){
            if(this.flag){ 
                this.mapIndex = this.index
                this.mapLength = this.length  
                this.flag = false
            }

            this.mapIndex --
            // console.log("outpre::::::::::::"+this.mapIndex , this.mapLength)
            if(this.mapIndex >= 0){
                // console.log("inpre::::::::::::"+this.mapIndex , this.mapLength)
                var num = this.mapIndex  
                this.$store.dispatch("checkState", num)
            }else{
                this.mapIndex = 0
            }

        },
        ok(){
            console.log("click OK")

            this.$store.dispatch("clickOk", this.mapIndex)
        },
        next(){
            if(this.flag){ 
                this.mapIndex = this.index
                this.mapLength = this.length  
                this.flag = false
            }
             
            this.mapIndex ++  
            
            this.$store.dispatch("clickNext") // 取消走神计时
            // console.log("outnext::::::::::::"+this.mapIndex , this.mapLength)
            if(this.mapIndex <= this.mapLength-1){ 
                //  console.log("innext::::::::::::"+this.mapIndex , this.mapLength)
                var num = this.mapIndex 
                   
               this.$store.dispatch("checkState", num)
            }else{
                this.mapIndex = this.mapLength-1
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

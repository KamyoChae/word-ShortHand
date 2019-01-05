<template>
    <div class="wrapper">
        {{timeNum}}s
    </div>
</template>

<script>
export default {
    name:"VoTime",
    props:["time"],
    data(){
        return {
            timer:null,
            timeNum:1
        }
    },
    methods: {
        timing(){
            this.timer = setInterval(()=>{
                this.timeNum++ 
                this.$store.dispatch("getTimeNum", this.timeNum)
            }, 1000)
        },
    },
    mounted() {
        this.timing()
    },

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

<template>
    <div class="wrapper" v-show="this.$store.state.showModel">
        <div class="show">
            <span>{{this.$store.state.str}}</span>
            <div class="btn">
                <button class="yes" @click = "toCreatedWord" v-if="this.$store.state.wantCreateWord">是</button>
                <button class="yes" @click = "goToIndex" v-else>是</button>
                <button class="no" @click = "closeModel">否</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"goIndex",
    data(){
        return { 
        }
    },
    methods: {
        closeModel(){
            console.log(11)
            this.$store.dispatch("closeModel") 
        },
        goToIndex(){
            this.$router.push("/")
        },
        toCreatedWord(){
            // 创建词库

            this.$router.push("/vocabu")
        }

    },

}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl";
.wrapper
    position absolute
    z-index 99
    width 100vw
    height 100vh
    background rgba(0,0,0,0.7)
    $center()
    .show
        box-sizing border-box
        padding 2em 0
        width 70%
        height 0
        padding-bottom 40%
        border-radius $radius
        background #ffffff 
        text-align center 
        font-size 1.5em
        .btn
            width 100% 
            margin-top 20%
            button  
                width 30%
                height 2em
                margin 0 .8em 
                background $mainColor 
                color #fff
                font-weight  600
                border-radius $radius
            .no
                background $error

</style>

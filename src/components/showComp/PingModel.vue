<template>
    <div class="wrapper" v-show="this.$store.state.pingModel">
        <div class="tips" v-show="this.tips">
            <div class="error" v-show="this.tipsErr">
                <span>拼错了！！</span>
           
            </div>
            <div class="success" v-show="this.tipsSucc">
                <span>真棒！夸你！</span> 
            </div>
        </div>
        <div class="show" v-show="this.subShow">
            <textarea name="" id="" cols="30" rows="10" maxlength="50" v-model="val"></textarea>
            <div class="btn"> 
                <button class="submit" @click = "checkSubmit">提交</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"PingModel",
    data(){
        return { 
            val:"",
            tipsErr:false,
            tipsSucc:false,
            tips:false,
            subShow:true
        }
    },
    methods: { 
        closeModel(){},
        checkSubmit(){
            var value = this.$store.state.structItem.word
            var index = this.$store.state.structItem.index
            console.log(value)
            if(value == this.val){
                console.log("拼对了")
                this.subShow = false
                this.tips = true
                this.tipsSucc = true
                this.timeHidden()
                

                let timer = setTimeout(() => {
                    this.$store.dispatch("closeModel") 
                    clearTimeout(timer)
                }, 800);
            }else{
                console.log("拼错了")
                this.$store.dispatch("submitErr", index)

                this.subShow = false
                this.tips = true
                this.tipsErr = true
                this.timeHidden()
            }
        },

        timeHidden(){
            let timer = setTimeout(() => {
                // dosome
                this.subShow = true
                this.tipsErr = false
                this.tipsSucc = false
                this.tips = false
                clearTimeout(timer)
            }, 800);
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
    .show, .tips
        position relative
        $showModel() 
        .success, .error
            text-align center 
            width 100%
            height 100%
            span
                position absolute
                height 1.5em 
                margin auto 
                top 0
                bottom 0
                left 0
                right 0     
            
        textarea 
            box-sizing border-box
            position absolute
            left 0
            top 1em
            width calc(100% - 1em)
            margin auto 
            right 0 
            height 50%
            background #eee
            padding 0 .5em
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
            .submit
                position absolute
                left 0
                bottom 1em 
                margin auto 
                right 0  
</style>

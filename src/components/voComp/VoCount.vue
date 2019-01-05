<template>
    <div class="wrapper">
        <div class="count">
            <div class="items " v-show="!result">
                <div class="count-item">
                    <span class="text">拼错次数</span>
                    <span class="num error">{{this.$store.state.structItem.inputError}}</span>
                </div>
                <div class="count-item">
                    <span class="text">放心次数</span>
                    <span class="num success">{{this.$store.state.structItem.isOK}}</span>
                </div>
                <div class="count-item">
                    <span class="text">走神次数</span>
                    <div>
                        <span class="num danger">{{this.$store.state.structItem.lose}}</span>
                    </div>
                </div>
            </div>
            
            <div class="items" v-show="result">
                <div class="count-item">
                    <span class="text">消耗时间</span>
                    <div> 
                        <span class="num error">{{this.$store.state.showTimeLong}}</span>
                        <span class="text">秒</span>
                    </div>
                </div>
                <div class="count-item">
                    <span class="text">记忆单词</span>
                    <div>
                        <span class="num success">{{this.$store.state.struct.length}}</span>
                        <span class="text">个</span>
                    </div>
                </div>
              
                <div class="count-item">
                    
                    <span class="text">拼错次数</span>
                    <div> 
                        <span class="num error">{{this.$store.state.structItem.inputError}}</span>
                        <span class="text">次</span>
                    </div>
                </div>
                <div class="count-item">
                    <span class="text">放心次数</span>
                    <div>
                        <span class="num success">{{this.$store.state.structItem.isOK}}</span>
                        <span class="text">次</span>
                    </div>
                    
                </div>
                <div class="count-item">
                    <span class="text">走神次数</span>
                    <div>
                        <span class="num danger">{{this.$store.state.structItem.lose}}</span>
                        <span class="text">次</span>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name:"VoCount",
    data(){
        return{
            result:false,
        }
    }, 
    mounted() {
        this.$store.state.structItem.isOK = 0
        console.log(this.$store.state.structItem)
        this.result = this.$store.state.result

        console.log(location.hash)
        let hash = location.hash
        if(hash == "#/result"){
            this.result = true
            this.$store.dispatch("clearTimer")
        }

    },
    
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl";

.wrapper
    box-sizing border-box
    min-height 25vh
    $botmSol()   
    padding 1em
    $center()
    .count
        width 100%
        height 100%
        $center()
        .items
            width 100%  
            align-content space-around
            .count-item 
                display flex 
                justify-content space-around
                line-height 2.5em
                color $secBlack
                span, div  
                    width 50%
                    text-align center
                .num
                    font-size 2em
                    font-style oblique 
                .danger
                    color #ffc300 
                .error
                    color #e52828
                .success
                    color #2fc830
        
</style>


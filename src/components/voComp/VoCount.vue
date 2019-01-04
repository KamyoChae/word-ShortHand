<template>
    <div class="wrapper">
        <div class="count">
            <div class="items">
                <div class="count-item">
                    <span class="text">拼错次数</span>
                    <span class="num error">5</span>
                </div>
                <div class="count-item">
                    <span class="text">放心次数</span>
                    <span class="num success">5</span>
                </div>
                <div class="count-item">
                    <span class="text">健忘次数</span>
                    <div>
                        <span class="num danger">5</span>
                    </div>
                </div>
            </div>
            
            <div class="items" style="display:none">
                <div class="count-item">
                    <span class="text">消耗时间</span>
                    <div> 
                        <span class="num error">5</span>
                        <span class="text">秒</span>
                    </div>
                </div>
                <div class="count-item">
                    <span class="text">记忆单词</span>
                    <div>
                        <span class="num success">5</span>
                        <span class="text">个</span>
                    </div>
                </div>
                <div class="count-item">
                    <span class="text">拼错单词</span>
                    <div>
                        <span class="num danger">5</span>
                        <span class="text">个</span>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    name:"VoCount"
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/util.styl";

.wrapper
    box-sizing border-box
    height 25vh
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


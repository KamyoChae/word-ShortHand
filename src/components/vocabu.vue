<template>
    <div class="wrap">
        <ShowModel/>
        <IndexTitle/>
        <VocaVo/>
        <VoPing/>
        <VoCount/>
        <VoLine/>
        <VoState/>
        <VoTime/>
    </div>

</template>

<script>
import IndexTitle from "./titleComp/title"
import VocaVo from "./voComp/VocaVo"
import VoPing from "./voComp/VoPing"
import VoCount from "./voComp/VoCount"
import VoLine from "./voComp/VoLine"
import VoState from "./voComp/VoState"
import VoTime from "./voComp/VoTime"

import ShowModel from "./showComp/ShowModel"
export default {
    name:"vocabu",
    components:{
        ShowModel,
        IndexTitle,
        VocaVo,
        VoPing,
        VoCount,
        VoLine,
        VoState,
        VoTime
    },
    mounted() {

        console.log("装载："+this.$store.state.showModel)
        this.$store.dispatch("initModel")

        
    },

}
</script>


<style lang="stylus" scoped>

@import "../assets/css/util.styl"
.wrap
    height 100vh
    overflow hidden
</style>


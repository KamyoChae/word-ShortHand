<template>
    <div class="wrap">
        <ShowModel/>
        <IndexTitle/> 
        <ResOver/>
        <VoCount/>   
        
        <ResBtn/>

    </div>

</template>

<script>
import IndexTitle from "./titleComp/title" 
import ResBtn from "./resComp/ResBtn"
import VoCount from "./voComp/VoCount"  
import ResOver from "./resComp/ResOver" 

import ShowModel from "./showComp/ShowModel" 
export default {
    name:"result",
    components:{
        ShowModel,
        IndexTitle, 
        ResOver, 
        VoCount, 
        ResBtn,
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


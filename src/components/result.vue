<template>
    <div class="wrap">
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
export default {
    name:"result",
    components:{
        IndexTitle, 
        ResOver, 
        VoCount, 
        ResBtn,
    }
}
</script>


<style lang="stylus" scoped>

@import "../assets/css/util.styl"
.wrap
    height 100vh
    overflow hidden
</style>


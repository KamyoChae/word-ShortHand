<template>
    <div>
        <IndexTitle/>
        <VocaVo/>
    </div>

</template>

<script>
import IndexTitle from "./titleComp/title"
import VocaVo from "./voComp/VocaVo"
export default {
    name:"vocabu",
    components:{
        IndexTitle,
        VocaVo,
    }
}
</script>


<style lang="stylus" scoped>

@import "../assets/css/util.styl"


</style>


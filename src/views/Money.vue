
<template>
    <Layout class-prefix="layout">
        <NumberPad />
        <Types />
        <Notes />
        <Tags />  
    </Layout>   
</template>

<script lang="ts">
import Tags from "@/components/Money1/Tags.vue";
import Notes from "@/components/Money1/Notes.vue";
import Types from "@/components/Money1/Types.vue";
import NumberPad from "@/components/Money1/NumberPads.vue";


export default {
  components: {Tags,Notes,Types,NumberPad},
    name:'Money',   
        
}
</script>

<style lang="scss" >
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
  }
</style>
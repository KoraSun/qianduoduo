
<template>
   
    <Layout class-prefix="layout">
         {{record}}
        <NumberPad @update:value="onUpdateAmount" />
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/> 
        <Types @update:value="onUpdateType"/> 
    </Layout>   
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator'
import Tags from "@/components/Money1/Tags.vue";
import Notes from "@/components/Money1/Notes.vue";
import Types from "@/components/Money1/Types.vue";
import NumberPad from "@/components/Money1/NumberPads.vue";

type Record={
    tags:string[];
    notes:string;
    type:string;
    amount:number;
}

@Component({
     components: {Tags,Notes,Types,NumberPad},
})
export default class Money extends Vue{
  tags=['三餐','零食','衣服','交通','学习','住房','美妆','医疗','运动',];
  record: Record={
      tags:[],notes:'',type:'-',amount:0
  };
  onUpdateTags(value:string[]){
     this.record.tags=value
  }
  onUpdateNotes(value:string){
     this.record.notes=value
  }
  onUpdateType(value:string){
      this.record.type=value
  }
  onUpdateAmount(value:string){
      this.record.amount=parseFloat(value)
  }
 
     
}
</script>

<style lang="scss" >
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
  }
</style>

<template>
    <Layout class-prefix="layout"> 
        {{recordList}}
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/> 
        <Types :value.sync="record.type" /> 
    </Layout>   
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Watch} from 'vue-property-decorator'
import Tags from "@/components/Money1/Tags.vue";
import Notes from "@/components/Money1/Notes.vue";
import Types from "@/components/Money1/Types.vue";
import NumberPad from "@/components/Money1/NumberPads.vue";

const recordList:Record[]=JSON.parse(window.localStorage.getItem('recordList') ||'[]');

type Record={
    tags:string[];
    notes:string;
    type:string;
    amount:number;
    createdAt?:Date;
}

@Component({
     components: {Tags,Notes,Types,NumberPad},
})
export default class Money extends Vue{
  tags=['三餐','零食','衣服','交通','学习','住房','美妆','医疗','运动',];
  recordList:Record[]=recordList;
  record: Record={
      tags:[],notes:'',type:'-',amount:0,
  };
  onUpdateTags(value:string[]){
     this.record.tags=value
  }
  onUpdateNotes(value:string){
     this.record.notes=value
  }
 
  onUpdateAmount(value:string){
      this.record.amount=parseFloat(value)
  }
  saveRecord(){
      const record2:Record =JSON.parse(JSON.stringify(this.record));
      record2.createdAt= new Date();
      this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange(){
      window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }

 
     
}
</script>

<style lang="scss" >
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
  }
</style>
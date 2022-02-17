
<template>
    <Layout class-prefix="layout"> 
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
        <div class="notes">
            <FormItem field-name="备注" 
               placeholder="在这里输入备注"
               @update:value="onUpdateNotes"/>
        </div>  
        <Tags /> 
        <Tabs :data-source="typeList"
              :value.sync="record.type"/>
        
    </Layout>   
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator'
import Tags from "@/components/Money1/Tags.vue";
import FormItem from "@/components/Money1/FormItem.vue";
import Types from "@/components/Money1/Types.vue";
import NumberPad from "@/components/Money1/NumberPads.vue";
import Tabs from '@/components/Tabs1.vue'
import typeList from '@/constants/typeList';


@Component({
     components: {Tags,FormItem,Types,NumberPad,Tabs},
})
export default class Money extends Vue{
  get recordList(){
      return this.$store.state.recordList;

  }  
  typeList=typeList;

  
  record: RecordItem={
      tags:[],notes:'',type:'-',amount:0,
  }; 
  created(){
      this.$store.commit('fetchRecords')
  };
  
  onUpdateNotes(value:string){
  };
 
  onUpdateAmount(value:string){
      this.record.amount=parseFloat(value)
  };
  saveRecord(){
      this.$store.commit('createRecord',(this.record));
  };

    
}
</script>

<style lang="scss" >
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
  }
    .notes{
        padding:12px 0;
    }
</style>
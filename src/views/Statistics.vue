<template>
    
    <Layout>
        <Tabs class-prefix="type" :dataSource="typeList" :value.sync='types'/>
        <Tabs class-prefix="interval" :dataSource="intervalList" :value.sync='interval' /> 
        <ol>
            <li v-for="(group,index) in result" :key="index">
                <h3 class='title'>{{group.title}}</h3>
               <ol>
                   <li v-for="item in group.items" :key="item.id"
                    class='record'>
                    <span>{{tagString(item.tags)}}</span>
                    <span class="notes">{{item.notes}}</span>
                    <span>¥{{item.amount}}</span>
                   </li>
               </ol>
            </li>
        </ol>
    </Layout> 
</template>
<style scoped lang='scss'>
  %item{
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      

  }
  .title{
      @extend %item;
      
  }
  .record{
      background: white;
      @extend %item;
          
  }
  .notes{
      margin-right: auto;
      margin-left: 16px;
      color: #999;
  }
      

</style>

<script lang='ts'>
import Layout from '@/components/Layout.vue';
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Tabs from '@/components/Tabs1.vue';
import intervalList from '@/constants/intervalList';
import typeList from '@/constants/typeList'
    @Component({
        components: {Layout,Tabs},

    })
    export default class Statistics extends Vue{
        get recordList(){
            return (this.$store.state as RootState).recordList;
        }
        tagString(tags:Tag[]){
            return tags.length===0?'无':tags.join(',');

        }

        get result(){
           const {recordList} = this;
           type HashTableValue ={
               title:string, items: RecordItem[]
           }
           const hashTable:{[key:string]:HashTableValue}={};
           for (let i = 0;i< this.recordList.length;i++){
               const[date,time]=(recordList[i].createdAt!.split('T'))
               hashTable[date]=hashTable[date]||{title:date,items:[]};
               hashTable[date].items.push(recordList[i]);
           }
           console.log(hashTable)
           return hashTable;
           
        }

        beforeCreate(){
            this.$store.commit('fetchRecords')
        }

            


        types='-';
        interval='day';
        intervalList= intervalList;
        typeList= typeList;
        
    }    
</script>

<style lang="scss" scoped>
    ::v-deep .type-tabs-item{
      background: white;
      &.selected{
          background:rgba(161, 200, 243);
          &::after{
              display: none;
          }
       }
    }
    ::v-deep .interval-tabs-item{
        height: 40px;
        
    }
  
</style>
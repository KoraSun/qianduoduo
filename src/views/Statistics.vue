<template>
    
    <Layout>
        <Tabs class-prefix="type" :dataSource="typeList" :value.sync='types'/>
        <Tabs class-prefix="interval" :dataSource="intervalList" :value.sync='interval' /> 
        
    </Layout>
   
</template>

<script lang='ts'>
import Layout from '@/components/Layout.vue'
import Types from '@/components/Money1/Types.vue'
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import Tabs from '@/components/Tabs1.vue'
    @Component({
        components: { Layout,Types,Tabs},

    })
    export default class Statistics extends Vue{
        types='-';
        interval='day';
        intervalList=[
            {text:'天',value:'day'},
            {text:'周',value:'week'},
            {text:'年',value:'month'},
        ];
        typeList=[
            {text:'支出',value:"-"},
            {text:"收入",value:"+"}

        ];
        
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
  
</style>
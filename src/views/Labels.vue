<template>
    <div>
        <Layout>
            <div class="tabs">
                <Icon name ="Labels" />
                标签
            </div>
            <div class="tags">
                <router-link class="tag"
                   v-for="tag in tags" :key ="tag.id"
                   :to="`/labels/edit/${tag.id}`">
                    <span>{{tag.name}}</span>
                    <Icon name="right"/>
                </router-link>
                
            </div>
            <div class="createTag-wrapper">
                <Button class="createTag" @click="createTag">新建标签</Button>
            </div>
        </Layout>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Money1/Button.vue';
    import { mixins } from 'vue-class-component';
    import TagHelper from '@/mixins/TagHelper';
    
    
    @Component({
        components:{Button},
        
    })
    export default class Labels extends mixins(TagHelper) {
        get tags(){
            return this.$store.state.tagList;
        }
        beforeCreate(){
            this.$store.commit('fetchTags')
        }
        
    };      
</script>

<style lang="scss" scoped>
  .tabs{
      background:white;
      display: flex;
      text-align: center;
      justify-content:  center;
      font-size: 24px;
      height: 58px;
      align-items: center;
      position: relative;
      border-bottom: 3px solid #76b7f1;
  }
  .tags{
      background:white;
      font-size: 16px; 
      > .tag{
          padding-left: 12px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e6e6e6;
          svg{
              width:18px;
              height: 18px;
              color:#666;
              margin-right: 16px;
          }
      }
  }
   .createTag{
      background: rgba(119, 183, 243);
      color:white;
      border-radius: 4px;
      border: none;
      height: 40px;
      padding: 0 16px;
      &-wrapper{
         text-align:center;
         padding:16px;
         margin-top: 28px;
      }
  }

 
</style>
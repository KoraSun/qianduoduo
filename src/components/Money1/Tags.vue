<template>
   <div class= tags>
        <div class="new">
            <button @click="create">新增</button>
        </div>    
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            @click="toggle(tag)"
            >{{tag.name}}</li>
        </ul>  
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    
    import {Component,Prop} from 'vue-property-decorator';
    import store from '@/store/index2'
    @Component
    export default class Tags extends Vue{
        tagList = store.fetchTags();
        selectedTags:string[] = [];
        toggle(tag:string){
            const index=this.selectedTags.indexOf(tag)
            if(index>=0){
                this.selectedTags.splice(index,1)
            }else{
                this.selectedTags.push(tag)
            } 
            this.$emit('update:value',this.selectedTags)   
        }
        create(){
            const name =window.prompt('请输入标签名')
            if (!name){ return window.alert('标签名不能为空')}
            store.createTag(name);  
        }
    }
</script>

<style lang="scss" scoped>
.tags{
    font-size:14px;
    padding:16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
  > .current{
      display:flex;
      flex-wrap: wrap;
      > li{
          $bg:rgb(161, 200, 245);
          background: $bg;
          $h:30px;
          height:$h;
          border-radius: $h/2;
          padding:4px 12px;
          margin-left: 7px;
          margin-right:7px;
          margin-top:12px;
          &.selected{
              background: darken($bg, 15%);
              color:white

          }
          
      }
  }
  > .new{
      padding-top:16px;
      margin: 0 5px;
      button {
          background:transparent;
          border:none;
          color:rgba(54, 145, 246);
          border-bottom: 1px solid ;
          padding:0 14px;

      }
  }
}

</style>
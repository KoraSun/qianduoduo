<template>
   <div class= tags>
        <div class="new">
            <button @click="createTag">新增</button>
        </div>    
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
            @click="toggle(tag)"
            >{{tag.name}}
            <Icon :name="tag.id" class="icon" v-if="tag.id<17" />
            <Icon name="0" v-else/>
            </li>
            
        </ul>  
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop} from 'vue-property-decorator';
    import {mixins} from 'vue-class-component'
    import TagHelper from '@/mixins/TagHelper'
    
    @Component
    export default class Tags extends mixins(TagHelper){
        selectedTags:string[] = [];
        get tagList(){
            return this.$store.state.tagList;

        }
        created(){
            this.$store.commit('fetchTags')
        }
        toggle(tag:string){
            const index=this.selectedTags.indexOf(tag)
            if(index>=0){
                this.selectedTags.splice(index,1)
            }else{
                this.selectedTags.push(tag)
            } 
            this.$emit('update:value',this.selectedTags)   
        }
        setup(){
            

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
    overflow: auto;
  > .current{
      display:flex;
      flex-wrap: wrap;
      > li{
          display: flex;
          flex-direction: column-reverse;
          $bg:rgb(161, 200, 245);
         /*  background: $bg; */
          $h:60px;
          height:$h;
          text-align: center;
          /* border-radius: $h/2; */
          padding:4px 10px;
          margin-left: 7px;
          margin-right:7px;
          margin-top:12px;
          border: 1px solid transparent;
          &.selected{
              border: 1px solid #a1c8f3;
          }
          > .icon{
              position: relative;
              text-align: center;
              height: 35px;
              width: 35px;
              /* background-color:#a1c8f3; */
              border-radius: 50%;
             /*  margin-left:1px; */
              color:$bg;
              

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
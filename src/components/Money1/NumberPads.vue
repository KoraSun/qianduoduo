<template>
    <div class="numberPad">
        <div class="output" >{{output || 0}} </div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="inputContent">+</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="inputContent">-</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button @click="remove()">←</button>
            <button @click="inputContent">.</button>
            <button @click="inputContent">0</button>
            <button @click="ok()">OK</button>
            <button @click="cleanAll()">清空</button>
            
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    @Component
    export default class NumberPad extends Vue{
        output:string ='0';
        formula:string='0';
        result:number=0;
        inputContent(event:MouseEvent){
            const button= (event.target as HTMLButtonElement);
            const input = button.textContent !;
            if(this.output.length=== 16){return;}
            if(this.output === '0'){
              if('0123456789'.indexOf(input)>=0){
                  this.output = input;
                  this.formula=this.output   
              }else{
                this.output += input;
              }
              return;     
            }if(this.output.indexOf('.')>=0 && input==='.'){return;}
            
            this.output+=input;
            this.formula=this.output
            
        }
        remove(){
            if(this.output.length===1){
                this.output='0';
            }else{
                this.output=this.output.slice(0,-1)
            }
        }
        cleanAll(){
            this.output='0'
        }
        ok(){
            this.result=eval(this.formula)
            this.output=(this.result).toString()
            this.$emit('update:value',this.output)
            this.$emit('submit',this.output)
            this.output='0'
            
        }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
  .numberPad {
      background: rgb(161, 200, 245);
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
    }
    .buttons {
      @extend %clearFix;
      > button {
          margin-left:6px;
          margin-bottom: 5px;
        width: 23%;
        height: 64px;
        float: left;
        background: white;
        border-radius: 15%;
        border: none;
      }
    }
  }


</style>
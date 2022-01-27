<template>
    <div class="numberPad">
        <div class="output">{{output ||'0'}}
        </div>
        
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button>+</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button>-</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button>÷</button>
            <button class="ok">OK</button>
            <button @click="inputContent">0</button>
            <button class="zero">清空</button>
            <button @click="inputContent">.</button>
            

        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    @Component
    export default class NumberPad extends Vue{
        output:string ='0';
        inputContent(event:MouseEvent){
            const button= (event.target as HTMLButtonElement);
            const input = button.textContent!;
            if(this.output === '0'){
                if(input === '0'){
                    return;
                }else if('123456789'.indexOf(input)>=0){
                    this.output = input;
                    return;
                }
            }else{
                this.output += button.textContent
            }
                
        };
       
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
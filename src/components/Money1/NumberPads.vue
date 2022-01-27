<template>
    <div class="numberPad">
        <div class="output" >{{output || 0}}
        </div>
        
        <div class="buttons">
            <button @click="operate('1')">1</button>
            <button @click="operate('2')">2</button>
            <button @click="operate('3')">3</button>
            <button @click="operate('+')">+</button>
            <button @click="operate('4')">4</button>
            <button @click="operate('5')">5</button>
            <button @click="operate('6')">6</button>
            <button @click="operate('-')">-</button>
            <button @click="operate('7')">7</button>
            <button @click="operate('8')">8</button>
            <button @click="operate('9')">9</button>
            <button @click="drop()">←</button>
            <button @click="operate('.')">.</button>
            <button @click="operate('0')">0</button>
            <button @click="equal()">OK</button>
            <button @click="cleanAll()">清空</button>
            
        </div>
    </div>
</template>

<script >
  export default{
      name:'NumberPad',
      data(){
          return{
             formula:'',
             output:'0',
          }
      },
      methods:{
          operate(element){
              console.log(element)
              console.log('operate..')
              this.formula +=element
              this.output=this.formula   
          },
          drop(){
              console.log('drop..')
              this.formula=this.formula.slice(0,-1)
              this.output=this.formula
          },
          equal(){
              console.log('equal..')
              console.log(this.formula)
              this.output=eval(this.formula)
              this.formula=''
          },
          cleanAll(){
              console.log('clearAll')
              this.formula=""
              this.output='0'
          }
      }



  }
    
    // import Vue from 'vue';
    // import {Component} from 'vue-property-decorator';
    // @Component
    // export default class NumberPad extends Vue{
    //     output:string ='0';
    //     inputContent(event:MouseEvent){
    //         const button= (event.target as HTMLButtonElement);
    //         const input = button.textContent!;
    //         if(this.output === '0'){
    //             if(input === '0'){
    //                 return;
    //             }else if('123456789'.indexOf(input)>=0){
    //                 this.output = input;
    //                 return;
    //             }
    //         }else{
    //             this.output += button.textContent
    //         }
                
    //     };
       
    // }
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
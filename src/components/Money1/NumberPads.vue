<template>
    <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>*</button>
            <button class="ok">OK</button>
            <button>0</button>
            <button class="zero">清空</button>
            <button>÷</button>
            

        </div>
    </div>
</template>

<script>
    export default {
        name:"NumberPad"
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
<template>
  <div id="app">
    <router-view/>
    <hr/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
a{
text-decoration: none;
color:inherit;
}
body{
  font-family:$font-hei;
  line-height:1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background:#f5f5f5;
  overflow:scroll; 
  overflow-y:hidden;
  overflow-x:hidden;

 
}
#app{
  max-width: 480px;
  margin: 0 auto;
}



</style>

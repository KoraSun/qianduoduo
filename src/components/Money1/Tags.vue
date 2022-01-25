<template>
   <div class= tags>
        <div class="new">
            <button>新增</button>
        </div>    
        <ul class="current">
            <li>三餐</li>
            <li>零食</li>
            <li>衣服</li>
            <li>交通</li>
            <li>学习</li>
            <li>住房</li>
            <li>美妆</li>
            <li>医疗</li>
            <li>运动</li>
        </ul>  
    </div>
</template>

<script>
    export default {
        name:'Tags'
        
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
          background: rgb(161, 200, 245);
          $h:30px;
          height:$h;
          border-radius: $h/2;
          padding:4px 12px;
          margin-left: 7px;
          margin-right:7px;
          margin-top:12px;
          
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
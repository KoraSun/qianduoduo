<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input  type="text" placeholder="点击输入备注">
        </label>  
    </div>
</template>

<script>
    export default {
        name:"Notes"   
    }
</script>

<style lang="scss" scoped>
 .notes{
      font-size: 14px;
      background: white;
      padding-left: 16px;
      display: flex;
      align-items:center;
      .name{
          padding-right: 16px;
      }
      >input{
          height: 50px;
          flex-grow: 1;
          background: transparent;
          border:none;
          padding-right: 16px;
      }
  }



</style>
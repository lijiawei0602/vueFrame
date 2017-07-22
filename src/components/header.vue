<template>
  <header class="header">
      <router-link id="logo" to="/home/login">{{logo}}</router-link>
      <ul class="nav">
          <li v-for="nav in navs">
            <router-link to="/home/first">{{nav.title}}</router-link>
          </li>
      </ul>
  </header>
</template>

<<script>
export default {
  data(){
      return {
          logo : "logo",
          navs : [
              { title : "工作中心" },
              { title : "客户档案" },
              { title : "报告管理" }
          ]
      }
  }
}
</script>

<style scoped>
*{
    margin:0;
}
.header{
    width:100%;
    height:50px;
    background-color:rgba(0,0,0,.6);
}
#logo{
    text-decoration: none;
    float: left;
    display: block;
    line-height: 50px;
    height:50px;
    font-size: 18px;
    color:white;
}
.nav{
    float: right;
    list-style: none;
    height:50px;
}
li{ 
    display: inline-block;
    height:100%;
    line-height: 50px;
    color:white;
    margin-left: 10px;
}
li:nth-child(3){
    margin-right: 10px;
}
a{
    text-decoration: none;
}
</style>


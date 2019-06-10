<template>
    <v-container>
      <mark>{{url}}</mark>
      <p :class="comClass">hello</p>
      <v-btn @click="color = !color">ChangeColor</v-btn>
      <v-btn @click="length = !length">ChangeLength</v-btn>
      <div id="container">
        <div id="small-container-one">
          <div class="circle">1</div>
          <div class="circle">2</div>
        </div>
        <div id="small-container-two">
          <div class="circle">3</div>
        </div>
        <div id="small-container-third">
          <div class="circle">4</div>
          <div class="circle">5</div>
          <div class="circle">6</div>
        </div>
      </div>
      <div id="canvas" v-on:mousemove="update">
        {{x}},{{y}}
        ---
        <!--阻止冒泡事件-->
        <span v-on:mousemove.stop>Stop</span>
        <!--阻止点击默认事件-->
        <a href="http://www.baidu.com" @click.prevent="alert">地址</a>
      </div>
      <v-btn flat small color="primary" @click="goToAbout">About</v-btn>
      <v-btn small color="error" @click="goToBack">Back</v-btn>
      <v-btn flat small color="warning" @click="goToNotFound">404</v-btn>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      color: false,
      length: false,
      url: process.env.VUE_APP_URL,
      x: 0,
      y: 0,
    }),
    computed: {
      comClass: function(){
        return {changeColor:this.color, changeLength:this.length};
      }
    },
    beforeCreate() {
      // console.log('实例化之前');
    },
    created() {
      // console.log('实例化之后，虚拟dom生成，页面未显示');
      this.$http
        .get('http://jsonplaceholder.typicode.com/users')
        .then((res) => {
          console.log(res);
        })
    },
    beforeMount() {
      // console.log('挂载之前');
    },
    mounted() {
      // console.log('挂载在后，页面被渲染');
    },
    beforeUpdate() {
      // console.log('更新前，虚拟dom更新');
    },
    updated() {
      // console.log('更新后，页面被更新');
    },
    beforeDestory() {
      // console.log('组件销毁前');
    },
    destoryed() {
      // console.log('组件被销毁');
    },
    methods: {
      update(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
      },
      alert() {
        alert('hello,world!');
      },
      goToAbout() {
        this.$router.push('/about');
      },
      goToBack() {
        if(confirm('即将离开本页面') == true) {
          this.$router.go(-1);
        };
      },
      goToNotFound() {
        this.$router.replace('/Notfound');
      }
    }
  }
</script>

<style scoped>
  #canvas {
    width:300px;
    padding:50px 20px;
    border: 1px solid #333;
    margin: 20px auto;
    text-align: center;
  }
  mark {
    display: block;
    text-align: center;
  }
  p {
    width: 60px;
    height: 40px;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    background-color: green;
    color: #fff;
  }
  .changeColor {
    background-color: red;
  }
  .changeLength {
    width: 120px;
  }
  #container {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #444;
    border-radius: 5px;
  }
  #container > div#small-container-one, div#small-container-two, div#small-container-third {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  #container > div#small-container-two {
    justify-content: center;
  }
  #container .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 20px;
  }
</style>

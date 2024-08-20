<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LoginBox/>
  <div><a href="/post" v-on:click.prevent="toPost()">글 등록</a></div> <!-- a태그의 기본기능 막기 -->
  <Component :is="currentComponent"></Component> <!-- is 속성에 해당하는 컴포넌트가 렌더링됨-->
  <NaverPayComponent/>
  <KakaoPayComponent/>
</template>

<script>
import LoginBox from './components/LoginBox.vue'
import PostComponent from './components/PostComponent.vue'
import {onMounted, ref} from "vue";
import NaverPayComponent from "./components/NaverPayComponent.vue";
import KakaoPayComponent from "@/components/KakaoPayComponent.vue";

export default {
  name: 'App',
  setup(){
    let currentComponent = ref(null);

    // 컴포넌트 화면을 보여주는 메소드
    const toPost = () =>{
      // 브라우저의 history API사용
      history.pushState({},'',"/post") // 새로고침하지않고 url만 변경
      currentComponent.value = PostComponent // 렌더링할 컴포넌트
    }

    // 마운트 시점(Dom 다 정의된 이후) 실행할 코드
    onMounted(()=>{
      // popstate event발생시(url변경시) 실행할 메소드 정의
      window.addEventListener('popstate',()=>{
        currentComponent.value = null; // 글 등록 컴포넌트 제거
      })
    });

    return {currentComponent, toPost}
  },
  components: {
    KakaoPayComponent,
    LoginBox,
    PostComponent,
    NaverPayComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

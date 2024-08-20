<script setup>
  // 변수초기화를 위해 ref함수 import
  import {ref} from "vue";

  // 로그인폼에 사용될 변수 초기화
  let loginId = ref('');
  let password = ref('');



</script>

<template>
  <label>아이디</label>
  <input type="text" v-model="loginId"/>
  <label>비밀번호</label>
  <input type="password" v-model="password"/>
</template>

<style scoped>

</style>
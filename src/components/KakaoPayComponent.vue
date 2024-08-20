<script setup>
  import axios from "axios";

  const readyPayment = () => {
    axios.post("http://localhost:8080/api/postReadyKakaoPayment")
        .then((response)=>{
          // 상태코드 출력
          console.log(response.status)

          // 결제고유번호 쿠키에 SET
          document.cookie = "tid="+response.data.tid + ";Max-Age=180" // 결제 고유 번호, 만료기간 3분
          // session도 담아보자 // 하지만 서버전송에 필요하기 때문에 탈락
          // window.sessionStorage.setItem("tid",response.data.tid) // 결제 고유 번호

          // redirect로 받을시 cors위반이기 때문에 직접 이동
          window.location.href = response.data.redirect_pc_url
        }).catch((error)=>{
          console.error(error)
    })
  }
</script>

<template>
  <button id="kakaoPayButton" v-on:click="readyPayment"></button>
</template>

<style scoped>
  #kakaoPayButton{
    width: 241px;
    height: 100px;
    background-size: cover;
    background-image: url("@/assets/payment_icon_yellow_large.png");
    border: none;
    background-color: white;
  }
</style>
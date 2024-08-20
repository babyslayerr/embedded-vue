<script setup>
/* global Naver */ // Naver객체는 생성시점에 동적으로생성하고 초기 로드시점에는 존재하지 않기 때문에 명시필요
import {onMounted, ref} from "vue";

  //
  const oPay = ref(null)

  const initializeNaverPay = () => {
    oPay.value = Naver.Pay.create({
      mode: 'production', // development or production
      clientId: 'u86j4ripEt8LRfPGzQ8', // clientId
      chainId: 'TDZSUHBoVGRFS2l' // chainId
    })
  }
  // 네이버페이 버튼 클릭 핸들러
  const handleNaverPayClick = () => {
    oPay.value.open({
      // 현재는 사업자등록번호가 없어서 테스트 불가
      merchantUserKey: '가맹점 사용자 식별키',
      merchantPayKey: '가맹점 주문 번호',
      productName: '상품명을 입력하세요',
      totalPayAmount: '1000',
      taxScopeAmount: '1000',
      taxExScopeAmount: '0',
      returnUrl: '사용자 결제 완료 후 결제 결과를 받을 URL'
    });
  };

  onMounted(()=>{
    // dom요소에 네이버페이SDK를 추가할 script생성
    const script = document.createElement('script')
    // 네이버페이 sdk 추가
    script.src = 'https://nsp.pay.naver.com/sdk/js/naverpay.min.js';
    // 스크립트가 로드될시 실행할 함수
    script.onload = initializeNaverPay;
    // 생성된 요소를 head태그안의 추가 추가
    document.head.appendChild(script);

  })
</script>

<template>
  <input type="button" id="naverPayBtn" value="" v-on:click="handleNaverPayClick">
</template>

<style scoped>
  #naverPayBtn {
    /*btn css 설정*/
    background-image: url("@/assets/badge_npay.svg");
    background-position: center;
    background-size: cover;
    border: none;
    background-color: #ffffff;
    /*사진 사이즈와 동일*/
    width: 277px;
    height: 105px;
    /*클릭할수있는 요소로 보이게*/
    cursor: pointer;
  }
</style>
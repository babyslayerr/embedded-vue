<script setup>

  import {ref} from "vue";
  import axios from "axios"; // 서버통신을 위한 라이브러리 axios 사용

  // 글 제목
  let subject = ref('');
  // 글 내용
  let content = ref('');

  // 서버에 글 전송
  const postSubmit = () =>{
    alert("확인");
    let data = {
      subject : subject.value,
      content : content.value
    }
    axios.post("/api/post",data)
        .then((response)=>{
          if(response.statusText === 'OK'){// 상태메시지 OK일경우
            alert('저장이 성공적으로 완료되었습니다.')
          }
          // 저장후 List 가져옴
          getPostList();
        }).catch((error)=>{
          // 에러 경고 출력
          alert(error);
    });

  }

  // 글 총 갯수
  let totalElements = ref(0)
  // 글 리스트
  let postList = ref([]);
  // 서버 통신
  const getPostList = () => {
    console.log("getPostList Start!!!")
    axios.get("/api/getPostList", {
    params : {
      page : 0 // 0페이지 가져옴
    }
  }).then((response)=>{
    // 필요한 값 주입
    console.log("getPostList Success!!!")
    totalElements.value = response.data.totalElements;
    postList.value = response.data.content
  }).catch((e)=>{
    console.log("getPostList Fail!!!")
    alert(e) // 오류시 경고 출력
  })
  console.log("getPostList End!!!")
  }
  // 컴포넌트 생성시점에 List 호출
  getPostList()
</script>

<template>
  <h1>글 등록 컴포넌트</h1>
  <div>
    <input type="text" v-model="subject"/>
    <textarea v-model="content" />
    <button v-on:click="postSubmit()" >글 등록</button>
    <div>글 갯수 : {{totalElements}}</div>
    <div v-for="post in postList" v-bind:key="post.id">
      {{post.subject}} : {{post.content}}
    </div>
  </div>
</template>

<style scoped>

</style>
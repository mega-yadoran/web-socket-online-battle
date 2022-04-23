<template>
  <div id="app">
    <div>名前:</div>
    <input v-model="userName" type="text" />
    <input type="submit" value="入室" />

    <hr />

    <div>{{ turnUserName }}さんのターン:</div>

    <input type="text" name="" />
    <input type="submit" />
    <div v-for="(post, i) in posts" :key="i">
      <div>↑</div>
      <div>{{ post.userName }} : " {{ post.word }} "</div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "App",
  data: () => ({
    userName: "",
    turnUserName: "yado",
    posts: [
      { userName: "yado", word: "elephant" },
      { userName: "abc", word: "apple" },
    ],
    socket: io("http://localhost:3031"),
  }),

  created() {
    this.socket.on("connect", () => {
      console.log("connected");
    });
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>

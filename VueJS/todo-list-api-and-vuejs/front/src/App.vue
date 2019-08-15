<template>
  <div id="app">
    <h2>Mis todos maravillosos</h2>
    <TodoList :apiEndpoint="apiEndpoint" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  components: {
    TodoList
  },
  data() {
    return {
      apiEndpoint: "http://localhost:2222/api/todos",
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

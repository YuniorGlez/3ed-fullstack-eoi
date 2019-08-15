<template>
  <div class="todo-list">
    <input v-model="newTodo.text" type="text" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TodoList",
  props: {
    apiEndpoint: String
  },
  data() {
    return {
      newTodo: {},
      todos: []
    };
  },
  created() {
    axios
      .get(this.apiEndpoint)
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err.msg));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
}
</style>

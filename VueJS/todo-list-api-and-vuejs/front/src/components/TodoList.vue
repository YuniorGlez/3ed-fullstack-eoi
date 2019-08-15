<template>
  <div class="todo-list">
    <input v-model="newTodo.text" type="text" />
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    apiEndpoint: String
  },
  data() {
    return {
      newTodo: {},
      todos : []
    };
  },
  created() {
    alert('Me acabo de crear')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
}
</style>

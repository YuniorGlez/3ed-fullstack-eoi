<template>
  <div class="todo-list">
    <input v-model="newTodo.text" type="text" @keyup.enter="add" />
    <button @click="add">Añadir</button>
    <br />
    <small class="error" v-if="error">{{error}}</small>
    <div class="todo" v-for="todo in todos">
      <span v-if="todo._id != editing">{{todo.text}}</span>
      <input @keyup.enter="save(todo)" v-else type="text" v-model="todo.text" />
      <button @click="remove(todo._id)">Borra este TODO</button>
      <button v-if="todo._id != editing" @click="editing = todo._id">Editar</button>
      <button v-else @click="save(todo)">Guardar Cambios</button>
    </div>
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
      editing: "",
      newTodo: {},
      todos: [],
      error: ""
    };
  },
  created() {
    axios
      .get(this.apiEndpoint)
      .then(res => {
        this.todos = res.data;
      })
      .catch(err => (this.error = err.response.data.message));
  },
  methods: {
    add() {
      this.error = "";
      axios
        .post(this.apiEndpoint, { text: this.newTodo.text })
        .then(res => {
          const TODOFinallyPosted = res.data;
          this.todos.push(TODOFinallyPosted);
          this.newTodo = {};
          this.error = "";
        })
        .catch(err => (this.error = err.response.data.message));
    },
    remove(id) {
      this.error = "";
      axios
        .delete(this.apiEndpoint + "/" + id)
        .then(res => {
          this.todos = this.todos.filter(todo => todo._id != id);
        })
        .catch(err => (this.error = err.response.data.message));
    },
    save(todo) {
      return axios
        .patch(`${this.apiEndpoint}/${todo._id}`, todo)
        .then(res => {
          this.editing = "";
          this.error = "";
        })
        .catch(
          err =>
            (this.error =
              "Hubo un error al modificar el todo, " +
              err.response.data.message)
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list {
}

.error {
  color: red;
}
</style>

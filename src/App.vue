<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      categories: [],
    };
  },
  async created() {
    try {
      /* Getting category info */
      const response = await axios.get('http://localhost:3000/categories');
      this.categories = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    try {
      /* Getting user info */
      const response = await axios.get('http://localhost:3000/users');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="list-with-title">
      <h1>Category List</h1>
      <ul>
        <li v-for="category in categories">{{ category.name }}</li>
      </ul>
    </div>
    <div class="list-with-title">
      <h1>User List</h1>
      <ul>
        <li v-for="user in users">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<style>
body{
  margin: 0;
}
.container{
  width: 100vw;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.list-with-title{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: start;
}
ul{
  margin: 2rem 0;
}
</style>

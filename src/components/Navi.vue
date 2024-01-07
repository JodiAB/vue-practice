<!-- NavBar.vue -->

<template>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/testimonials">Testimonials</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    // You can add component-specific logic here if needed
  };
  </script>
  
  <style scoped>
  nav {
    padding: 30px;
    background-color: transparent;
    text-align: right;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  
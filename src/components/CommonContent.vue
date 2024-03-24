<template>
    <div class="bg-gray-100 p-6">
      <h1 class="text-3xl font-semibold mb-4">{{ title }}</h1>
      <p class="text-lg mb-4">
        {{ content }}
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    mounted() {
      // Hardcoded content (you can remove this if you only want to fetch from the backend)
      this.title = 'About the International Flag of Peace';
      this.content =
        'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, and kindness among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.';
  
      // Make an Axios GET request to fetch data from the backend for the common content
      axios
        .get('http://your-backend-api-url/common-content') // Replace with your actual backend URL
        .then((response) => {
          // Update data with the fetched content
          this.title = response.data.title;
          this.content = response.data.content;
        })
        .catch((error) => {
          console.error('Error fetching common content:', error);
        });
    },
  };
  </script>
  
  
  
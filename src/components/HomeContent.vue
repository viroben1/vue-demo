<template>
    <div class="bg-gray-100 p-6 text-gray-800">
      <h1 class="text-3xl font-semibold mb-4">Welcome to Our Application</h1>
      <p class="text-lg mb-4">
        This is a user-friendly application designed to help you navigate and explore its features efficiently.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-2">Getting Started</h2>
      <p class="mb-2">Follow these simple steps to get started:</p>
      <ol class="list-decimal pl-6">
        <li class="mb-2">Click on "Home" to return to the main page.</li>
        <li class="mb-2">Use the navigation menu to access different sections of the app.</li>
        <li class="mb-2">Explore our "About" page to learn more about our mission.</li>
        <li class="mb-2">Click on "Flag" to access the International Flag of Peace.</li>
      </ol>
  
      <!-- Display hardcoded data -->
      <h2 class="text-2xl font-semibold mt-6 mb-2">Hardcoded Data</h2>
      <p class="mb-2">{{ hardcodedData }}</p>
  
      <!-- Display data fetched using Axios -->
      <h2 class="text-2xl font-semibold mt-6 mb-2">Fetched Data</h2>
      <p v-if="!fetchData" class="text-sky-500">Loading data...</p>
      <p v-else class="mb-2">{{ fetchData }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeContent',
    data() {
      return {
        hardcodedData: 'This is hardcoded data.',
        fetchData: '', // Data fetched using Axios will be stored here
      };
    },
    mounted() {
      // Fetch data from the backend API when the component is mounted
      this.fetchDataUsingAxios();
    },
    methods: {
      async fetchDataUsingAxios() {
        try {
          // Make an HTTP GET request to your backend API endpoint
          const response = await this.$axios.get('http://localhost:3000/api/data');
          // Assuming your backend returns data in the expected format
          this.fetchData = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          // You might set default/fallback data or show an error message to the user
        }
      },
    },
  };
  </script>
  
  
  
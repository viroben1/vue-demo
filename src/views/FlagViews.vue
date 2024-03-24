<template>
    <div>
      <FlagPage :flagData="flagData" />
      <!-- Other content for the view -->
    </div>
  </template>
  
  <script>
  import FlagPage from '../components/FlagPage.vue'; // Adjust the path based on your project structure
  
  export default {
    components: {
      FlagPage,
    },
    data() {
      return {
        flagData: null,
      };
    },
    mounted() {
      // Fetch data from the backend when the component is mounted
      this.fetchFlagData();
    },
    methods: {
      async fetchFlagData() {
        try {
          // Make an HTTP GET request to your backend API endpoint for flag data
          const response = await this.$axios.get('http://localhost:3000/api/flag');
  
          // Assuming your backend returns flag data in the expected format
          this.flagData = response.data;
        } catch (error) {
          console.error('Error fetching flag data:', error);
        }
      },
    },
  };
  </script>
  
  
  
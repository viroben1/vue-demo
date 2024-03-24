<template>
    <div>
      <CommonContent v-if="!isAboutOrFlagPage" :contentData="contentData" />
    </div>
  </template>
  
  <script>
  import CommonContent from './CommonContent.vue';
  
  export default {
    components: {
      CommonContent,
    },
    data() {
      return {
        isAboutOrFlagPage: false,
        contentData: null,
      };
    },
    beforeRouteUpdate(to, from, next) {
      // Update isAboutOrFlagPage when the route changes
      this.isAboutOrFlagPage = to.path.includes('/about') || to.path.includes('/flag');
      if (this.isAboutOrFlagPage) {
        // Fetch data from the backend based on the route or any other criteria
        this.fetchContentData(to.path);
      }
      next();
    },
    methods: {
      async fetchContentData(routePath) {
        try {
          // Make an HTTP GET request to your backend API endpoint for dynamic content
          const response = await this.$axios.get(`http://localhost:3000/api/content${routePath}`);
  
          // Assuming your backend returns content data in the expected format
          this.contentData = response.data;
        } catch (error) {
          console.error('Error fetching content data:', error);
        }
      },
    },
  };
  </script>
  
  
  
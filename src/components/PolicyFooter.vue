<template>
    <div class="text-center mt-6 py bg-red-600">
      <p class="text-sm text-white">
        If you have questions, suggestions, or need assistance, please feel free to contact our support team at{' '}
        <a href="mailto:support@internationalflagofpeace.com" class=" text-sky-300">
          support@internationalflagofpeace.com
        </a>
        .
      </p>
      <p class="text-xs  text-white">Last updated: {{ lastUpdatedDate }}</p>
      <p class="text-xs text-white">
        Return to the{' '}
        <router-link to="/Homepage" class=" text-sky-300">
          home page
        </router-link>
        .
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lastUpdatedDate: '', // This will be populated with data fetched using Axios
      };
    },
    mounted() {
      // Fetch last updated date from the backend API when the component is mounted
      this.fetchLastUpdatedDate();
    },
    methods: {
      async fetchLastUpdatedDate() {
        try {
          const response = await this.$axios.get('http://localhost:3000/api/last-updated');
          this.lastUpdatedDate = response.data.lastUpdatedDate;
        } catch (error) {
          console.error('Error fetching last updated date:', error);
        }
      },
    },
  };
  </script>
  
  
  
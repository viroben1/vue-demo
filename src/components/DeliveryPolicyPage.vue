<template>
    <div class = "container mx-auto my-8 p-8  bg-sky-500 text-white rounded shadow-lg">
      <h1 class="text-3xl font-bold mb-4">{{ dynamicData.pageTitle }}</h1>
      <p class="text-white" v-html="dynamicData.pageContent"></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DeliveryPolicyPage',  // Assuming this is the correct component name
    data() {
      return {
        dynamicData: {
          pageTitle: '',
          pageContent: '',
        },
      };
    },
    mounted() {
      // Fetch dynamic data using Axios
      this.fetchDynamicData();
    },
    methods: {
      async fetchDynamicData() {
        try {
          const response = await this.$axios.get('http://localhost:3000/api/pages/delivery-policy');
          this.dynamicData = response.data;
        } catch (error) {
          console.error('Error fetching dynamic data:', error);
        }
      },
    },
  };
  </script>
  
  
  
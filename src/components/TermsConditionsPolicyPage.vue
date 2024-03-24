<template>
    <div class = "container mx-auto my-8 p-8  bg-sky-500 text-white rounded shadow-lg">
      <h1 class="text-3xl font-bold mb-4">{{ dynamicData.pageTitle }}</h1>
      <p class="text-white" v-html="dynamicData.pageContent"></p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsConditionsPolicyPage',
    props: {
      dynamicData: {
        type: Object,
        default: () => ({ pageTitle: '', pageContent: '' }),
      },
    },
    mounted() {
      // Fetch dynamic data using Axios
      this.fetchDynamicData();
    },
    methods: {
      async fetchDynamicData() {
        try {
          const response = await this.$axios.get('http://localhost:3000/api/pages/terms-conditions');
          // Emit an event to inform the parent component about the new data
          this.$emit('updateDynamicData', response.data);
        } catch (error) {
          console.error('Error fetching dynamic data:', error);
        }
      },
    },
    watch: {
      dynamicData: {
        handler(newData) {
          // Perform relevant logic based on the updated data
          console.log('Dynamic data changed. New pageTitle:', newData.pageTitle);
        },
        deep: true,
      },
    },
  };
  </script>
  
  
  
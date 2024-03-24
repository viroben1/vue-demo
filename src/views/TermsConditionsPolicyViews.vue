<template>
    <div>
      <TermsConditionsPolicyPage
        :dynamicData="dynamicData"
        @updateDynamicData="updateDynamicData"
      />
      
      
      <PolicyFooter></PolicyFooter>
    </div>
  </template>
  
  <script>
  
  
  import TermsConditionsPolicyPage from '../components/TermsConditionsPolicyPage.vue';
  import PolicyFooter from '../components/PolicyFooter.vue';
  
  export default {
    components: {
      TermsConditionsPolicyPage,
      PolicyFooter,
     
    },
    data() {
      return {
        dynamicData: {
          pageTitle: '',
          pageContent: '',
        },
        
      };
    },
    methods: {
      async fetchTermsConditionsPolicyData() {
        try {
          const response = await this.$axios.get('http://localhost:3000/api/pages/terms-conditions');
          this.dynamicData = response.data;
        } catch (error) {
          console.error('Error fetching terms-conditions policy data:', error);
        }
      },
      
      
      updateDynamicData(newData) {
        // Update the dynamicData property in the parent component
        this.dynamicData = newData;
      },
    },
    mounted() {
      this.fetchTermsConditionsPolicyData();
      
    },
  };
  </script>
  
  
  
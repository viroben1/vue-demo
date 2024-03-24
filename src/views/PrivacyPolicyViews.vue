<template>
    <div>
      
      <PrivacyPolicyPage :privacyPolicyData="privacyPolicyData" />
      
      <PolicyFooter></PolicyFooter>
    </div>
  </template>
  
  <script>
  import * as api from '../../backend/src/services/api.js';
  
  import PrivacyPolicyPage from '../components/PrivacyPolicyPage.vue';
  import PolicyFooter from '../components/PolicyFooter.vue';
  
  
  export default {
    components: {
      PrivacyPolicyPage,
      PolicyFooter,
      
    },
    data() {
      return {
        privacyPolicyData: {
          pageTitle: '',
          pageContent: '',
        },
        dynamicData: {
          pageTitle: '',
          pageContent: '',
        },
        
      };
    },
    mounted() {
      this.fetchPrivacyPolicyData();
      
    },
    methods: {
      async fetchPrivacyPolicyData() {
        try {
          const response = await api.getPrivacyPolicyData();
          this.privacyPolicyData = response.data;
        } catch (error) {
          console.error('Error fetching privacy policy data:', error);
        }
      },
  
      
  
      
    },
  };
  </script>
  ../../backend/src/services/api.js
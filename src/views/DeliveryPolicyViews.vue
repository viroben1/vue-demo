<template>
    <div>
      
      <DeliveryPolicyPage :deliveryPolicyData="deliveryPolicyData" />
      
      <PolicyFooter></PolicyFooter>
    </div>
  </template>
  
  <script>
  
  import DeliveryPolicyPage from '../components/DeliveryPolicyPage.vue';
  import PolicyFooter from '../components/PolicyFooter.vue';
  
  export default {
    components: {
      
      DeliveryPolicyPage,
      PolicyFooter,
      
    },
    data() {
      return {
        deliveryPolicyData: {
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
      this.fetchDeliveryPolicyData();
      
    },
    methods: {
      async fetchDeliveryPolicyData() {
        try {
          const response = await this.$axios.get('http://localhost:3000/api/pages/delivery-policy');
          this.deliveryPolicyData = response.data;
        } catch (error) {
          console.error('Error fetching delivery policy data:', error);
        }
      },
      
      }
    }
  
  </script>
  
  
  
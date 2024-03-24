<template>
  <div>
    <HomeContent v-if="isPolicyPage" :policyData="policyData" />
    <HomePage v-else />
    <checkOut :product="currentProduct" @checkout="checkout" />
  </div>
</template>

<script>
import HomeContent from '../components/HomeContent.vue'
import HomePage from '../components/HomePage.vue'
import * as api from '@backendSrc/services/api.js'
import { PaymentService } from '@backendSrc/services/payment-utils.js'
const { performPayment } = PaymentService
// import checkOut from './check-out.vue'
import checkOut from '@/components/check-out.vue'

export default {
  name: 'HomeView',
  components: {
    HomeContent,
    HomePage,
    checkOut
  },
  data() {
    return {
      isPolicyPage:
        this.$route.path.includes('/privacy') ||
        this.$route.path.includes('/refund') ||
        this.$route.path.includes('/delivery') ||
        this.$route.path.includes('/terms'),
      policyData: null,
      currentProduct: {
        name: '',
        price: '',
        image: 'https://example.com/your-product-image.jpg'
      }
    }
  },
  mounted() {
    // Fetch policy data from the backend when the component is mounted
    if (this.isPolicyPage) {
      this.fetchPolicyData()
    }
    this.fetchDynamicData()
  },
  methods: {
    async fetchPolicyData() {
      try {
        // Make an HTTP GET request to your backend API endpoint for policy data
        const response = await this.$axios.get('http://localhost:3000/api/policy')

        // Assuming your backend returns policy data in the expected format
        this.policyData = response.data
      } catch (error) {
        console.error('Error fetching policy data:', error)
      }
    },
    async fetchDynamicData() {
      try {
        const response = await api.getDynamicData()
        this.dynamicData = response.data
      } catch (error) {
        console.error('Error fetching dynamic data:', error)
      }
    },
    async checkout() {
      await performPayment()
    }
  }
}
</script>

../../backend/src/services/api.js../../backend/src/services/payment-utils.js

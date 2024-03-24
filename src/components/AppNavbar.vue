<template>
  <nav class="bg-green-500 p-4">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-bold">PeaceToTheWorld-Flag</router-link>
        <ul class="flex flex-row space-x-4">
          <li>
            <router-link to="/HomePage" class="text-white" active-class="active">
              HomePage
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white" active-class="active"> About </router-link>
          </li>
          <li>
            <router-link to="/flag" class="text-white" active-class="active">
              FlagView
            </router-link>
          </li>
          <li>
            <router-link to="/privacy" class="text-white" active-class="active">
              PrivacyPolicy
            </router-link>
          </li>
          <li>
            <router-link to="/refund" class="text-white" active-class="active">
              RefundPolicy
            </router-link>
          </li>
          AppNavbar.vue
          <li>
            <router-link to="/delivery" class="text-white" active-class="active">
              DeliveryPolicy
            </router-link>
          </li>

          <li>
            <router-link to="/terms" class="text-white" active-class="active">
              TermsAndConditions
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    dynamicData: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // Fetch dynamic data using Axios
    this.fetchDynamicData()
  },
  methods: {
    async fetchDynamicData() {
      try {
        const response = await this.$axios.get('http://localhost:3000/api/dynamicData')
        // Emit an event to inform the parent component about the new data
        this.$emit('update:dynamicData', response.data)
      } catch (error) {
        console.error('Error fetching dynamic data:', error)
      }
    }
  }
}
</script>

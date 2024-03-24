<template>
  <div :class="{ HomePage: true, ' bg-indigo-100': true, 'p-8': true, hidden: isPolicyPage }">
    <header class="text-center">
      <h1 class="text-4xl font-bold text-blue-600">Welcome to the International Flag of Peace</h1>
    </header>
    <section class="mt-8">
      <h2 class="text-2xl font-semibold text-blue-700">About Us</h2>
      <p class="text-sky-500">{{ aboutUsText }}</p>
    </section>
    <section class="mt-8">
      <h2 class="text-2xl font-semibold text-blue-700">Our Mission</h2>
      <p class="text-sky-500">
        Our mission is to spread awareness about the International Flag of Peace and to inspire acts
        of kindness and charity. We believe in creating a world where love, understanding, and
        compassion prevail. Join us in promoting peace and making a positive impact in our global
        community.
      </p>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-semibold text-blue-700">Contact Us</h2>
      <p class="text-sky-500">
        If you have any questions or would like to get involved, please don't hesitate to reach out
        to us.
      </p>
      <p class="mt-2 text-blue-600">Email: contact@internationalflagofpeace.com</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      isPolicyPage: false,
      aboutUsText:
        'We are dedicated to promoting peace, unity, compassion, and understanding among all people. Our flag symbolizes the hope for a more peaceful world.',
      missionText: '' // This will be populated with data fetched using Axios
    }
  },
  mounted() {
    // Fetch mission data from the backend API when the component is mounted
    this.fetchMissionData()
  },
  methods: {
    async fetchMissionData() {
      try {
        // Make an HTTP GET request to your backend API endpoint for mission data
        const response = await this.$axios.get('http://localhost:3000/api/mission')
        this.missionText = response.data.missionText
      } catch (error) {
        console.error('Error fetching mission data:', error)
        // You might set default/fallback mission text or show an error message to the user
      }
    }
  }
}
</script>

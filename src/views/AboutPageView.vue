<template>
  <div>
    <AboutPage :aboutData="aboutData" />
  </div>
</template>

<script>
import AboutPage from '../components/AboutPage.vue'; // Adjust the path based on your project structure

export default {
  components: {
    AboutPage
  },
  data() {
    return {
      aboutData: null,
    };
  },
  async created() {
    // Fetch data from the backend when the component is created
    await this.fetchAboutData();
  },
  methods: {
    async fetchAboutData() {
      try {
        // Make an HTTP GET request to your backend API endpoint for about data
        const response = await this.$axios.get('http://localhost:3000/api/about');

        // Assuming your backend returns about data in the expected format
        this.aboutData = response.data;
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    },
  },
};
</script>



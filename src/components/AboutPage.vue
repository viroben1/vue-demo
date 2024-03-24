

<template>
  <div class="bg-indigo-100 p-6 text-sky-700">
    <h1 class="text-3xl font-semibold mb-4">{{ title }}</h1>
    <p class="text-lg mb-4">
      {{ welcomeMessage }}
    </p>
    <h2 class="text-2xl font-semibold mt-6 mb-2">{{ storyTitle }}</h2>
    <p class="mb-2">
      {{ story }}
    </p>
    <h2 class="text-2xl font-semibold mt-6 mb-2">{{ messageTitle }}</h2>
    <p class="mb-2">
      {{ message }}
    </p>
    <h2 class="text-2xl font-semibold mt-6 mb-2">{{ involvedTitle }}</h2>
    <p class="mb-2">
      {{ involvedMessage }}
    </p> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AboutPage',
  data() {
    return {
      title: 'About the International Flag of Peace',
      welcomeMessage: 'Welcome to the International Flag of Peace project. Our mission is to promote peace, unity, kindness, and tolerance among people from all walks of life, and every place in the world. This flag represents our commitment to a world where love, understanding, and compassion prevail.',
      storyTitle: 'The Story Behind the Flag',
      story: 'When the 9-11 attack happened, our visionary, Camille, felt a deep calling to create a symbol of peace that could belong to everyone living on this beautiful planet. That moment led to this journey of crafting the \'International Flag of Peace.\'',
      messageTitle: 'Our Message',
      message: 'The flag\'s colors and elements symbolize the core values of people everywhere. The blue represents peace, the green stands for harmony with nature and with each other, and the white symbolizes unity. Yellow is the sun, which is lighting our way each day; the heart, doves, and olive branches are the symbols of love. We believe in a world where kindness and charity prevail among our brothers and sisters everywhere.',
      involvedTitle: 'Get Involved',
      involvedMessage: 'If you resonate with our mission, we invite you to join us in promoting peace and spreading the message of the \'International Flag of Peace.\' Together, we can make our beautiful world a more peaceful place to live and thrive.',
    };
  },
  mounted() {
    // You can call a function here to fetch data from the backend and update the data properties
    // For simplicity, let's simulate a backend call with a timeout
    setTimeout(() => {
      this.fetchDataFromBackend();
    }, 1000); // Simulated delay of 1 second
  },
  methods: {
  async fetchDataFromBackend() {
    try {
      // Simulate fetching data from the backend API
      const response = await axios.get('http://localhost:3000/api/about');

      
      // Update the component data based on the fetched data
      this.title = response.data.title;
      this.welcomeMessage = response.data.welcomeMessage;
      // Repeat for other properties...
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  },
},
};
</script>



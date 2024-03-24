<template>
    <div class="FlagPage">
      <div class="p-4 bg-white text-sky-500">
        <p>
          {{ flagPageContent }}
        </p>
        <img :src="require('../assets/Camille Yogi - Flag - Int Flag of Peace.png')" alt="Flag" />

      </div>
    </div>
  </template>
  
  <script>
  // Import Axios if not already done
  // import axios from 'axios';
  
  export default {
    name: 'FlagPage',
    data() {
      return {
        flagPageContent: `
          My name is Camille. I am a peaceful soul, driven by the profound belief that a more harmonious world is not just a dream but an achievable reality.
          I envision a world characterized by unwavering kindness, compassion, and unity among all the diverse inhabitants of this beautiful planet.
  
          In the wake of the tragic 9/11 attack, I felt an even stronger calling within me to embark on a pathway to share this message of Peace.
          It was a resolute conviction that the people of our Earth needed a symbol, a flag, that could serve as a universal emblem of peace and hope.
          I envisioned a flag that transcended borders, languages, and cultures. A flag that belongs to every individual residing on this extraordinary planet.
  
          It was in that moment of clarity that a quiet yet resolute voice within me whispered, 'Why not? It's up to you.'
          And with that divine encouragement, I embarked on an inspiring journey to bring into existence the 'International Flag of Peace.'
  
          This mission statement is more than just a symbol; it's a testament to the power of shared values and our collective commitment to peace.
          It represents our unwavering dedication to creating a world where love, understanding, compassion and unity prevail.
          It is a reminder that peace is not an abstract concept. It is a choice we make every day.
  
          The 'International Flag of Peace' is a call to action, a call for individuals from all walks of life to come together, work together,
          and build a world that we can proudly pass on to future generations. It is a symbol of our shared humanity and our shared responsibility
          to create a better world for all.
        `,
        flagImageUrl: '../assets/Camille Yogi - Flag - Int Flag of Peace.png',
      };
    },
    mounted() {
      // Example using Axios
      // Replace '/api/flag' with the actual backend API endpoint
      // axios.get('/api/flag').then(response => {
      //   this.flagPageContent = response.data.flagPageContent;
      //   this.flagImageUrl = response.data.flagImageUrl;
      // }).catch(error => {
      //   console.error('Error fetching data:', error);
      // });
    },
  };
  </script>
  
  
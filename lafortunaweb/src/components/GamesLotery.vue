<template>
    <div class="grid-container">
      <div v-for="(section, index) in sections" :key="index" class="grid-item">
        <a :href="section.url" target="_blank">
          <img :src="section.img" :alt="section.text" class="image">
          <p class="text">{{ section.text }}</p>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GamesLotery',
    data() {
      return {
        sections: [
          { img: require('@/assets/1.png'), text: 'Sección 1', url: 'https://example1.com' },
          { img: require('@/assets/2.png'), text: 'Sección 2', url: 'https://example2.com' },
          { img: require('@/assets/3.png'), text: 'Sección 3', url: 'https://example3.com' },
          { img: require('@/assets/4.png'), text: 'Sección 4', url: 'https://example4.com' },
          { img: require('@/assets/5.png'), text: 'Sección 5', url: 'https://example5.com' },
          { img: require('@/assets/6.png'), text: 'Sección 6', url: 'https://example6.com' },
          { img: require('@/assets/7.png'), text: 'Sección 7', url: 'https://example7.com' },
          { img: require('@/assets/8.png'), text: 'Sección 8', url: 'https://example8.com' },
          { img: require('@/assets/9.png'), text: 'Sección 9', url: 'https://example9.com' },
          { img: require('@/assets/11.png'), text: 'Sección 10', url: 'https://example10.com' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
    background-color: #ffffff;
  }
  
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    border: 1px solid #4CAF50;
    border-radius: 5px;
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .grid-item:hover {
    transform: scale(1.05);
  }
  
  .image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 1rem;
  }
  
  .text {
    color: #4CAF50;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  </style>
  
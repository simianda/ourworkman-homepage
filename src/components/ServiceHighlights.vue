<template>
  <!-- Service category cards with hover effects -->
  <section class="service-categories">
    <h3>Service Categories</h3>
    <div class="service-grid">
      <div class="service-card" v-for="(service, index) in services" :key="index">
        <component :is="service.icon" class="service-icon" />
        <p class="service-name">{{ service.name }}</p>
        <span class="arrow"> > </span>
      </div>
    </div>
  </section>

  <!-- Horizontally scrollable featured services section -->
  <section class="featured-services">
    <div class="featured-header">
      <h3>Popular Services </h3>
      <router-link to="/services" class="view-all">
        View all <span class="arrow-right">></span>
      </router-link>
    </div>
    
    <div class="featured-container">
      <div class="featured-grid">
        <div class="featured-card"
             v-for="(item, index) in featured" 
             :key="index"
        >
          <img :src="item.image" :alt="item.name" class="card-image" />
          <div class="card-content">
            <h4>{{ item.name }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CookingIcon from '@/components/icons/CookingIcon.vue'

// Initial service categories with placeholder icons
const services = ref([
  { name: 'Cooking', icon: CookingIcon },
  { name: 'Cleaning', icon: CookingIcon },
  { name: 'Plumbing', icon: CookingIcon },
  { name: 'Electrical', icon: CookingIcon },
  { name: 'Gardening', icon: CookingIcon }
])

// Featured services with images and descriptions
const featured = [
  {
    name: 'Plumbing',
    desc: 'Expert plumbers for all your needs',
    image: new URL('@/assets/logo.svg', import.meta.url).href
  },
  {
    name: 'Electrical',
    desc: 'Certified electricians for safe installations',
    image: new URL('@/assets/logo.svg', import.meta.url).href
  },
  {
    name: 'Cleaning',
    desc: 'Professional cleaning services for your home',
    image: new URL('@/assets/logo.svg', import.meta.url).href
  },
  {
    name: 'Gardening',
    desc: 'Experienced gardeners to beautify your space',
    image: new URL('@/assets/logo.svg', import.meta.url).href
  }
]
</script>

<style scoped>
/* Main service categories section styling */
.service-categories {
  text-align: center;
  margin: 2rem 0;
}

/* Service categories title */
.service-categories h3 {
   text-align: left;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding-left: 2rem;
}



/* Grid layout for service cards */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); 
  gap: 0.75rem;
  width: 97%;
  margin: 0 auto;
}

/* Service card styling */
.service-card {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 1rem;
  width: 100%;
  text-align: left;
  gap: 1rem;
  transition: 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* Service card hover effects */
.service-card:hover {
  transform: translate(-4px);
  box-shadow: 0 4px 10px rgba(51, 2, 2, 0.1);
}

/* Add a pseudo-element for the hover background */
.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: blue;
  border-radius: 12px;
  opacity: 0;
  transition: 0.2s ease;
  z-index: 0;
}

.service-card:hover::before {
  opacity: 1;
}

/* Service icon styling */
.service-icon {
  width: 32px;  
  height: 32px; 
  background-color: white;
  padding: 10px;  
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

/* Service name styling */
.service-name {
  margin: 0; 
  font-size: 0.9rem; 
  font-weight: 500;
  color: #333;
  position: relative;
  z-index: 1;
}

/* Arrow styling */
.arrow {
  display: inline-block;
  font-size: 1rem; 
  color: #999;
  margin: 0; 
  transition: transform 0.2s ease;
  position: relative;
  z-index: 1;
}

.service-card:hover .arrow {
  transform: translateX(4px);
  color: #333;
}

/* Featured services section styling */
.featured-services {
  margin: 2rem 0;
  padding: 0 1.5rem;
}

/* Featured services header styling */
.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

/* View all link styling */
.view-all {
  text-decoration: none;
  color: #0066cc;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Arrow animation for view all link */
.arrow-right {
  transition: transform 0.2s ease;
}

.view-all:hover .arrow-right {
  transform: translateX(4px);
}

/* Horizontally scrollable container for featured services */
.featured-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}

/* Hide scrollbar for WebKit browsers */
.featured-container::-webkit-scrollbar {
  display: none; 
}

/* Flexbox layout for featured service cards */
.featured-grid {
  display: flex;
  gap: 4rem;
  padding: 0.5rem 0;
  min-width: min-content;
}

/* Featured card styling */
.featured-card {
  flex: 0 0 auto;
  width: 280px; 
  position: relative;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  background: white;
  overflow: hidden;
}

.featured-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

/* Card image styling */
.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Card content styling */
.card-content {
  padding: 1rem;
}

.card-content h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
}

.card-content p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

/* Remove old overlay styles */
.card-overlay {
  display: none;
}

/* Responsive adjustments for different screen sizes */
@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .service-card {
    padding: 0.5rem;
  }
  
  .service-name {
    font-size: 0.8rem;
  }

  .featured-services {
    padding: 0 1rem;
  }

  .featured-card {
    width: 240px;
  }

  .service-icon {
    width: 28px;
    height: 28px;
    padding: 8px;
  }
}

@media (max-width: 1024px) {
  .featured-grid {
    gap: 2rem; 
  }
  
  .service-categories h3 {
    padding-right: 70%; 
  }
}
</style>

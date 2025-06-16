<template>
  <section class="services-section">
    <!-- Left: Heading -->
    <div class="services-left">
      <div class="heading-group">
        <h2>Services Near You</h2>
        <p class="subheader">Trending Jobs</p>
      </div>
    </div>

    <!-- Right: Services Grid -->
    <div class="services-right">
      <div class="services-grid">
        <div
          class="service-item"
          v-for="(service, index) in services"
          :key="index"
        >
          {{ service }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  'Plumbing Repair',
  'Pest Control',
  'Air Conditioner Repair',
  'Door Lock Repair',
  'Furniture Assembly',
  'Carpentry Services',
  'TV Wall Mounting',
  'Painting & Wall Repair',
  'House Cleaning',
  'Gutter Cleaning',
  'Toilet & Faucet Installation',
  'Electrical Work'
])
</script>

<style scoped>
.services-section {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 40px auto;
  padding: 20px;
  gap: 2rem;
}

/* Left side: heading */
.services-left {
  flex: 1;
  min-width: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.heading-group {
  text-align: left;
}

.heading-group h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheader {
  font-size: 16px;
  color: #555;
}

/* Right side: services list */
.services-right {
  flex: 2;
  min-width: 300px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.service-item {
  font-size: 14px;
  color: #0073e6;
  padding: 10px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .services-section {
    flex-direction: column;
  }

  .services-left {
    justify-content: center;
    margin-bottom: 20px;
  }

  .heading-group h2 {
    font-size: 22px;
    text-align: center;
  }

  .subheader {
    font-size: 14px;
    text-align: center;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <!-- Customer testimonials carousel section -->
  <section class="testimonials-section">
    <h2>What Our Customers Are Saying</h2>
    <p>
      Real stories from people who use OurWorkMan to solve real problems — faster and with no stress.
    </p>

    <!-- Dynamic testimonial cards with slide functionality -->
    <div class="testimonials-container">
      <div
        class="testimonial-card"
        v-for="(testimonial, index) in testimonials"
        :key="index"
        v-show="testimonial.active"
      >
        <!-- User profile header -->
        <div class="testimonial-header">
          <div class="testimonial-photo"></div>
          <div class="testimonial-info">
            <h3>{{ testimonial.name }}</h3>
            <span>{{ testimonial.location }}</span>
          </div>
        </div>
        <p class="testimonial-text">
          "{{ testimonial.message }}"
        </p>
      </div>
    </div>

    <!-- Navigation controls -->
    <div class="carousel-navigation">
      <button @click="prevSlide">&larr;</button>
      <button @click="nextSlide">&rarr;</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Testimonial data with active state management
const testimonials = ref([
  {
    name: 'Sarah',
    location: 'Lagos, Nigeria',
    message: 'I booked a plumber on OurWorkMan and within 30 minutes someone was at my door. I\'ve never had home repairs this smooth. Total game changer!',
    active: true
  },
  {
    name: 'Michael',
    location: 'Abuja, Nigeria',
    message: 'Honestly, I didn\'t think I\'d find a reliable technician so fast. OurWorkMan made it ridiculously easy.',
    active: false
  },
  {
    name: 'Ada',
    location: 'Port Harcourt, Nigeria',
    message: 'I love how professional the handyman was. Signed up for more jobs immediately.',
    active: false
  },
]);

// Carousel navigation handlers
function prevSlide() {
  const currentIndex = testimonials.value.findIndex(
    (testimonial) => testimonial.active
  );
  if (currentIndex > 0) {
    testimonials.value[currentIndex].active = false;
    testimonials.value[currentIndex - 1].active = true;
  }
}

function nextSlide() {
  const currentIndex = testimonials.value.findIndex(
    (testimonial) => testimonial.active
  );
  if (currentIndex < testimonials.value.length - 1) {
    testimonials.value[currentIndex].active = false;
    testimonials.value[currentIndex + 1].active = true;
  }
}
</script>

<style scoped>
/* Main container styles */
.testimonials-section {
  max-width: 1280px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
  background-color: rgb(248, 235, 224);
}

/* Carousel container configuration */
.testimonials-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: hidden;
}

/* Individual testimonial card styling */
.testimonial-card {
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 20px;
  max-width: 500px;
  text-align: left;
  flex: 0 0 auto;
  width: 100%;
}

/* User profile layout */
.testimonial-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

/* Profile image placeholder */
.testimonial-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
}

/* Typography settings */
.testimonial-info h3 {
  font-size: 16px;
  margin: 0;
}

.testimonial-info span {
  font-size: 14px;
  color: #777;
}

.testimonial-text {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
  margin-top: 10px;
}

/* Navigation controls styling */
.carousel-navigation {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.carousel-navigation button {
  background: #0073e6;
  color: #ffffff;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.carousel-navigation button:hover {
  background: #005bb5;
}

@media (max-width: 1024px) {
  .testimonials-container {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .testimonial-card {
    min-width: 100%;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    max-width: 100%;
  }
}
</style>

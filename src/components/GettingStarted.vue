<template>
  <section class="how-it-works">
    <!-- Orientation tagline section -->
    <div class="tagline-container">
      <div class="tagline-how">🌐 How it works</div>
    </div>

    <h2 class="section-title">Getting Started is Easy</h2>

    <!-- Two-column layout container -->
    <div class="steps-container">
      
      <div class="steps-left">
        <img src="" alt="illustration" />
        <div class="step-visual"></div>
      </div>

      <!-- Onboarding steps column -->
      <div class="steps-right">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
        >
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="step-buttons">
          <button class="btn-primary">
            <router-link to="/register">Sign up for Free</router-link>
          </button>
          <button class="btn-secondary">Join as a handyman</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Core onboarding steps data
const steps = [
  {
    title: 'Select a Service',
    desc: 'Browse our catalog of professional services and select exactly what you need.',
  },
  {
    title: 'Book Instantly',
    desc: "Set a date and time that fits your schedule. Whether it's same-day or next week.",
  },
  {
    title: 'Sit back and Relax',
    desc: 'Our team handles everything from matching you with a trusted handyman to job updates.',
  }
]
</script>

<style scoped>
/* Container styles */
.how-it-works {
  padding: 3rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

/* Header components */
.tagline-container {
  text-align: center;
  margin-bottom: 2rem;
}

.tagline-how {
  font-size: 0.8rem;
  color: black;
  background-color: #f0f0f0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 14px;
  margin-bottom: 1rem;
}

/* Main section typography */
.section-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

/* Layout grid configuration */
.steps-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
}

/* Visual content styles */
.steps-left {
  flex: 1;
  min-width: 300px;
}

.step-visual {
  background-color: #e0e0e0;
  height: 485px;
  width: 80%;
  border-radius: 12px;
  margin: 0 auto;
}

/* Steps content configuration */
.steps-right {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Individual step styling */
.step {
  padding-top: 5%;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.step-number {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 2px solid #0073e6;
  color: #0073e6;
  font-weight: bold;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  font-size: 1.5rem;
  flex-shrink: 0;
}

/* Step content typography */
.step-content .step-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.step-content .step-desc {
  margin-top: 4px;
  font-size: 1rem;
  color: #666;
}

/* CTA button styles */
.step-buttons {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary a {
  color: white;
  text-decoration: none;
}

.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #0073e6;
  border: 1px solid #0073e6;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

/* Responsive layout adjustments */
@media (max-width: 1024px) {
  .how-it-works {
    padding: 2rem 1rem;
  }

  .steps-container {
    flex-direction: column;
    gap: 2rem;
  }

  .steps-left {
    order: 1;
  }

  .steps-right {
    order: 2;
  }

  .step-visual {
    width: 100%;
    height: 300px;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .step {
    padding-top: 1rem;
  }

  .step-content .step-title {
    font-size: 1.2rem;
  }

  .step-content .step-desc {
    font-size: 0.9rem;
  }

  .step-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
}

/* Small screen adjustments */
@media (max-width: 480px) {
  .how-it-works {
    padding: 1.5rem 1rem;
  }

  .step-number {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 1.2rem;
  }

  .step-visual {
    height: 200px;
  }
}
</style>

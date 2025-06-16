<template>
  <!-- Split layout: text left, features right -->
  <section class="split-screen">
   
    <div class="left-section">
   
      <div class="tagline">
        🌐 Why OurWorkman?
      </div>

      <h2>Why Choose OurWorkMan</h2>

      <p>
        We’re not just another handyman platform — we’re built for trust, speed, and support that actually delivers.
        Here’s why thousands count on us daily.
      </p>
    </div>

    <!-- Right features grid -->
    <div class="right-section">
      <div class="features-grid">
       
        <div
          class="feature"
          v-for="(item, index) in features"
          :key="index"
        >
         
          <div class="feature-icon">{{ item.icon }}</div>

       
          <h3>{{ item.title }}</h3>

          
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//  This section explains WHY users should choose OurWorkman


//  Replace emojis later if needed
const features = [
  {
    icon: '👷',
    title: 'Vetted Professional',
    desc: 'All handymen are identity-verified, skill-tested, and quality-assured.'
  },
  {
    icon: '🔒',
    title: 'Secured Payments',
    desc: 'Transparent pricing and secure online payments, always.'
  },
  {
    icon: '📅',
    title: 'Instant Booking and Updates',
    desc: 'Schedule services with just a few taps and track every job live.'
  },
  {
    icon: '🎧',
    title: 'Dedicated Support Team',
    desc: 'Our responsive in-house support team is available around the clock to resolve issues and answer questions.'
  }
]
</script>
<style scoped>

.split-screen {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px; 
  padding: 60px 40px; 
  gap: 40px;
  justify-content: space-between;
}


.left-section {
  flex: 1;
  min-width: 320px;
  max-width: 600px; 
}

.left-section h2 {
  font-size: 36px;
  margin-bottom: 14px;
}

.left-section p {
  font-size: 18px;
  color: #444;
  line-height: 1.7;
}

.tagline {
  font-size: 16px;
  color: #0073e6;
  font-weight: bold;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}


.right-section {
  flex: 1.5;
  min-width: 400px;
}

/*  Responsive features grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}


.feature {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 30px;
  text-align: left;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}
.feature:hover {
  transform: translateY(-4px);
}
.feature-icon {
  font-size: 36px;
  margin-bottom: 14px;
  color: #0073e6;
}


.feature h3 {
  font-size: 20px;
  margin: 0 0 10px;
  font-weight: 600;
}
.feature p {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .split-screen {
    padding: 40px 20px;
    flex-direction: column;
    align-items: center;
  }

  .left-section {
    text-align: center;
    max-width: 100%;
  }

  .right-section {
    min-width: 100%;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .split-screen {
    padding: 30px 15px;
  }

  .left-section h2 {
    font-size: 28px;
  }

  .left-section p {
    font-size: 16px;
  }

  .feature {
    padding: 20px;
  }

  .feature h3 {
    font-size: 18px;
  }

  .feature p {
    font-size: 14px;
  }

  .feature-icon {
    font-size: 28px;
  }
}
</style>

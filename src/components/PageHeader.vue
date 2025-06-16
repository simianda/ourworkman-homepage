<template>
  <section class="page-header">
    <div class="tagline">
      🌐 Home help, only a click away
    </div>
    <br />
    <h1 class="line-one">Book Trusted workmen</h1>
    <h1 class="line-two">For any Job———Instantly</h1>
  </section>
</template>

<script setup>
// no script yet
</script>

<style scoped>
.page-header {
  text-align: center;
  margin: 2rem 0;
  padding-top: 2rem;
}
.tagline {
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
.line-one,
.line-two {
  font-size: 3rem;
  font-weight: 600;
  color: black;
}
@media (min-width: 1440px) {
  .page-header {
    max-width: 1280px;
    margin: 2rem auto;
  }
}
@media (max-width: 768px) {
  .line-one,
  .line-two {
    font-size: 2rem; 
  }
  
  .tagline {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
}

@media (max-width: 480px) {
  .line-one,
  .line-two {
    font-size: 1.5rem;
  }
}
</style>

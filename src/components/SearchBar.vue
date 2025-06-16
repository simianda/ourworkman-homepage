<template>
  <section class="search">
    <input
      type="text"
      placeholder="What do you need help with?"
      v-model="searchQuery"
    />
    <button class="search-button">
      <SearchIcon />
    </button>
  </section>
</template>

<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto;
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;
}

.search input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 999px 0 0 999px;
  font-size: 1rem;
  outline: none;
}

.search-button {
  padding: 0.75rem 1rem;
  background-color: blue;
  color: white;
  border: 1px solid #ccc;
  border-radius: 0 999px 999px 0;
  cursor: pointer;
  font-size: 0.9rem;
}
</style>

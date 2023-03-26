<template>
  <main class="app">
    <h1>Quiz App</h1>
    <!-- section question -->
      <!-- questions -->
      <!-- next button -->
    <!-- section result -->
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
 
const questions = ref([
    {
      question: "Question A?",
      answer:0,
      options: [
        'answer a',
        'answer b',
        'answer c',
      ],
      selected: null
    },
    {
      question: "Question B?",
      answer:2,
      options: [
        'answer a',
        'answer b',
        'answer c'
      ],
      selected: null
    },
    {
      question: "What is C?",
      answer:1,
      options: [
        'answer a',
        'answer b',
        'answer c',
      ],
      selected: null
    },
])
</script>

<style></style>
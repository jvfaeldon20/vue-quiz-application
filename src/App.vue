<template>
  <main class="app">
    <h1>Quiz App</h1>
    <section class="quiz">
      <div class="quiz-info">
        <span class="question">{{ questions[0].question }}</span>
        <span class="score">Score {{ 1 }}/{{ 3 }}</span>
      </div>

      <div class="options">
        <label 
            class="`option correct`"
        >
          <input 
            type="radio"
          >
          <span>{{ 1 }}</span>
        </label>

        <label 
            class="`option correct`"
        >
          <input 
            type="radio"
          >
          <span>{{2 }}</span>
        </label>

        <label 
            class="`option correct`"
        >
          <input 
            type="radio"
          >
          <span>{{ 3 }}</span>
        </label>
      </div>

      <button>
        {{ 
            'Next Question'
        }}
      >

      </button>
    </section>
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
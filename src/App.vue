<template>
  <main class="app">
    <h1>Quiz App</h1>
    <section class="quiz">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }}/{{ questions.length }}</span>
      </div>

      <div class="options">
        <label 
            v-for="(option, index) in getCurrentQuestion.options" 
            :key="index"
            :class="`option ${
                getCurrentQuestion.selected == index 
                  ? index == getCurrentQuestion.answer 
                      ? 'correct':'wrong'
                  : ''
            } ${
                getCurrentQuestion.selected  != null &&
                index != getCurrentQuestion.selected
                  ? 'disabled'
                  : ''
            }`"
        >
          <input 
            type="radio"
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="setAnswer"
          >
          <span>{{ option }}</span>
        </label>
      </div>

      <button
        @click="nextQuestion"
        :disabled="!getCurrentQuestion.selected">
        {{ 
            getCurrentQuestion.index == questions.length - 1
            ? 'Select an option'
            : 'Next Question'
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

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
  let value = 0
  questions.value.map(q => {
    if(q.selected == q.answer){
      value++
    }
  })
  return value
})

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const setAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const nextQuestion = () => {
  if(currentQuestion.value < questions.value.length - 1){
    currentQuestion.value++
  }else{
    quizCompleted.value = true
  }
}

</script>

<style></style>
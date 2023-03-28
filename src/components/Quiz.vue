<template>
    <main class="app">
      <h1>Quiz App</h1>
      <section class="quiz" v-if="!quizCompleted">
        <div class="question-no">QUESTION {{ currentQuestion+1 }}/{{ questions.length }}</div>
        <div class="question">{{ getCurrentQuestion.question }}
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
              ? 'Submit'
              : 'Next'
          }}
        </button>
      </section>
  
      <section v-else>
          <p>You have finished the quiz!</p>
          <div class="score-info">
            <p>Your score is {{ score }} / {{ questions.length }}</p><br>
            <h1 class="course-level">{{ score == 0 ? score_info[0].level : score_info[score-1].level }}</h1>
            <p class="course-details">Check out course Test&Train Self-Study {{ score_info[0].level }}.</p>
            <a class="btn-checkout" :href="score_info[0].link" target="_blank">Checkout details</a>
          </div>
          <router-link  class="btn-homepage" :to="{name: 'home'}">Go to Homepage</router-link>
        </section>
        
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
   
  const questions = ref([
      {
        question: "Jack loves working in Tokyo but he can't ________ Japanese yet.",
        answer:0,
        options: [
          'speak',
          'talk',
          'say',
          'tell'
        ],
        selected: null
      },
      {
        question: "Would you like to ________ shopping with me this afternoon?",
        answer:3,
        options: [
          'do',
          'make',
          'get',
          'go'
        ],
        selected: null
      },
      {
        question: "Please don't forget to ring me when you ________ home.",
        answer:1,
        options: [
          'will get',
          'get',
          'are going to get',
          'are getting'
        ],
        selected: null
      },
  ])
  
  const score_info = ref([
      {
        score_for: "Low Score",
        level: "B2 First, C1 Advanced",
        link:"https://order.cambridge.org/basket?token=1167172d-e16c-451c-8f27-1fb01efcda99&lang=en&cur=EUR&returnurl=https%3A%2F%2Fwww.testandtrain.com&_ga=&clientId=&sessionId=",
      },
      {
        score_for: "Average Score",
        level: "B2 First for Schools",
        link:"https://order.cambridge.org/basket?token=e8892060-0fe8-43bd-bd5e-bcecadac6093&lang=en&cur=EUR&returnurl=https%3A%2F%2Fwww.testandtrain.com&_ga=&clientId=&sessionId=",
      },
      {
        score_for: "High Score",
        level: "B1 Preliminary for Schools, A2 Key for Schools",
        link:"https://order.cambridge.org/basket?token=24df1c52-13ee-4258-90e7-f0a1e6350bd1&lang=en&cur=EUR&returnurl=https%3A%2F%2Fwww.testandtrain.com&_ga=&clientId=&sessionId=",
      }
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
  
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    background-color: #271C36;
    color: #fff;
  }
  
  .app {
    width: 12;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    min-height: 100vh;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .quiz{
    background-color: #382a4b;
    padding: 2rem;
    width: 100%;
    max-width: 640px;
    border-radius: 0.5rem;
  }
  
  .question{
    color: #8f8f8f;
    font-size: 1.25rem;
  }
  
  .quiz-info .question-no {
    color: #fff;
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
  
  .options {
    margin-bottom: 1rem;
  }
  
  .option {
    display: block;
    text-align: left;
    padding: 1rem;
    background-color: #271c36;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  
  .option:hover {
    background-color: #2d213f;
  }
  
  .option.correct {
    background-color: #2cce7d;
  }
  
  .option.wrong {
    background-color: #ff5a5f;
  }
  
  .option:last-of-type {
    margin-bottom: 0;
  }
  
  .option.disabled {
    opacity: 0.5
  }
  
  .option input {
    display:none
  }
  
  button, a{
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    background-color: #2cce7d;
    color:#2d213f;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    border-radius: 0.5rem;
  }
  
  button:disabled{
    opacity: 0.5;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  p {
    color: #8f8f8f;
    font-size: 1.25rem;
    text-align: center;
  }
  
  .question{
    margin-bottom: 10px;
  }
  
  .score-info {
    margin-bottom: 20px;
  }

  .score-info .course-details{
    margin-bottom: 2rem;
  }
  
  .score-info .course-level{
    padding: 2rem;
    background: #2d213f;
  }

  .btn-checkout {
    text-decoration: none;
  }

  .btn-homepage{
    background: none;
    color: #fff;
    text-decoration: none;
  }
  </style>
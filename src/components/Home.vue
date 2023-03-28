<template>
  <main class="box-container">
    <h1>Vue Quiz App</h1>
    <p>a simple multiple-choice quiz application with a course recommendation upon completion of the quiz.</p>
    <router-link :to="{name: 'quiz'}" class="btn">Start</router-link>
  </main>
</template>


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

.box-container {
  width: 100%;
  text-align: center;
  flex-direction: column;
  padding: 2rem;
  background: #2d213f;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.quiz{
  background-color: #382a4b;
  padding: 2rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
}



.button, a{
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
  text-decoration: none;
  align-content: center;
  width: 5rem;
  padding: 0.75rem;
}

p{
  color: #8f8f8f;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}
</style>
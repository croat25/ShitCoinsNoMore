<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBarYo from './components/NavBarYo.vue'
import HistoricalChart from './components/HistoricalChart.vue'
import HistoricalChartEth from './components/HistoricalChartEth.vue'
import HistoricalChartXmr from './components/HistoricalChartXmr.vue'
</script>

<template>
  <header> 
    <H1>Leet Coining Featuring Bruno Jenkins</H1>
    <h4>Dont Waste ur time with all the shitcoins</h4>
    <h4>only focus on the real coins</h4>
    <br><br><br>
    <NavBarYo />

    <div class="wrapper">

    </div>
  </header>

  <br>
  <br>
  <br>

  <HistoricalChart />
  <HistoricalChartEth />
  <HistoricalChartXmr />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

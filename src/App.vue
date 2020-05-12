<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  ::-webkit-scrollbar{width: 6px;}
  ::-webkit-scrollbar-track {background-color: transparent;}
  ::-webkit-scrollbar-thumb { background-color:#d3e0e3;border-radius:3px;}
  ::-webkit-scrollbar-button { display:none;}
  ::-webkit-scrollbar-resizer {display:none;}
</style>

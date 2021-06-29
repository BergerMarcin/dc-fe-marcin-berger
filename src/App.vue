<template>
  <section class="flex items-center my-8 ml-140px">
    <img alt="Vue logo" src="./assets/rick-and-morty.png" class="mr-20">
    <p>SEARCHING</p>
  </section>

  <section class="my-8 ml-140px">
    <table>
      <thead>
      <tr class="my-6">
        <th scope="col" colspan="1">Item</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
      </tr>
      </thead>
      <tbody class="my-6">
      <tr>
        <td>Item 1</td>
        <td>1</td>
        <td>$30.02</td>
      </tr>
      <tr>
        <td>Item 2</td>
        <td>2</td>
        <td>$52.94 ($26.47 &#215; 2)</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="2">Total</td>
        <td>$148.90</td>
      </tr>
      </tfoot>
    </table>
  </section>

  <section class="flex ml-140px">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </section>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  // responsibility moved to TailwindCSS with `./tailwind.config.js` and `./assets/styles/index.css`
}

.ml-140px {
  margin-left: 140px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(3)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>

  <div class="row green">
    <div class="col">
      One of three columns1
    </div>
    <div class="col">
      One of three columns2
    </div>
    <div class="col">
      One of three columns3
    </div>
  </div>


</template> 


<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
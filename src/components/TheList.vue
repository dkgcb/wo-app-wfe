<script setup>
import { ref, onMounted } from 'vue'
import requestsData from './../assets/datasample.json'

// reactive state
const count = ref(3)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}


// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
  console.log(`The array length is ${thelist.length}.`)
})


</script> 

<template>
   <div class="row g-3">
   <table class="table">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Requester</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Submitted</th>
          <th scope="col">Status</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in requestsData" v-bind:key="item.appid">
          <td scope="col">{{item.appid}}</td>
          <td scope="col">{{item.requester}}</td>
          <td scope="col">{{item.title}}</td>
          <td scope="col">{{item.description}}</td>
          <td scope="col">{{item.submitted}}</td>
          <td scope="col">{{item.status}}</td>
          <td scope="col">{{item.assigned}}</td>
        </tr>
        
      </tbody>
    </table>
    </div>
</template> 


<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

</style>
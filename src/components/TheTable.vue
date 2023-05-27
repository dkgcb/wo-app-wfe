<template>
    <div class="grid">
            <div class="col">
                   <DataTable :value="workOrders" tableStyle="min-width: 50rem">
                    <Column field="item_id" header="Work Order ID"></Column>
                    <Column field="item_name" header="Subject"></Column>
                    <Column field="descr" header="Description"></Column>
                    <Column field="requester" header="Requester"></Column>
                    <Column field="submit_dt" header="Submitted"></Column>
                    <Column field="assignee" header="Assigned To"></Column>
                    <Column field="status" header="Status"></Column>
                   </DataTable>
            </div>
    </div>

</template> 

<script setup>
/*
  imports
*/
import axios from 'axios';
import { ref, onMounted } from 'vue';
// import workOrders from '../assets/datasample.json';

onMounted(() => {
    axios.get('http://127.0.0.1:5000/api/items')
      .then(function (response) {
        // handle success
        // console.log(response.data.items);
        // response.data.items.forEach(element => {
        //   workOrders.push(element);
        // });
        workOrders.value = response.data.items;
        console.log(workOrders);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
});

const workOrders = ref([]);


</script>
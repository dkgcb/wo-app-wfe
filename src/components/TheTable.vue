<template>
    <div class="grid">
            <div class="col">{{store.workOrders}}
                   <DataTable :value="store.workOrders" tableStyle="min-width: 50rem">
                    <Column field="item_id" header="Work Order ID"></Column>
                    <Column field="item_name" header="Subject"></Column>
                    <Column field="descr" header="Description"></Column>
                    <Column field="requester" header="Requester"></Column>
                    <Column field="submit_dt" header="Submitted"></Column>
                    <Column field="assignee" header="Assigned To"></Column>
                    <Column field="status" header="Status"></Column>
                   </DataTable>
            </div>
    </div>{{store.doubleCount}}

</template> 

<script setup>
/*
  imports
*/

import { useWorkOrderStore } from '.././store/workorderStore';
import { ref, onMounted } from 'vue';
// import workOrders from '../assets/datasample.json';

const store = useWorkOrderStore();
// const x = workOrderStore.increment();
console.log(store.increment())

onMounted(() => {
  store.getWorkOrderList
});

/*
Store
*/

setTimeout(() => {
  console.log(store.increment())
}, 1000)



// console.log(workOrderStore.workOrders);

</script>
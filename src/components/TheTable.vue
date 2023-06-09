<template>
    <div class="grid">
        <button type="button" @click="increment" name="Click">Click</button>
            <div class="col">{{store.doubleCount}}
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
    </div> 

</template> 

<script setup>
/*
  imports
*/

import { useWorkOrderStore } from '.././store/workorderStore';
import { ref, onMounted } from 'vue';


/*
Store
*/

const store = useWorkOrderStore();

/*
  Hooks
*/

onMounted(() => {
  store.getWorkOrderList();
  store.increment();
});


</script>
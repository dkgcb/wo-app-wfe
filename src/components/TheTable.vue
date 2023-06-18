<template>
<button type="button" @click="storeItems.increment" name="Click">Click</button>
    <div class="grid">
            <div class="col">
                   <DataTable :value="storeItems.items" tableStyle="min-width: 50rem">
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
import { useItemsStore } from '@/stores/itemsStore';

/*
Store
*/

const storeItems = useItemsStore();

/*
  Hooks
*/

storeItems.getItemsList_API();


</script>
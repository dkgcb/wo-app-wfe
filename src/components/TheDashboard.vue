<template>


  <div>
    <div v-show="!showTheForm" class="col">
      <Button label="New Item" @click.prevent="addNewItem" type="submit" > <i class="pi pi-plus" style="color: white; font-size: 1rem" ></i> New Item</Button>
    </div>
    <!-- <learn></learn> -->
    <the-form v-show="showTheForm" @close-form="showTheForm = false"></the-form>
    <the-table></the-table>
  </div>
</template> 

<script setup>
/*
  imports
*/
// import Learn from './Learn.vue'
import TheForm from '@/components/TheForm.vue'
import TheTable from '@/components/TheTable.vue'
import router from '@/router'
import { ref } from 'vue'

/*
  Methods
*/
const showTheForm = ref(false);

function addNewItem() {
  console.log("addNewItem");
  // router.push({ path: '/item/new' });
  showTheForm.value = true;
};



</script>
<template>
  <div class="grid">
    <form @submit.prevent="onFormSubmit">
        <div class="field">
            <label for="subject" class="col-fixed" style="width:100px">Subject</label>
            <div class="col">
                <input id="subject" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary">
            </div>
        </div>
        <div class="field">
            <label for="description" class="col-fixed" style="width:100px">Description</label>
            <div class="col">
                <Textarea v-model="value" id="description" rows="5" cols="30" />
            </div>
        </div>
        <div class="col">
            <Button label="Submit" type="submit" size="small" @click.prevent="onFormSubmit" />
            &nbsp;<Button label="Cancel" severity="danger" size="small" type="cancel" @click.prevent="$emit('closeForm')"  />
        </div>

    </form>
  </div>
</template> 

<script setup>
/*
  imports
*/
import axios from 'axios';
import { ref } from 'vue';
import { useItemsStore } from '@/stores/itemsStore';

/*
Store
*/
const storeItems = useItemsStore();

/*
  Hooks
*/
let formData = ref({});

/*
  Methods
*/
function onFormSubmit(){
  console.log(subject.value);
  formData = {
    "descr": description.value,
    "item_name": subject.value,
    "assignee": "karand",
    "requester": "johnd",
    "loc": "Roof, Building 25"
};


storeItems.postItem_API();
console.log(formData);
}

</script>
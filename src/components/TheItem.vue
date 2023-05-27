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
            <Button label="Submit" type="submit" />
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
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
console.log( route.params);



// let formData = ref({});

// const onFormSubmit = () => {
//       console.log(subject.value);
//       formData = {
//           "descr": description.value,
//           "item_name": subject.value,
//           "assignee": "karand",
//           "requester": "johnd",
//           "loc": "Roof, Building 25"
//        };

//        console.log(formData);

//        axios.get('http://127.0.0.1:5000/api/item',{
                  
//                       "descr": description.value,
//                       "item_name": subject.value,
//                       "assignee": "karand",
//                       "requester": "johnd",
//                       "loc": "Roof, Building 25"
                  
//                 })
//                 .then(function (response) {
//                   // handle success
//                   // console.log(response.data.items);

//                 })
//                 .catch(function (error) {
//                   // handle error
//                   console.log(error);
//                 })
//                 .finally(function () {
//                   // always executed
//                 });
//  }

</script>
<template>
   <div>  {{title}} World!
   <table class="table">
  
      <thead>
          <tr>
            <th v-for="item in customColumns" :key="item.columnHeaderName">{{item.columnHeaderName}}</th>
          </tr>
      </thead>
      <tbody>

        <tr v-for="item in custom_data" v-bind:key="item">
         <td v-for="i in item" v-bind:key="i">{{i}}</td>
        </tr>
        
      </tbody>
    </table>
    </div>
</template> 

<script setup>

/*
  Imports
  */
  import { ref } from 'vue'

/*
  Data
  */
  // const title = ref("This is my title")

/*
  table data, 'customData', 'customColumns'
*/
  const tableProps = defineProps(['title','customColumns','customData'])

  console.log(tableProps.title)
  console.log(tableProps.customData)
   
</script> 


<style>

</style>
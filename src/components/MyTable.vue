<script>
// import MyTableHeader from './MyTableHeader.vue'
export default {
  props: ['title', 'custom_data', 'custom_columns', 'custom_column_headers', 'custom_options'],
  data() {
    return {
      count: 0,
    }
  },
  methods: {

  },

  onmount: function(){
    
  }
  
  
}
</script> 

<template>
   <div>
   <table border="1">
      <thead>
          <tr>
            <th v-for="item in custom_column_headers" :key="item.columnHeaderName">{{item.columnHeaderName}}</th>
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


<style>

</style>
<script>
export default {
  
}
</script> 

<template>
   <div>
      <slot name="header"></slot>
    </div>

</template> 
<template v-slot:header>
  <!-- content for the header slot -->
  <tr  v-for="item in custom_column_headers" :key="item.appid">
          <th v-text="item.columnHeaderName"></th>
    </tr>
</template>


<style>

</style>
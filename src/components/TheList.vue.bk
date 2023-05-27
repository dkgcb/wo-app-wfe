<script>

import MyTable from './MyTable.vue'


export default {
  components: {
    MyTable
  },
  data() {
    return {
      count: 0,
      // customColumnHeaders: ['AppID','Requester','Title','Description','Submitted','Status','Assigned'],
      customColumnHeaders: [
          {
            columnHeaderName: "App ID",
            customColumnData: "appid"
          },
          {
            columnHeaderName: "Requester",
            customColumnData: "requester"
          },
          {
            columnHeaderName: "Title",
            customColumnData: "title"
          },
          {
            columnHeaderName: "Description",
            customColumnData: "description"
          },
          {
            columnHeaderName: "Submitted",
            customColumnData: "submitted"
          },
          {
            columnHeaderName: "Status",
            customColumnData: "status"
          },
          {
            columnHeaderName: "Assigned",
            customColumnData: "assigned"
          }

      ],
       
      customData: [
                    {
                      "appid": 1234567,
                      "requester": "Doe, John",
                      "title": "Lorem ipsum dolor sit amet",
                      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor interdum, porttitor quam vel, interdum lectus. Phasellus luctus consequat massa. Nulla tincidunt ut tellus et vulputate. Nunc in erat est. Aenean sem augue, rutrum eu scelerisque in, imperdiet a arcu. Cras vitae lorem vestibulum, sodales dui non, tempor turpis. Nunc porta cursus rutrum. Duis vitae ullamcorper leo, sit amet commodo justo. Vestibulum eget leo maximus, luctus mi bibendum, convallis tortor.",
                      "submitted": "11/24/2022 3:35 PM",
                      "status": "in-progress",
                      "assigned": "Doet, Jan"
                    },
                    {
                      "appid": 1234567,
                      "requester": "Doe, John",
                      "title": "Lorem ipsum dolor sit amet",
                      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor interdum, porttitor quam vel, interdum lectus. Phasellus luctus consequat massa. Nulla tincidunt ut tellus et vulputate. Nunc in erat est. Aenean sem augue, rutrum eu scelerisque in, imperdiet a arcu. Cras vitae lorem vestibulum, sodales dui non, tempor turpis. Nunc porta cursus rutrum. Duis vitae ullamcorper leo, sit amet commodo justo. Vestibulum eget leo maximus, luctus mi bibendum, convallis tortor.",
                      "submitted": "11/25/2022 4:15 PM",
                      "status": "in-progress",
                      "assigned": "Doe, Jannie"
                    },
                    {
                      "appid": 1234567,
                      "requester": "Doe, John",
                      "title": "Lorem ipsum dolor sit amet",
                      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor interdum, porttitor quam vel, interdum lectus. Phasellus luctus consequat massa. Nulla tincidunt ut tellus et vulputate. Nunc in erat est. Aenean sem augue, rutrum eu scelerisque in, imperdiet a arcu. Cras vitae lorem vestibulum, sodales dui non, tempor turpis. Nunc porta cursus rutrum. Duis vitae ullamcorper leo, sit amet commodo justo. Vestibulum eget leo maximus, luctus mi bibendum, convallis tortor.",
                      "submitted": "11/25/2022 4:35 PM",
                      "status": "in-progress",
                      "assigned": "Doeem, Jane"
                    }
                  ]
    }
  },
}
</script> 

<template>
   <div>
    <my-table :custom_data="customData" :custom_columns="customColumns" :custom_column_headers="customColumnHeaders" :custom_options="customOptions" />
   </div>
</template> 


<style>
/* @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"); */
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

</style>
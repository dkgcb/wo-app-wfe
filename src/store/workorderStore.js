import { defineStore } from 'pinia'
import axios from 'axios';
// import workOrders from '../assets/datasample.json';


export const useWorkOrderStore = defineStore('storeWorkOrders', {
    state: () => {
        return { 
            workOrders: [],
            count: 0,
            //  workOrders: [
            //     {
            //         "item_id": 1234567,
            //         "requester": "Doe, John",
            //         "item_name": "Lorem ipsum dolor sit amet",
            //         "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor interdum, porttitor quam vel, interdum lectus. Phasellus luctus consequat massa. Nulla tincidunt ut tellus et vulputate. Nunc in erat est. Aenean sem augue, rutrum eu scelerisque in, imperdiet a arcu. Cras vitae lorem vestibulum, sodales dui non, tempor turpis. Nunc porta cursus rutrum. Duis vitae ullamcorper leo, sit amet commodo justo. Vestibulum eget leo maximus, luctus mi bibendum, convallis tortor.",
            //         "submit_dt": "11/24/2022 4:35 PM",
            //         "status": "in-progress",
            //         "assignee": "Doe, Jane"
            //     },
            //     {
            //         "item_id": 1234567,
            //         "requester": "Doe, John",
            //         "item_name": "Lorem ipsum dolor sit amet",
            //         "descr": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut dolor interdum, porttitor quam vel, interdum lectus. Phasellus luctus consequat massa. Nulla tincidunt ut tellus et vulputate. Nunc in erat est. Aenean sem augue, rutrum eu scelerisque in, imperdiet a arcu. Cras vitae lorem vestibulum, sodales dui non, tempor turpis. Nunc porta cursus rutrum. Duis vitae ullamcorper leo, sit amet commodo justo. Vestibulum eget leo maximus, luctus mi bibendum, convallis tortor.",
            //         "submitted": "11/24/2022 4:35 PM",
            //         "status": "in-progress",
            //         "assignee": "Doe, Jane"
            //     }
            //  ] 
             }
    },
    getters: {
      doubleCount: (state) => state.count * 2,
      getWorkOrderList: (state) => state.workOrders,
    },
    actions: {
        increment() {
            this.count++;
        },
        getWorkOrderList_API() {
                axios.get('http://127.0.0.1:5000/api/items')
                .then(function (response) {
                    // handle success
                    // console.log(response.data.items);
                    // response.data.items.forEach(element => {
                    //   workOrders.push(element);
                    // });
                    this.workOrders = response.data.items;
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },
  })
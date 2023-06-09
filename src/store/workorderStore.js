import { defineStore } from 'pinia'
import axios from 'axios';
// import workOrders from '../assets/datasample.json';


export const useWorkOrderStore = defineStore('storeWorkOrders', {
    state: () => ({
            workOrders: [],
            count: 0,
    }),
    getters: {
        doubleCount: (state) => {
            return state.count * 2;
        },


    },
    actions: {
        increment() {
            this.count++;
        },
        getWorkOrderList: async (state) => {
            await this.getWorkOrderList_API;
            return state.workOrders;
        },
        getWorkOrderList_API() {
                axios.get('http://127.0.0.1:5000/api/items')
                .then(function (response) {
                    // handle success
                    // console.log(response.data.items);
                    // response.data.items.forEach(element => {
                    //   workOrders.push(element);
                    // });
                    console.log(response.data.items);
                    // this.workOrders = response.data.items;
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
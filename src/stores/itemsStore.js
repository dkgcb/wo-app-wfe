import { defineStore } from 'pinia'
import axios from 'axios';
// import items from '../assets/datasample.json';


export const useItemsStore = defineStore('itemsStore', {
    
    state: () => ({
            count: 0,
            items: [],
            item: "",
    }),
    actions: {
        increment() {
            this.count++;
        },

        async getItemsList_API() {
                await axios.get('http://127.0.0.1:5000/api/items')
                .then((d) => {
                    // handle success
                    // console.log(response.data.items);
                    d.data.items.forEach(element => {
                        this.items.push(element);
                    });
                }).catch((e)=>{
                    console.log(e)
                });
            
              
        },
        async postItem_API() {
            console.log(this.item);
            // axios.post('http://127.0.0.1:5000/api/item',{
                  
            //           "descr": description.value,
            //           "item_name": subject.value,
            //           "assignee": "karand",
            //           "requester": "johnd",
            //           "loc": "Roof, Building 25"
                  
            //     })
            //     .then((d)=> {
            //       console.log(response.data.items);
            //     })
            //     .catch((e)=> {
            //       // handle error
            //       console.log('Port ' + error);
            //     })
            //   ;
        }
    },
  });
"use strict"
const {createApp}=Vue;

createApp({
    data() {
      return {
        toDoList:[
            {
                text:"fare la spesa",
                done: false
            },
            {
                text:"Tagliare il prato",
                done: true
            },
            {
                text:"Pagare l'affitto",
                done: false
            },
            {
                text:"Portare il cane dal veterinario",
                done: true
            },
        ]
      }
    }
}).mount('#app');
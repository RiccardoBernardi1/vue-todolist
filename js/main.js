"use strict"
const {createApp}=Vue;

createApp({
    data() {
      return {
        newText:"",
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
                text:"Portare il cane a spasso",
                done: true
            },
        ]
      }
    },
    methods:{
        remove(i){
            this.toDoList.splice(i,1);
        },
        addToDo(){
            const newObj={
                text: this.newText,
                done:false
            }
            this.toDoList.push(newObj);
            this.newText="";
        },
        clickDone(i){
            if(this.toDoList[i].done===false){
                this.toDoList[i].done=true;
            }else{
                this.toDoList[i].done=false;
            }
            
        }
    }
}).mount('#app');
let itemIndex = 0;

function GetFreeItemIndex(){
    itemIndex++;
    return itemIndex;
}

let testData = [
    { Id: GetFreeItemIndex(), Text: "Estudar Vue.js", IsDone: false },
    { Id: GetFreeItemIndex(), Text: "Revisar BootStrap", IsDone: false },
    { Id: GetFreeItemIndex(), Text: "Revisar Laravel", IsDone: true },
    { Id: GetFreeItemIndex(), Text: "Estudar Docker", IsDone: true },
    { Id: GetFreeItemIndex(), Text: "Revisar JQuery", IsDone: true },
];

let todoListApp = new Vue({
    el: '#app-todolist',
    data: {
        todoItems: testData,
        newTodoText: ""
    },
    methods: {
        addTodo: function(){
            if(this.newTodoText.trim() === ""){
                return;
            }

            this.todoItems.push({ Id: GetFreeItemIndex(), Text: this.newTodoText, IsDone: false});
            this.newTodoText = "";
        },
        removeTodo: function(todo){
            this.todoItems.splice(this.todoItems.indexOf(todo), 1);
        }
        
    }
})


const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
mongoose.connect("mongodb+srv://raxkh41:Rax%40galgotia21@cluster0.d30ghvw.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
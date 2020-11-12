const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false,priority: 0}

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    todos.find(t => t.id == todoID).complete =  !(todos.find(t => t.id == todoID).complete)
    res.send(todos)
})

router.put('/todo/:todoID/:priority', function (req, res) {
    const todoID = req.params.todoID
    console.log("okay")
    todos.find(t => t.id == todoID).priority =  (++todos.find(t => t.id == todoID).priority)%3
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    for(let i in todos)
    {
        if(todos[i].id == todoID)
        {
            todos.splice(i, 1)
            break
        }  
    }
    console.log('hello')
    res.send(todos)
})

module.exports = router
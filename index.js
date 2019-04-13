// Package Import
const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const hbs=require('hbs')
const bodyParser = require('body-parser')
// Model import
const Post=require('./database/models/Post')

const app=express()
const PORT=process.env.PORT||8080

// Connect Database
mongoose.connect('mongodb://localhost/node-blog', {useNewUrlParser: true});



app.use(express.static(path.join(__dirname,'public')))

// Handlebars Path
const viewPath=path.join(__dirname,'templates/views')
const partialsPath=path.join(__dirname,'templates/partials')

// Handlebars
app.set('view engine', 'hbs');
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

// Body_Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Server request get request
app.get('/',(req,res)=>{
    res.render('index')
})


app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/posts/new',(req,res)=>{
    res.render('create')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


// Server post request
app.post('/posts/store',(req,res)=>{
    console.log(req.body);
    
    res.redirect('/')
})












app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
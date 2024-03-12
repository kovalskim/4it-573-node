import express from 'express'

const app = express();

app.set('view engine', 'ejs');

let todos = [
    {
        id: 1,
        title: 'Zajit na pivo',
        done: false
    },
    {
        id: 2,
        title: 'Vrátit se z hospody',
        done: false
    }
]

// files form public directory
app.use(express.static('public'));

// middleware for check form data and transferring to js object
app.use(express.urlencoded({
    extended: true
}));

//custom middleware
app.use((req, res, next) => {
    console.log('a');
    next();
    console.log('b');
})

app.get('/', (req, res) => {
    console.log('c');
    //throw new Error('Chyba');
    res.render('index', {
        todos
    });
});

app.post('/add-todo', (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        done: false
    };

    todos.push(todo);

    res.redirect('/');
});

app.get('/remove-todo/:id', (req, res) => {
   todos = todos.filter(todo => {
       return todo.id !== Number(req.params.id);
   });

   res.redirect('/');
});

app.get('/toggle-todo/:id', (req, res) => {
    const todo = todos.find((todo) => {
        return todo.id === Number(req.params.id);
    })
    todo.done = !todo.done;
    res.redirect('/');
})

/*app.use((err, req, res, next) => {
    console.error(err);
    res.send('Chyba');
})*/

app.listen(3000, () => {
    console.log('Server listening...');
});

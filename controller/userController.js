let users = require('../data/users');

function getUser (req, res) {
    let id = req.query.id;
    if(id) {
        let user = users.find((u) => u.id == id);
        res.send(user);
    } else {
        res.send(users);
    }
}

function addUser (req, res) {
    let user = req.body;
    let id = users.length + 1;
    if (user) {
        user = {id: id, ...user}
        users.push(user);
        res.send(users)
    }
}

function updateUser (req, res) {
    let id = req.params.id;
    if(id) {
        let user = users.find((u) => u.id == id);
        if (user) {
            user = {...user, ...req.body};
            users = users.filter((u) => u.id != id);
            users.push(user);
            res.send(users);
        } else {
            res.status(404).send(`User updat with id ${id} not found`);
        }
    } else {
        res.send(users);
    }
}

let id;

function userDelete (req, res) {
    console.log(req.params.id);
    id = req.params.id;
    users = users.filter((user) => user.id != id);
    for(id = 1; id <= users.length; id++) {
        users = users.map((user) => {
        if(user.id) {
            user.id
        }
        
        });
    }
   
    res.send({message: `User id ${id} is deleted`});
    id = users.length;
}

module.exports = {getUser, addUser, updateUser, userDelete, id};


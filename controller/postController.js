let posts = require('../data/users');

const postUser = (req, res) => {
    let id = req.query.id;
    if(id) {
        let post = posts.find((p) => p.id == id);
        if(post) res.send(post);
        else res.status(404).send({error: 'Post not found'});
    } else {
        res.send(posts);
    }
}

module.exports = postUser;
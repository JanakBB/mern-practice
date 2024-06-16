let {posts, users} = require('../data/users');

const getPost = (req, res) => {
    let id = req.query.id;
    if(id) {
        let post = posts.find((p) => p.id == id);
        if(post) res.send(post);
        else res.status(404).send({error: 'Post not found'});
    } else {
        let newPosts = [];
        posts.forEach((p) => {
        let user = users.find((u) => u.id == p.postedBy);
           newPosts.push({...p, postedBy: user.userName});
        });
        res.send(newPosts);
    }
}

module.exports = getPost;
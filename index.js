const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const{ v4 :uuidv4}=require('uuid');
uuidv4();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
 
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    { id: uuidv4(), username: "TechTrekker", content: "JavaScript is the duct tape of the web — flexible but dangerous if misused." },
    { id: uuidv4(), username: "Vansh_Rana", content: "Consistency beats intensity. Show up every day." },
    { id: uuidv4(), username: "CuriousMind", content: "Can AI ever fully replicate human intuition? Thoughts?" },
    { id: uuidv4(), username: "CampusChronicles", content: "College isn't just for degrees, it's for discovery." }
];
app.get("/", (req, res) => {
    res.redirect("/posts");
});




app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs"); // no need to pass {posts}
});
app.get("/posts/:id", (req, res) => {
    let{id}=req.params;
    console.log(id);
   let post = posts.find((p)=> id===p.id);
   res.render("show.ejs", {post});
});
app.post("/posts", (req, res)=>{
    let{username, content}= req.body;
    let id= uuidv4();
    posts.push({id,username, content})
    console.log(req.body);
    res.redirect("/posts");
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = newcontent;
    console.log("Updated post:", post);
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;

    // filter out the post with the given ID
    posts = posts.filter((p) => p.id !== id);

    console.log("Deleted post ID:", id);

    // redirect back to the list of posts
    res.redirect("/posts");
});



app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.render("edit.ejs", { post }); // ✅ now post is defined in template
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

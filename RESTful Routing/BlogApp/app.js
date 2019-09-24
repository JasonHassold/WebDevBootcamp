var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

// APP CONFIG    
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE / MODEL CONFIG
mongoose.connect("mongodb://localhost/blog_app", { useNewUrlParser: true });

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTful ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// LISTENER
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("BLOG SERVER IS RUNNING");
});
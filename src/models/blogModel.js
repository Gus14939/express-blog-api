// - Title
// - Content
// - User (posted by)
// - Like 
// - Image upload 
// - Category/Tags/keywords 
// - Audit history
//     - user 
//     - timestamp 

const mongoose = require("mongoose");

const blogSchema = mongoose.Schema ({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    likes:{
        type: [String],
        required: false
    },
    headerImage:{
        type: String, // URL to the file/image storage provider
        required: true
    },
    tags:{
        type: String, // ["life", "travel", "photography"]
        required: true
    },
    categories:{ // post category defined by website admin/developer
        type: String, // ["life", "travel", "photography"]
        enum: ["life", "travel", "photography", "coding"],
        required: true
    },
    editHistory:{
        type: [{user: String, timestamp: Date}],
        required: false
    },
},
{
    timestamps: true
});

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = {
    BlogModel
}


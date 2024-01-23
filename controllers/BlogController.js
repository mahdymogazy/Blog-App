
const blog = require("../models/BlogModel")
const user = require("../models/UserModel")
const mongoose = require("mongoose")

//////////////////////////////////////////
const addBlog = async (_authorId, _title, _body, _photoUrl, _tags) => {
    try {
      let data = await blog.create({
        _authorId, _title, _body, _photoUrl, _tags, _createdAt: Date.now() 
      });
      data ? console.log("added successfully") : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };
 
/////////////////////////////////////////
const updateBlog = async (_id, body) => {
    try {
      let data = await blog.updateOne({ _id: _id }, { body: body });
      data
        ? console.log("body Updated successfully")
        : console.log("update failed");
    } catch (err) {
      console.log(err);
    }
  };
////////////////////////////////////////
const deleteBlog = async (_id) => {
    try {
      let data = await blog.deleteOne({
        _id: _id,
      });
      data ? console.log("deleted successfully") : console.log("delete failed");
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////////////////////////////////
const getLatestBlogs  = async (timeAgo = 1000 * 60 * 60 * 24 * 7) => {
    try {
      let data = await Todo.find({ createdAt: {$gt: Date.now() - timeAgo} }).exec();
      data ? console.log(data) : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };

///////////////////////////////////////

const getAuthorBlogs = async (authorId) => {
    try {
      let data = await blog.find({}, {authorId}).exec();
      data ? console.log(data) : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };
  
///////////////////////////////////////////
const getBlogsWithTitle = async (title) => {
    try {
      let data = await blog.find({}, {title}).exec();
      data ? console.log(data) : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };
//////////////////////////////////////////

const getBlogsWithTag = async (tags) => {
    try {
      let data = await blog.find({ tags: { $in: tags } }).exec();
      data ? console.log(data) : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };

//////////////////////////////////////
const getFollowing = async () => {
    try {
        const currentUser = await user.findOne({ _id })
      let data = await Todo.find({}, {authorId: { $in: currentUser.following }  }).exec();
      data ? console.log(data) : console.log(" failed");
    } catch (err) {
      console.log(err);
    }
  };
  

module.exports = { addBlog, updateBlog, deleteBlog, getLatestBlogs, getAuthorBlogs, getBlogsWithTitle, getBlogsWithTag, getFollowing }
/////////////////////////////////////////////

  

 
 
  
 

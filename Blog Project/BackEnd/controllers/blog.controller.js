import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    imagePath: req.file?.path,
    author: req.user._id
  });
  res.json(blog);
};

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "name");
  res.json(blogs);
};

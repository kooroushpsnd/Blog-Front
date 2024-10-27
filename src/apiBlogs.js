const { default: axios } = require("axios")

const url = "http://localhost:5000/blogs"

exports.getAllBlogs = async() => {
    const res = await axios.get(url)
    return res.data.Blogs
}

exports.getBlog = async(title) => {
    const res = await axios.get(`${url}/${title}`)
    return res.data.blog
}

exports.createBlog = async(post) => {
    const res = await axios.post(url ,post)
    return res.data
}

exports.updateBlog = async() => {
    const res = await axios.get(url)
}

exports.deleteBlog = async() => {
    const res = await axios.get(url)
}
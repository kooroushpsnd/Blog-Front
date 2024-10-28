const { default: axios } = require("axios")

const url = "http://localhost:5000/blogs"

exports.getAllBlogs = async() => {
    const res = await axios.get(url)
    if (res.data.Blogs == "no Blog exist") return []
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

exports.updateBlog = async(title ,post) => {
    const res = await axios.patch(`${url}/${title}` ,post)
    return res.data.blog
}

exports.deleteBlog = async(title) => {
    const res = await axios.delete(`${url}/${title}`)
    return res.Btitle
}
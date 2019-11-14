import React from 'react';
import Header from './BlogHeader/BlogHeader';
import Article from './Article/Article';
import Comment from './Comment/Comment';


import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Header />
            <Article />
            <Comment />
        </div>
    );
};

export default Blog;
import React from 'react';

export default function Blog(props) {
  return (
    <>
      <div className="blog">
        <h2> Title: {props.title}</h2>
        <p>Category: {props.category}</p>
        <p>Published: {props.isPublished ? 'Yes' : 'No'}</p>
      </div>
    </>
  );
}

Blog.defaultProps = {
  title: 'AI Evolution',
  category: 'Tech Gist',
  isPublished: false,
};

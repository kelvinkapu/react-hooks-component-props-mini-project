// import React from "react";
// import blogData from "../data/blog";
// console.log(blogData);


// function Article(){
//     <small>"January 1, 1970"</small>
//     const articleLists=blogData.posts.map((post)=>{
//       return (
//       <div>
//               <h3 key={post.id}>{post.title}</h3>
//               <small key={post.id}>{post.date} </small>
//               <p key={post.id}>{post.date}</p>
//       </div>
//       )
//     });
//     return (
//     <article>
//       {articleLists}
//     </article>
//     )
//   }


function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  );
}
  export default Article
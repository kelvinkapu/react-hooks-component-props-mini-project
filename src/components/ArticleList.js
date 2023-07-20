import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
// console.log(blogData);

// function ArticleList(){
//     // let data= blogData.post
//     //  console.log(props)
//     //  const articleList=blogData.posts.map((post)=>{
//     //    return <h3 key={post.id}>{post.title}</h3>
//     //  });
//    return(
//      <div>
//          <header>  
//            <main>
//              <Article/>
//            </main>
//          </header>
//      </div>
   
//      )
//    }

const ArticleList = () => {
  const  posts  = blogData.posts

  return (
    <main>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
};
   export default ArticleList
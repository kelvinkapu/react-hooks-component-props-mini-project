import React from "react";
// import blogData from "../data/blog";
import Article from "./Article";
// console.log(blogData);

function ArticleList(){
    // let data= blogData.post
    //  console.log(props)
    //  const articleList=blogData.posts.map((post)=>{
    //    return <h3 key={post.id}>{post.title}</h3>
    //  });
   return(
     <div>
         <header>  
           <main>
             <Article/>
           </main>
         </header>
     </div>
   
     )
   }

   export default ArticleList
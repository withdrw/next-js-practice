import { useEffect, useState } from "react"




export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    return {
        props: {
            posts: data,
        }
    }
}
    
export default function posts({posts}){

    // const [posts ,setPosts] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = await res.json()
    //       setPosts(data)
    //       console.log(posts)
    //     }

    //     fetchData()
    // },[])


    return (
        <div>
            <h1>Posts</h1>
            {posts?.map(post => {
                return <li key={post?.id}>{post?.title}</li>
            })}
        </div>
    )
}

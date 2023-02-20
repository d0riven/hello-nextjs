import {GetStaticProps} from "next";

export default function Blog({posts}) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:3000/api/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        }
    }
}

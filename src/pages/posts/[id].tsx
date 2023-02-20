export default function Post({post}) {
    return (
        <>
            <h2>Post</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:3000/api/posts')
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: {id: post.id},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://127.0.0.1:3000/api/posts/${params.id}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}


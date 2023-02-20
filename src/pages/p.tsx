import React from "react";
export default function P({data}) {
    return (
        <>
            <h2>Page</h2>
            <p>{data.name}</p>
        </>
    )
}
export async function getServerSideProps({req, res}) {
    // /apiにアクセスするんじゃなくて、apiが利用している機能を直接呼び出せというのが公式に書いてあってこのやり方は非推奨
    // @see https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#getserversideprops-or-api-routes
    const apiRes = await fetch(`http://127.0.0.1:3000/api/hello`)
    const data = await apiRes.json()
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-white-revalidate=59'
    )

    // Pass data to the page via props
    return { props: { data } }
}

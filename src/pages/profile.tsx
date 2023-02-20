import {useEffect, useState} from "react";
import useSWR from 'swr';

export default function Profile() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const {data, error, isLoading} = useSWR('/api/hello', fetcher)

    // const [data, setData] = useState(null);
    // const [isLoading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('/api/hello')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //             setLoading(false);
    //         })
    // }, [])
    //
    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <div>Failed to load</div>

    if (isLoading) return <p>Loading...</p>
    if (error) return <div>Failed to load</div>

    return (
        <>
            <h1>{data.name}</h1>
        </>
    )
}

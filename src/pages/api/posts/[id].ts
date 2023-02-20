// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

export type Post = {
    id: string;
    title: string;
}

type Data = Post[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json([
        {
            id: '1',
            title: 'title',
        },
    ])
}

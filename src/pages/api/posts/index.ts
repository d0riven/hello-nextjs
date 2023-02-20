// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

export type Post = {
    id: string;
    title: string;
}

export const posts: Post[] = [
    {
        id: '1',
        title: 'title_1',
    },
    {
        id: '2',
        title: 'title_2',
    },
];

type Data = Post[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(posts)
}

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function handler(req, res) {
    const paths = getAllPostIds() 

  res.status(200).json({ text: 'Hello', postsId: paths });
}

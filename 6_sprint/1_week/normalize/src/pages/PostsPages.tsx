import { useSelector } from "react-redux"
import { AppStateType } from "../features/app/store"
import { Post } from "../features/posts/components/Post"

export const PostsPages = () => {
	const items = useSelector((state: AppStateType) => state.posts.items)
	return (
		<div>
			{items.map(i => <Post key={i.id} post={i} />)}
		</div>
	)
}

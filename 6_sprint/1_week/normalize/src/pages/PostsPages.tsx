import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { AppStateType } from "../features/app/store"
import { Post } from "../features/posts/components/Post"
import { fetchPosts } from "../features/posts/reducer"

export const PostsPages = () => {

	const items = useSelector((state: AppStateType) => state.posts.items)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div>
			{items.map(i => <Post key={i.id} post={i} />)}
		</div>
	)
}

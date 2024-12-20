import { useEffect } from "react"
import { useSelector } from "react-redux"
import { appDispatch, AppStateType } from "../features/app/store"
import { Post } from "../features/posts/components/Post"
import { fetchPosts } from "../features/posts/reducer"

export const PostsPages = () => {

	const items = useSelector((state: AppStateType) => state.posts.items)

	const dispatch = appDispatch()

	useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	return (
		<div>
			{items.map(i => <Post key={i.id} post={i} />)}
		</div>
	)
}

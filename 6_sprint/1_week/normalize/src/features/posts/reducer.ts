import { Dispatch } from "redux"
import { api, PostType } from "../../api/api"

const initialState = {
	items: [] as PostType[]
}
export const postsReducer = (state = initialState, action: any) => {
	return state
}

export const fetchPostsSuccess = (posts: PostType[]) => ({
	type: 'fetchPostsSuccess',
	payload: { posts }
})
export const fetchPosts = () => async (dispatch: Dispatch) => {
	const posts = await api.getPosts()
	dispatch(fetchPostsSuccess(posts)
}

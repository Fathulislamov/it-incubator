import { PostType } from "../../../api/api"

export const Post = (props: { post: PostType }) => {
	return (
		<div>
			<b>{props.post.author.name}</b>
			<span>{props.post.text}</span>
			<hr />

		</div>
	)
}

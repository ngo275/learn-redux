// increment
export function increment(index) {
	return {
// actionにはtypeと引数を書いてあげる
		type: 'INCREMENT_LIKES',
		index
		// indexはどれがイイねされたかを伝える
	}
}

// add a comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove a comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId,
		i
	}
}

import React from 'react';

const EmojiHistory = ({ emojiHistory }) => {
	return (
		<div>
			<p>History component</p>
			{emojiHistory.length > 0 &&
				emojiHistory.map((emoji) => <div>{emoji}</div>)}
		</div>
	);
};

export default EmojiHistory;

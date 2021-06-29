import React from 'react';

const EmojiHistory = ({ emojiHistory }) => {
	return (
		<div>
			<p>History component</p>
			{this.props.emojiHistory.map((emoji) => (
				<div>{emoji}</div>
			))}
		</div>
	);
};

export default EmojiHistory;

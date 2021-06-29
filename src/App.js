import React, { PureComponent } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import EmojiHistory from './EmojiHistory';
import filterEmoji from './filterEmoji';

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			filteredEmoji: filterEmoji('', 20),
			emojiHistory: [],
		};
	}

	handleHistory = (emoji) => {
		const updatedState = [...this.state.emojiHistory, emoji];
		this.setState({ emojiHistory: updatedState });
	};

	handleSearchChange = (event) => {
		this.setState({
			filteredEmoji: filterEmoji(event.target.value, 20),
		});
	};

	render() {
		return (
			<div>
				<Header />
				<SearchInput textChange={this.handleSearchChange} />
				<EmojiHistory emojiHistory={this.state.emojiHistory} />
				<EmojiResults
					handleHistory={this.handleHistory}
					emojiData={this.state.filteredEmoji}
				/>
			</div>
		);
	}
}

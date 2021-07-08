import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import SelectedEmojis from "./SelectedEmojis";

import filterEmoji from "./filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
      selectedEmojis: {},
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  handleClickEmoji = (emoji) => {
    this.setState({
      ...this.state,
      selectedEmojis: {
        ...this.state.selectedEmojis,
        emoji
      },
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedEmojis emojis={this.state.selectedEmojis} />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults handleClickEmoji={this.handleClickEmoji} emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

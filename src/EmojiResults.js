import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

const EmojiResults = (props) => {
  const [searchEmoji, setSearchEmoji] = useState([])
  const [emojiData, setEmojiData] = useState([])


  // static propTypes = {
  //   emojiData: PropTypes.array,
  //   searchEmoji:PropTypes.array
  // }

  console.log(searchEmoji)

  useEffect (() => {
    const clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      clipboard.destroy();
    }

  },[emojiData])
  // componentDidMount() {
  //   this.clipboard = new Clipboard(".copy-to-clipboard");
  // }

  // componentWillUnmount() {
  //   this.clipboard.destroy();
  // }

  const handleClick = (eData) => {
    setSearchEmoji((prevState) => [...prevState, eData] )
  }
    return (
      <div className="component-emoji-results">
        {props.emojiData.map(emojiData => (
          <EmojiResultRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
            handleClick={() => handleClick(emojiData)}

          />
        ))}
      </div>
    );

}
 export default EmojiResults;
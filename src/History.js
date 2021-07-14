import React from "react";


const History = (props) => {
    // const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    // const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return(
        <div>  
          {props.searchEmoji && props.searchEmoji.map((emoji,idx) =>{
            return(
              <div
                className="component-emoji-result-row copy-to-clipboard"
                data-clipboard-text={this.props.symbol}
                onClick={this.props.handleClick}
              > 
             <span className="title">{this.props.title}</span>
             <span className="info">Click to copy emoji</span>
              </div>
            )
          })}      
        </div>
    )
}

export default History;
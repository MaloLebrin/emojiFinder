import React from 'react'

const EmojiLine = ({ emoji }) => {
    return (
        <div
            onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
            }}
            className="emojiline"
        >
            <span>
                {emoji.symbol} {emoji.title}
            </span>
            <span>Click to copy !</span>
        </div>
    );
}

export default EmojiLine

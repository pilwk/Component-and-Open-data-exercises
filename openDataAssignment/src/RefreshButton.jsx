import React from 'react';

export function RefreshButton(props) {
    const handleClick = (e) => {
        if (e.key === ' ') return
        props.onRefresh();
    };

    const handleKeys = (e) => {
        e.preventDefault()
        e.target.blur()
    }

    return <button onClick={handleClick} onKeyDown={handleKeys}>Refresh</button>;
}

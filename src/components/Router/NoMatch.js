import React from 'react';

export const NoMatch = (props) => {
    return <div>
        <h3>No match for {props.history.location.pathname}</h3>
    </div>
}
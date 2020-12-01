import React from 'react';

const profileInfo = (props) => {

    let dataInfoCollection = props.data.map(p =>
        (
            <li>
                <span>{p.meaning}</span>
                <p>{p.name}</p>
            </li>
        )
    )

    return (
        <ul>
            {dataInfoCollection}
        </ul>
    );
};

export default profileInfo;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OverviewWrapper } from './Styles';

export default function Overview({icon, title, desciption}) {
    return (
        <OverviewWrapper>
            <div><FontAwesomeIcon size="2xl" color="#9a031e" icon={icon} /></div>
            <h2>{title}</h2>
            <p>{desciption}</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.</p> */}
        </OverviewWrapper>
    )
}

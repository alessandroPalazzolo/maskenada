import React from 'react';

import Link from "./Link";
import './Body.scss'

const Body = () => {
    return(
        <div className='body__wrapper'>
            <ul>
                <Link text="Listen to Abo - Ranch (DR004)" imgUrl="https://d1fdloi71mui9q.cloudfront.net/EHncIaD7TymhKNReDBKk_de-rio_004-1-4000x4000.png"/>
                <Link text="Buy Abo - Ranch (DR004) on Bandcamp"/>
                <Link text="Abo - Ranch Official Video on HATE YouTube Channel" imgUrl="https://d1fdloi71mui9q.cloudfront.net/CpNDdpwR8yQ7BblOfeV2_IMG_0854.PNG"/>
                <Link text="Listen to Abo - Ranch (DR004)"/>
                <Link text="Listen to Abo - Ranch (DR004)"/>
                <Link text="Listen to Abo - Ranch (DR004)"/>
                <Link text="Listen to Abo - Ranch (DR004)"/>
            </ul>
        </div>
    );
}

export default Body;
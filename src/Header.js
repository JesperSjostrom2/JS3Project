import React from 'react';
import './index.css';
import logoUrl from './img/headerjs3.jpeg';

//This file is used to display our beautiful header on the pages.
export const HeaderImg = ({title, subTitle}) => {
    return (
        <section>
            <div className="tint">
            <div style={{ backgroundImage: `url(${logoUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover', 
                backgroundColor: (248, 247, 216, 0.7),}}>

                <div className="container" style={{minHeight: '550px'}}>
                    <div className="text-center justify-content-center align-self-center">
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default HeaderImg;
import React from 'react';

const DisplaySimpsons = ({simp,next}) => {
    return (
        <div>

            <div className="cards">

                <div className="img">
                    <img src={simp.image} alt="#"/>
                </div>

                <div className="meta">
                    <h3>{simp.character}</h3>
                    <h2>{simp.quote}</h2>
                </div>


            </div>
            <button onClick={()=>next()}>Suivant =></button>

        </div>

)


};

export default DisplaySimpsons;
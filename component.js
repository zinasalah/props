import React from 'react'
import User from './user';
import './component.css';
import img from "./R.jpg";



function Component() {

    return (
        <div className='Header' >
            <User
                fullName='zina salah'
                position='salaes administrator'

                mail='salahzina@live.fr'
                phone='+21654349742'

            >
                {img}
            </User>


        </div>
    )
}

export default Component;

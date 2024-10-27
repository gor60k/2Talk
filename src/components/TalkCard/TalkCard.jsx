import React from 'react'
import { NavLink } from 'react-router-dom'

export const TalkCard = (props) => {

    return (
        <>
            <div className='talk_card'>
                <div className="talk_card-wrapper">
                    {/* <div className="talk_card-img-wrapper">
                        {props.avatar && <img src={`${props.avatar}`} alt="" />}
                    </div> */}
                    <p className='talk_card-title'>{props?.name}</p>
                    <div className="talk_card-info">
                        <p>описание комнаты описание комнаты описание комнаты описание комнаты описание комнаты</p>                        
                        {props.decency && <p className='room_card-decency'>{`Требуемая порядочность: ${props?.decency}`}</p>}
                    </div>
                    <NavLink className="base-button" to={{ pathname: props.path, state: {category: props.catId} }} state={props.catId} onClick={props.onClick}>
                        <span>Перейти</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

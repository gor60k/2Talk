import React, { useEffect, useState } from 'react';
import { TalkCard } from '../../components/TalkCard/TalkCard';
import axios, { chatsUrl } from '../../axios';
import { CATEGORIES_ROUTE, ROOMS_ROUTE, ROOM_ROUTE } from '../../utils/consts'
import { useParams } from 'react-router-dom';
import { BottomModal } from '../../components/BottomModal/BottomModal';
import { ModalAceptContent } from '../../components/ModalAceptContent';
import { ModalCreateRoom } from '../../components/ModalCreateRoom';

export const RoomsPage = () => {
    let [rooms, setRooms] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [component, setComponent] = useState('');;

    const openModal = () => {
        setModalActive(!modalActive)
    }

    const params = useParams();

    const handleBack = () => {

    }

    useEffect(() => {
        const getRooms = async () => {
            try {

                const response = await axios.get(chatsUrl + params.id + '/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        getRooms();
    }, [params.id]);

    return (
        <>
            <div className="rooms_page page">
                <div className="wrapper">
                    <div className="page-container">
                        <div className="page-wrapper">
                            <div className="rooms_page-head page-head">
                                <button className="back_button">
                                    назад 
                                </button>
                                <span>Rooms</span>
                                <button onClick={() => { openModal(); setComponent(<ModalCreateRoom />) }}></button>
                            </div>
                            <div className="page-list-wrapper">
                                <div className="page-list">

                                    {
                                        rooms?.map((room, index) => (
                                            <TalkCard path={`${CATEGORIES_ROUTE}/${params.id}${ROOM_ROUTE}/${room.id}`}
                                                key={index}
                                                name={room.name}
                                                decency={`${room.required_decency}`}
                                                avatar={room.avatar}
                                                onClick={(e) => { e.preventDefault(); console.log('123'); setModalActive(true); setComponent(<ModalAceptContent roomId={room.id} />) }}
                                            >
                                            </TalkCard>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomModal
                className={modalActive ? 'open' : ''}
                onClose={openModal}
                component={component}
            />
        </>
    );
};
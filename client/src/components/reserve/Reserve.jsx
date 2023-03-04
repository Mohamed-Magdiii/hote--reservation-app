import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useContext, useState } from 'react';
import { SearchContext } from './../../context/SearchContext';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
const Reserve = ({ setOpen, hotelId }) => {
    const { data, loading, error } = useFetch(`/hotels/rooms/${hotelId}`)
    const [selectedRooms, setSelectRooms] = useState([]);
    const { dates } = useContext(SearchContext)
    const navigate = useNavigate();
    const handleSelect = (e) => {
        const selected = e.target.checked
        const value = e.target.value
        setSelectRooms(selected ? [...selectedRooms, value] : selectedRooms.filter((room) => room !== value))
    }
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())
        let list = []

        while (date <= end) {
            list.push(new Date(date))
            date.setDate(date.getDate() + 1)
        }
        return list;
    }
    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavaliableDates.some(date =>
            alldates.includes(new Date(date).getTime()))

        return !isFound
    }
    const handleCick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/rooms/availablity/${roomId}`, { dates: alldates });
                    console.log(res.data)
                    return res.data
                })
            );
            setOpen(false);
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="reserve">
            <div className='rContainer'>
                <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)} />
                <span>Select your rooms: </span>
                {
                    !loading && data?.result.map((item) => (
                        <div className='rItem' key={item._id}>
                            <div className="rItemInfo">
                                <div className='rTitle'>{item.title}</div>
                                <div className='rDesc'>{item.desc}</div>
                                <div className='rMax'>Max People : {item.maxPeople}</div>
                                <div className='rPrice'>{item.price}</div>
                            </div>
                            <div className="rSelected">
                                {
                                    item && item.roomNumbrs.map((roomNumber) => (
                                        <div className="rooms">
                                            <label >{roomNumber.number}</label>
                                            <input value={roomNumber._id} type="checkbox" onChange={handleSelect} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
                <button onClick={handleCick} className="rButton">Reserve Now!!</button>
            </div>
        </div>
    )
}

export default Reserve;
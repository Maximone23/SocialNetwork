import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://pixelbox.ru/wp-content/uploads/2018/02/hitman_steam_avatars.png',
                followed: false,
                fullName: 'Dmitry',
                status: 'Developer',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {
                id: 2,
                photoUrl: 'https://pixelbox.ru/wp-content/uploads/2018/02/hitman_steam_avatars.png',
                followed: false,
                fullName: 'Ivan',
                status: 'Hello',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 3,
                photoUrl: 'https://pixelbox.ru/wp-content/uploads/2018/02/hitman_steam_avatars.png',
                followed: true,
                fullName: 'Alex',
                status: 'Hastler',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                }
            }
        ])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id} className={styles.bgUsers}>
        <span>
            <div>
                <img src={u.photoUrl}  />
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {props.unfollow(u.id)}} >Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
            </div>
        </span>
                <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
            </div>)
        }

    </div>
}

export default Users;
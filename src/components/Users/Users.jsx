import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pageNumber}>
            {pages.map(p => {

                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>

            })}

        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.bgUsers}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </NavLink>

            </div>
            <div>
                {u.followed
                    ? <button disabled={props.folowingInProgress.some( id => id === u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id);
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'f1c82423-cd00-4395-b54c-61550699ae40'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                    props.toggleFollowingInProgress(false, u.id);
                                }
                            });
                    }}>Unfollow</button>
                    : <button disabled={props.folowingInProgress.some( id => id === u.id)} onClick={() => {
                        props.toggleFollowingInProgress(true, u.id);
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': 'f1c82423-cd00-4395-b54c-61550699ae40'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                    props.toggleFollowingInProgress(false, u.id);
                                }
                            });


                    }}>Follow</button>}
            </div>
        </span>
                <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
            </div>)
        }

    </div>
}

export default Users;
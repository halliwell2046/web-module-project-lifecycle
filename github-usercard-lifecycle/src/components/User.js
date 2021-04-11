import React from 'react'

const User = ({
    userCard: {
        avatar_url,
        name,
        login,
        bio,
        location, 
        following,
    }
})




    return(
            <div>
            <div>
                <img src={avatar_url} />
            </div>
            <div>
                <h1>{name}</h1>
                <div>
                    <ul>
                        <ul>Login: {login}</ul>
                        <ul>Bio: {bio}</ul>
                        <ul>Location: {location}</ul>
                        <ul>Following: {following}</ul>
                    </ul>
                </div>
            </div>
            </div>
        );





export default User;
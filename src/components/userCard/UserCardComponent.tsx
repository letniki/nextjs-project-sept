import React from "react";
import {IUser} from "@/models/IUser";
import './UserCardComponent.css'
type IUserCardProps = {
    user:IUser
}
const UserCardComponent = ({user}: IUserCardProps) => {
    return (
        <div>
                <h1>{user.id}. {user.firstName} {user.lastName}</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>University: {user.university}</h3>
                <p>Birth date: {user.birthDate}</p>
                <p>Age: {user.age} years</p>
                <p>Blood group: {user.bloodGroup}</p>
                <p>Eye color: {user.eyeColor}</p>
                <p> Hair color: {user.hair.color} - Hair type: {user.hair.type} </p>
                <p>Height: {user.height} Weight: {user.weight}</p>
        </div>
    );
};

export default UserCardComponent;
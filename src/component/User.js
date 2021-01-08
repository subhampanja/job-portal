import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

// need to work on it

// getting some issue with showing the state data. i am still learning

function User() {
    let { id } = useParams();

    const [user, setUser] = useState({});

    const loadUser = async () => {
        const usersget = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        const getUser = await usersget.json();
        const FilterUser = getUser.filter((user) => user.id === id);
        setUser(FilterUser);
    }
    useEffect(() => {
        loadUser()
    }, []);

    return (
        <div className="container">
            <div className="card mt-5" style={{ width: "100%" }}>
                <img className="card-img-top" src={user.Image} style={{ width: "100%", height: "16rem" }} />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="card-title">{user.name}</h5>
                    </div>
                    <Link to="/" className="btn btn-success">Back</Link>
                </div>
            </div>
        </div>
    )
}

export default User

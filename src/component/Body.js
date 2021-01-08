import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Body({shortlist, rejectlist}) {
    const [users, setUsers] = useState([]);
    const [candiSearch, setCandiSearch] = useState("");

    const loadUser = async () => {
        const usersget = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        const getUser = await usersget.json();
        setUsers(getUser);
    }

    useEffect(() => {
        loadUser()
    }, []);

    const searchCan = (e) => {
        setCandiSearch(e.target.value);
    }


    const FilterUser = users.filter((user) => user.name.includes(candiSearch));

    const shortlisted = (e) => {
        shortlist(e)
    }
    const rejectlisted = (e) => {
        rejectlist(e)
    }

    return (
        <div className="container">
            <div className="w-100 mt-4">
                <input type="text" className="form-control" placeholder="Search Candidate..." value={candiSearch} onChange={(e) => searchCan(e)} />
            </div>
            <div className="row">
                {
                    FilterUser.map((user) => (
                        <div className="col-md-4" key={user.id}>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={user.Image} alt={user.name} style={{ width: "100%", height: "16rem" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{user.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <Link to={`/user/${user.id}`}>
                                            <button className="btn btn-info">View</button>
                                        </Link>
                                        <button className="btn btn-success" onClick={(e) => shortlisted(user)}>Shortlisted</button>
                                        <button className="btn btn-danger" onClick={(e) => rejectlisted(user)}>Rejected</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default Body

import React from 'react'

function Shortlisted({data}) {
    return (
        <div className="container row">
             {
                    data.map((user) => (
                        <div className="col-md-4" key={user.id}>

                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={user.Image} alt={user.name} style={{ width: "100%", height: "16rem" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{user.name}</h5>
                                </div>
                            </div>

                        </div>
                    ))
                }
        </div>
    )
}

export default Shortlisted

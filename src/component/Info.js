import React, { useState, useEffect } from "react"
// import { Card } from "react-bootstrap"
import { Helmet } from 'react-helmet';
import book from "../Image/book.png"
import edit from "../Image/edit.png"
import sap from "../Image/delete.png"
import { useParams, Link, useNavigate } from "react-router-dom";

function Info() {
    const { id } = useParams("");
    console.log(id)

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState([])
    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "Application/json"
            }
        });
        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("delete your data")
            alert("delete you data")
            // getdata();
            navigate('/')
        }

    }
    return (
        <>

            <div>
                <Helmet>
                    <title>MY INFO PAGE || CRUD APP</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <div className="info mt-5">
                <h1 style={{ color: 'blue', textAlign: 'start' }}>WelCome {userdata.name}</h1>



                <div className="card mt-4" style={{ width: '600px' }}>
                    <div className="row">
                        <div className="you" style={{ marginLeft: '150px' }}>
                            <Link to={`/edit/${userdata._id}`}><img src={edit} alt="..." className="mx-4" /></Link>
                            <img src={sap} alt="..." onClick={() => deleteuser(userdata._id)} className="mx-4" />
                        </div>
                        <div className="left col-lg-6 col-md-6 col-6">
                            <img src={book} alt="..." style={{ width: '50px', marginTop: '-20px' }} />
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Name: <span>{userdata.name}</span></p>
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Age: <span>{userdata.age}</span></p>
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>E-Mail: <span>{userdata.email}</span></p>
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Occuption: <span>{userdata.work}</span></p>
                        </div>
                        <div className="right mt-5 col-lg-6 col-md-6 col-6">

                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Moblie: <span>{userdata.mobile}</span></p>
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Location: <span>{userdata.add} </span></p>
                            <p style={{ fontSize: "18px", fontWeight: '600' }}>Description: <span>{userdata.desc}</span></p>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Info
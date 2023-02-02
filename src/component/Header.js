import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import eye from "../Image/eye.png"
import edit from "../Image/edit.png"
import sap from "../Image/delete.png"

function Header() {

    const [getuserdata, setGetUserdData] = useState([])
    console.log(getuserdata)

    const navigate = useNavigate()

    const addUser = () => {
        navigate('/register')
    }

    const getdata = async () => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {

            setGetUserdData(data)
            console.log("data added");

        }
    }

    useEffect(() => {
        getdata()
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
            getdata();
        }

    }
    return (
        <> <div className="Header text-end mt-5 me-4"  >
            <button className="btn btn-primary" onClick={addUser}><i style={{ fontSize: "18px" }}>+</i>Add data</button>
        </div>


            <div className="header mt-1">

                <table class="table ">
                    <thead className="">
                        <tr className=" bg-dark " >
                            <th scope="col" style={{ color: 'white' }}>Id</th>
                            <th scope="col" style={{ color: 'white' }}>UserName</th>
                            <th scope="col" style={{ color: 'white' }}>Email</th>
                            <th scope="col" style={{ color: 'white' }}>Job</th>
                            <th scope="col" style={{ color: 'white' }}>Number</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((value, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.work}</td>
                                            <td>{value.mobile}</td>
                                            <Link to={`info/${value._id}`}> <td ><img src={eye} alt="..." style={{ width: "30px" }} /></td></Link>
                                            <Link to={`edit/${value._id}`}> <td><img src={edit} alt="..." style={{ width: "30px" }} /></td></Link>
                                            <td><img src={sap} alt="..." onClick={() => deleteuser(value._id)} style={{ width: "30px" }} /></td>
                                        </tr>


                                    </>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Header
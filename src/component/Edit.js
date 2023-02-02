import React, { useState, useEffect, useContext } from "react"

import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet"
import { useNavigate, useParams } from "react-router-dom";

function Edit() {

    const navigate = useNavigate();
    // const { updata, setUPdata } = useContext(updatedata)

    const [val, setVal] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        add: '',
        desc: ''
    })


    const onChangehandle = (e) => {

        const { name, value } = e.target;

        setVal((val) => {
            return {
                ...val,
                [name]: value
            }
        })

        console.log(setVal)

    }
    const { id } = useParams("");
    console.log(id)

    // const [userdata, setUserdata] = useState([])
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
            setVal(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const updateuse = async (e) => {
        e.preventDefault();

        const { name, email, work, add, mobile, desc, age } = val;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            navigate("/")
            setVal(data2);
        }

    }
    return (
        <>

            <div>
                <Helmet>
                    <title>MY EDIT PAGE || CRUD APP</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <h1>Edit</h1>
            <div className="container mt-4">
                <Card className="mt-5">
                    <form className="register ">
                        <div className="row mt-2 p-1">
                            <div class="mb-3 col-lg-6 text-start  ">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" onChange={onChangehandle} value={val.name} placeholder="Enter Your Name" />
                            </div>

                            <div class="mb-3 col-lg-6  text-start">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={onChangehandle} placeholder="Enter Your Email" value={val.email} />
                            </div>

                            <div class="mb-3 col-lg-6  text-start">
                                <label for="exampleFormControlInput1" class="form-label">Age</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="age" onChange={onChangehandle} placeholder="Enter Your Age" value={val.age} />
                            </div>

                            <div class="mb-3 col-lg-6  text-start">
                                <label for="exampleFormControlInput1" class="form-label">Moblie</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="mobile" onChange={onChangehandle} placeholder="Enter Your Mobile" value={val.moblie} />
                            </div>

                            <div class="mb-3 col-lg-6  text-start">
                                <label for="exampleFormControlInput1" class="form-label">Work</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="work" onChange={onChangehandle} placeholder="Enter Your Work" value={val.work} />
                            </div>
                            <div class="mb-3 col-lg-6  text-start">
                                <label for="exampleFormControlInput1" class="form-label">Address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="address" onChange={onChangehandle} placeholder="Enter Your Address" value={val.add} />
                            </div>
                            <div class="mb-3  text-start">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3 " value={val.desc} onChange={onChangehandle} name="description"></textarea>
                            </div>




                        </div>
                        <button className="btn btn-primary col-lg-6 mb-2" onClick={updateuse} >Submit</button>

                    </form>
                </Card>

            </div>

        </>
    )
}

export default Edit
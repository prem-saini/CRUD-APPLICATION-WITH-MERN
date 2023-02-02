import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

function Home() {
    return (
        <>

            <div>
                <Helmet>
                    <title>MY HOME PAGE || CRUD APP</title>
                    <meta name="description" content="My Page Description" />
                    <meta name="keywords" content="My, Page, Keywords" />
                </Helmet>

            </div>
            <div className="home">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" style={{ color: 'black', fontWeight: '700' }}>BIO-MATRIX</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register" style={{ color: 'black' }}>About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/edit/:id" style={{ color: 'black' }}>Edit</Link>
                                </li>


                            </ul>
                            <button className="btn btn-success">LOGIN</button>

                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}

export default Home
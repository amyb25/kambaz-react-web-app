import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpeg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/scuba.jpg" width={200} />
                        <div>
                            <h5> EEMB1145 Beginning Scuba </h5>
                            <p className="wd-dashboard-course-title">
                                Basic scuba diving skills  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/rock.jpg" width={200} />
                        <div>
                            <h5> MUSC1111 Rock Music </h5>
                            <p className="wd-dashboard-course-title">
                                Development of rock-and-roll  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/duckies.png" width={200} />
                        <div>
                            <h5> ARTF1120 Observational Drawing </h5>
                            <p className="wd-dashboard-course-title">
                                Freehand drawing  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/ARCH.jpg" width={200} />
                        <div>
                            <h5> ARCH1450 Understanding Design </h5>
                            <p className="wd-dashboard-course-title">
                                Importance of design thinking  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/CHEM.jpg" width={200} />
                        <div>
                            <h5> CHM2110 Organic Chemistry </h5>
                            <p className="wd-dashboard-course-title">
                                Chemistry of hydrocarbons  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/CRIM4120.avif" width={200} />
                        <div>
                            <h5> CRIM4120 Courts and Sentencing </h5>
                            <p className="wd-dashboard-course-title">
                                Organization of the court system  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

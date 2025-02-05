import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpeg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title> <br />
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/scuba.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> EEMB1145 Introduction to Scuba </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description"> Basic scuba diving skills </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/rock.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> MUSC1111 Rock Music </Card.Title> <br/>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Development of rock-and-roll  </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/duckies.png" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> ARTF1120 Observational Drawing </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Freehand drawing  </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/ARCH.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> ARCH1450 Understanding Design </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Importance of design thinking  </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/CHEM.jpg" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CHM2110 Organic Chemistry </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Chemistry of hydrocarbons</Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/CRIM4120.avif" width="100%" height={160} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CRIM4120 Courts and Sentencing</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description"> Organization of the court system </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

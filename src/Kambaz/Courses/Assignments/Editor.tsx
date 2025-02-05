import { Button, Card, Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <FormGroup className="wd-name">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl type="text" placeholder="Enter assignment name"></FormControl>
            </FormGroup> <br />

            <FormGroup className="wd-description">
                <FormControl as="textarea" placeholder="Enter assignment description" />
            </FormGroup>
            <br />

            <Row>
                <Col md={10}>
                    <FormGroup as={Row} className="wd-points">
                        {/* Label aligned to the left of the input */}
                        <FormLabel column sm={2}>Points</FormLabel>
                        <Col sm={6}>
                            <FormControl type="number" defaultValue={100} />
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            <br />

            <Row>
                <Col md={10}>
                    <FormGroup as={Row} className="wd-group">
                        <FormLabel column sm={2}>Assignment Group</FormLabel>
                        <Col sm={6}>
                            <FormSelect>
                                <option selected>ASSIGNMENTS</option>
                                <option value="homework">HOMEWORK</option>
                                <option value="essay">ESSAY</option>
                                <option value="exam">EXAM</option>
                            </FormSelect>
                        </Col>
                    </FormGroup>
                </Col>
            </Row> <br />

            <Row>
                <Col md={10}>
                    <FormGroup as={Row} className="wd-display-grade-as">
                        <FormLabel column sm={2}>Display Grade as</FormLabel>
                        <Col sm={6}>
                            <FormSelect>
                                <option selected>Percentage</option>
                                <option value="letter-grade">Letter Grade</option>
                            </FormSelect>
                        </Col>
                    </FormGroup>
                </Col>
            </Row> <br />

            <Row>
                <Col md={10}>
                    <FormGroup as={Row} className="wd-submission-type">
                        <FormLabel column sm={2}>Submission Type</FormLabel>
                        <Col sm={6}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <FormSelect>
                                        <option selected>Online</option>
                                        <option value="on-paper">On Paper</option>
                                        <option value="extool">External Tool</option>
                                    </FormSelect> <br />
                                    <FormGroup as={Row} className="wd-online-entry-options">
                                        <FormLabel> <strong>Online Entry Options</strong></FormLabel>
                                        <FormCheck type="checkbox" label="Text Entry" />
                                        <FormCheck type="checkbox" label="Website URL" />
                                        <FormCheck type="checkbox" label="Media Recordings" />
                                        <FormCheck type="checkbox" label="Student Annotation" />
                                        <FormCheck type="checkbox" label="File Uploads" />
                                    </FormGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </FormGroup>
                </Col>
            </Row> <br />

            <Row>
                <Col md={10}>
                    <FormGroup as={Row} className="wd-assign">
                        <FormLabel column sm={2}>Assign</FormLabel>
                        <Col sm={6}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <FormLabel><strong>Assign To</strong></FormLabel>
                                    <FormControl type="text" placeholder="Everyone" /> <br />
                                    <FormLabel><strong>Due</strong></FormLabel>
                                    <FormControl type="datetime-local" /> <br />
                                    <Row>
                                        <Col sm={6}>
                                            <FormLabel><strong>Available From</strong></FormLabel>
                                            <FormControl type="datetime-local" />
                                        </Col>
                                        <Col sm={6}>
                                            <FormLabel><strong>Until</strong></FormLabel>
                                            <FormControl type="datetime-local" />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </FormGroup>
                </Col>
            </Row>
            {/* Buttons for save and cancel */}
            <Row>
                <Col md={12} className="d-flex justify-content-end">
                <Button variant="secondary" className="mr-3">
              Cancel
            </Button>
            <Button variant="danger">
              Save
            </Button>
                </Col>
            </Row>
        </div>

    );
}

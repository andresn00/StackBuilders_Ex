import React, { useState, useRef } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import Plate from '../Plate'

const PlateForm = (props) => {
    const plateRef = useRef(new Plate())
    const [plateNumber, setPlateNumber] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [plateIsValid, setPlateIsValid] = useState(false)

    const handlePlateNumberChange = (e) => {
        const val = e.target.value
        setPlateNumber(val)
        plateRef.current.setPlateNumber(val)
        setPlateIsValid(plateRef.current.validatePlateNumber())
    }


    return (
        <div>
            <Form onChange={() => props.setShowAlert(false)}>
                <Form.Row>
                    <Col sm={2}>
                        <Form.Group controlId='formPlate'>
                            <Form.Label>Plate Number</Form.Label>
                            <Form.Control value={plateNumber} onChange={handlePlateNumberChange}
                                isInvalid={plateNumber && !plateIsValid} />
                            <Form.Control.Feedback type='invalid' >Invalid plate number</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <Form.Group controlId='formDateTime'>
                            <Form.Label>Date / Time</Form.Label>
                            <Form.Control type='datetime-local'
                            value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button onClick={() => props.onSubmit(plateNumber, dateTime)} disabled={!plateIsValid || !dateTime}>
                    Predict
                </Button>
            </Form>
        </div>
    )
}

export default PlateForm

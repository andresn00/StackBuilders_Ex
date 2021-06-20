import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import Plate from '../Plate'

const PlateForm = (props) => {
    const plate = new Plate()

    const [plateNumber, setPlateNumber] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [plateIsValid, setPlateIsValid] = useState(false)

    const HandleClick = () => {
        console.log('plateNumber', plateNumber);
        console.log('dateTime', dateTime);
        if (plateIsValid && dateTime) {
            props.onClick(plateNumber, dateTime)
        }
    }

    const HandlePlateNumberChange = (e) => {
        const val = e.target.value
        setPlateNumber(val)
        plate.setPlateNumber(val)
        setPlateIsValid(plate.validatePlateNumber())
    }


    return (
        <div>
            <Form>
                <Form.Row>
                    <Col sm={2}>
                        <Form.Group controlId='formPlate'>
                            <Form.Label>Plate Number</Form.Label>
                            <Form.Control value={plateNumber} onChange={(e) => HandlePlateNumberChange(e)} />
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
                <Button onClick={HandleClick} disabled={!plateIsValid ? true : (!dateTime)}>
                    Predict
                </Button>
            </Form>
        </div>
    )
}

export default PlateForm

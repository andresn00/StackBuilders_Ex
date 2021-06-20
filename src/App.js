import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'

import moment from 'moment'

import PlateForm from './Components/PlateForm';
import {carCanGoOut as _carCanGoOut} from './utils'
import {timeFormat, dateFormat} from './Config'

function App() {
  const [showAlert, setShowAlert] = useState(false)
  const [carCanGoOut, setCarCanGoOut] = useState(false)

  const handlePredictPicoYPlaca = (plateNumber, dateTime) => {
    const mom = moment(dateTime)
    const date = mom.format(dateFormat)
    const time = mom.format(timeFormat)

    setShowAlert(true)
    setCarCanGoOut(_carCanGoOut(plateNumber, date, time))
  }

  return (
    <div className="m-4 border rounded p-4">
      <h1>Pico y Placa Predictor</h1><hr />
      <div className='mt-3'>
        <PlateForm onSubmit={handlePredictPicoYPlaca} setShowAlert={setShowAlert} />

        {showAlert ? 
          <Alert className='mt-4' variant={carCanGoOut ? 'success' : 'danger'}>
            Your car {carCanGoOut ? 'CAN' : 'CAN NOT'} go out
          </Alert> : null
      }
      </div>
    </div>
  );
}

export default App;

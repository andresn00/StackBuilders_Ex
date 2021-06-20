import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'

import moment from 'moment'
import PlateForm from './Components/PlateForm';
import {CarCanGoOut} from './utils'

function App() {
  const [showAlert, setShowAlert] = useState(true)
  const [carCanGoOut, setCarCanGoOut] = useState(false)

  const HandlePredictPicoYPlaca = (plateNumber, dateTime) => {
    const mom = moment(dateTime)
    const date = mom.format('DD-MM-YYYY')
    const time = mom.format('hh:mm A')
    console.log('date', date)
    console.log('time', time)

    setShowAlert(true)
    setCarCanGoOut(CarCanGoOut(plateNumber, date, time))
  }

  return (
    <div className="m-4">
      <h1>Pico y Placa Predictor</h1><hr />
      <div className='mt-3'>
        <PlateForm onClick={HandlePredictPicoYPlaca} />

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

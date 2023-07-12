import { useState } from 'react'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Button from './components/Button'

function App() {
 const [alertVisible, setAlertVisibility] = useState(false); 
 let cities = ['Amsterdam', 'tehran', 'shiraz']

return(
          <div>
            {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>SUCCESS</Alert> }
              
              <Button color='primary' onClick={()=>setAlertVisibility(true)}>
                  See Message
              </Button>
              <ListGroup items={cities} heading='DESTINATIONS' onSelectItem={()=>console.log('hello')} />
          </div>
          ) 
}

export default App;

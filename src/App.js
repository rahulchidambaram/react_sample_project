import logo from './logo.svg';
import FunctionalComponent from './typesofcomponents/FunctionalComponent';
import ClassComponent from './typesofcomponents/ClassComponent';
import ComponentLifeCycleClass from './typesofcomponents/ComponentLifeCycleClass';
import ControlledComponent from './typesofcomponents/ControlledComponent';
import UncontrolledComponent from './typesofcomponents/UncontrolledComponent';
import ListExample from './typesofcomponents/ListExample';
import EmployeeList from './typesofcomponents/EmployeeList';
import TestProject from './typesofcomponents/TestProject';
import RouterExample from './phasetwo/RouterExample';
import StdDetails from './phasetwo/StudentContext';
import StudentDetails from './phasetwo/StudentDetails';
import React from 'react';
import HooksExample from './phasetwo/HooksExample';
import './sample.css';
import { Provider } from 'react-redux';
import airthmeticStore from './redux/Store';
import ReduxExample from './redux/ReduxExample';



function App() {
  return (
    <div>
      {/* <FunctionalComponent description="Props Example" name="Prop Name" salary="50000" />
      <ClassComponent description="Props Example" channel="Data passing" />
      <br></br>
      <p>----------------------------------------------------------------</p>
      
      <ComponentLifeCycleClass />
      <ControlledComponent />
      <br></br>
      <UncontrolledComponent />
      <br></br>
      <ListExample />
      <br></br>
      <EmployeeList /> 
      <TestProject /> */ }
      <RouterExample />
      <React.Fragment>
        <StdDetails.Provider value={{
          name: 'RC', age: 23, marks: '485',
          address: 'Chennai', contactNo: '9887123400'
        }}>
          <HooksExample />
        </StdDetails.Provider>
      </React.Fragment>

      <Provider store={airthmeticStore}>
      <ReduxExample />
      </Provider>

    </div>
  );
}

export default App;

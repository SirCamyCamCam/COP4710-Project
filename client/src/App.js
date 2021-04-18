import React, {useState} from 'react';
import LoginBox from "./components/LoginBox";
import './index.css'

function App() {
    return (
        <LoginBox Login={LoginCheck} error={error} />
    );
}

export default App;

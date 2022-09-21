// import { data } from '../../SpeakerData';
import Header from './Header';
import { useState } from 'react';
import Speakers from './Speakers';

function App(){
    // useState: applying hook in parent component and from here passing to SpeakersToolbar child as props so state can change in dropdown
    const [theme, setTheme] = useState("light");
    return(
<div 
className={
theme === 'light' ? 'container-fluid light'
: 'constainer-fluid dark'
}
>
    <Header theme={theme}/>
    <Speakers theme={theme} setTheme={setTheme}/>
</div>
    )
}

export default App;

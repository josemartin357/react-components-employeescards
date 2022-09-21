import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar'
import { useState } from "react";


function Speakers({ theme, setTheme }){
    const [showSessions, setShowSessions] = useState(true);
    return(
        <>
        {/* setShowSessions runs in SpeakersToolbar so we passed it as prop */}
        <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions} setShowSessions={setShowSessions}/>
        <SpeakersList showSessions={showSessions} />
        </>
    )
}

export default Speakers;
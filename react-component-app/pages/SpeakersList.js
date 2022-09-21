import Speaker from './Speaker';
import { data } from '../../SpeakerData';
import { useState } from 'react';


function SpeakersList ({ showSessions }) {

    const [speakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle(id) {
        // 1- we use find to get the reference to the speaker record we want to change
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        // 2- making new updated version of that record
        const speakerRecUpdated = {
            // we first spread values of previous record
            ...speakersRecPrevious,
            // replacing favorite with its toggled boolean value
            favorite: !speakersRecPrevious.favorite
        };
        // 3- running thru data array and updating the speaker record
        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakerRecUpdated : rec;
        });
        // 4- call setter function with new updated value
        setSpeakersData(speakersDataNew);
    }

    return(
        <div className="container speakers-list" >
            <div className="row">
                {speakersData.map(function (speaker){
                    return (
                        // important: use key so everytime a speaker gets updated, moved or removed, its info will adjust properly
                        <Speaker
                        key={speaker.id}
                        speaker={speaker}
                        showSessions={showSessions}
                        // the goal is to reach SpeakerFavorite which currently does not have a id. To go around, we use lambda to write a function call to onFavoriteToggle with the instance of id in the respective Speaker component
                        onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id);
                        }}
                        />
                    )
                })}
            </div>
        </div>
)}

export default SpeakersList;
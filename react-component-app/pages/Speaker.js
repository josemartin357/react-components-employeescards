import { useState } from "react"

function Session({ title, room }) {
    // const {title, room} = props;
    return(
        <span className="session w-100">
            {title} <strong>Room: {room.name }</strong>
        </span>
    )}

function Sessions({ sessions }){
    return(
        // sessions info
        <div className="sessionBox card h-250">
            <Session {...sessions[0]}
            // or you can call props like this:
            // title={sessions[0].title}
            // room={sessions[0].room.name}
            />
        </div>
    )
}

function SpeakerImage ({ id, first, last}) {
    return(
        // speaker img
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                // using js template expression
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>

    )
}

function SpeakerFavorite ( {favorite, onFavoriteToggle} ){
    return (
        <div className="action padB1">
            {/* tip: add onClick event to span enclosing icon */}
            <span
                onClick={onFavoriteToggle}
            >
                <i className={
                    favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
                }
                />{" "}
                Favorite{" "}
            </span>
        </div>
    )}

function SpeakerDemographics({ first, last, bio, company, twitterHandle, favorite, onFavoriteToggle }) {
    return(
        // speaker info
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                {first} {last}
                </h3>
            </div>
            <SpeakerFavorite 
                favorite={favorite}
                onFavoriteToggle={onFavoriteToggle}
            />
            <div>
                <p>{bio}</p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Speaker({ speaker, showSessions, onFavoriteToggle }){
    const { id, first, last, sessions} = speaker
    return(
        <div 
        className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage 
                id={id}
                first={first}
                last={last}
                />
                <SpeakerDemographics 
                {...speaker}
                onFavoriteToggle={onFavoriteToggle}
                />
            </div>
            {showSessions === true ? <Sessions sessions={sessions} /> : null}
        </div>
    )
}

export default Speaker;
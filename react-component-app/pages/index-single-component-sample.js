// EXAMPLE WITH ONE BIG COMPONENT: here we grab data from speaker array, destructure keys from it; and in the return, map thru each speaker data to generate row of speakers

import { data } from "../../SpeakerData";

const IndexPage = () => {
    return (
        <div className="container speakers-list" >
            <div className="row">
                {data.map(function (speaker){
                    // destructuring keys from speaker array
                    const { id, bio, first, last, favorite, twitterHandle, company, sessions } = speaker;

                    return (
                        // important: use key so everytime a speaker gets updated, moved or removed, its info will adjust properly
                        <div 
                        key={id} 
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card card-height p-4 mt-4">
                            {/* speaker img */}
                            <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
                                <img
                                    className="contain-fit"
                                    // using js template expression
                                    src={`/images/speaker-${id}.jpg`}
                                    width="300"
                                    alt={`${first} ${last}`}
                                />
                            </div>
                            {/* speaker info */}
                            <div className="speaker-info">
                                <div className="d-flex justify-content-between mb-3">
                                    <h3 className="text-truncate w-200">
                                    {first} {last}
                                    </h3>
                                </div>
                                <div>
                                    <p>{bio} {company} {twitterHandle} {favorite}</p>
                                </div>
                            </div>
                        </div>
                            {/* sessions info */}
                            <div className="sessionBox card h-250">
                                <span className="session w-100">
                                    {sessions[0].title} <strong>Room: {sessions[0].room.name}</strong>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default IndexPage;






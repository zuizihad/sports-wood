import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
const Team = (props) => {
    const { idTeam, strTeam, strSport, strTeamBadge } = props.team;

    return (
        <div className='league'>
            <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <p>Sports type: {strSport}</p>
            <Link to={`/club/${idTeam}`}>
                <button>
                    Explore &nbsp;  <i className="fas fa-arrow-right"></i></button>
            </Link>
        </div>
    );
};

export default Team;
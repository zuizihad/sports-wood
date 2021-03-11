import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faFlag, faFutbol, faMarsStroke, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../img/Icon/Facebook.png';
import youtube from '../../img/Icon/YouTube.png';
import twitter from '../../img/Icon/Twitter.png';
import maleImg from '../../img/Photo/male.png'
import femaleImg from '../../img/Photo/female.png'

const Details = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    }, [id]);

    let banner;
    if (detail.strGender === 'Male') {
        banner = <img src={maleImg} alt='' />
    } if (detail.strGender === 'Female') {
        banner = <img src={femaleImg} alt='' />
    }
    return (
        <div className='detail'>
            <div className="banner">
                <img src={detail.strTeamBanner} alt='logo' />
            </div>
            <div className="info">
                <div className="info-card">
                    <div className="info-text">
                        <h1>{detail.strTeam}</h1>
                        <h3> <FontAwesomeIcon icon={faCompass} />&nbsp;Founded: {detail.intFormedYear}</h3>
                        <h3><FontAwesomeIcon icon={faFlag} />&nbsp;Counrty: {detail.strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} />&nbsp;Sports type: {detail.strSport}</h3>
                        <h3><FontAwesomeIcon icon={faStarHalfAlt} />&nbsp;Stadium: {detail.strStadium}</h3>
                        <h3><FontAwesomeIcon icon={faMarsStroke} />&nbsp;Gender: {detail.strGender}</h3>
                    </div>
                    <div className="info-img">
                        {banner}
                    </div>
                </div>
                <div className='description'>
                    <p>{detail.strDescriptionEN}</p>
                    <p>{detail.strDescriptionDE}</p>
                </div>
                <div className="social">
                    <a target="blank" href={`https://${detail.strFacebook}`}>
                        <img src={facebook} alt="" />
                    </a>
                    <a target="blank" href={`https://${detail.strTwitter}`}>
                        <img src={twitter} alt="" />
                    </a>
                    <a target="blank" href={`https://${detail.strYoutube}`}>
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Details;
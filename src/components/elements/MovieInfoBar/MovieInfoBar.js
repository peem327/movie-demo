import React from 'react';
import FontAweSome from 'react-fontawesome'
import {calcTime, convertMoney} from '../../../helpers'
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {

    return (
    <div className = "rmdb-movieinfobar">
      <div className = "rmdb-movieinfobar-content">
        <div className = "rmdb-movieinfobar-col">
          <FontAweSome className = "fa-time" name ="clock-o" size = "2x"/>
          <span className = "rmdb-movieinfobar-info">Running time : {calcTime(props.time)}</span>
        </div>
      </div>
    </div>
      );

}

export default MovieInfoBar;

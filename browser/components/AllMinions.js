import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { deleteMinionThunk } from '../store/minions'; 
import Minion from './Minion';

const AllMinions = props => {
  const minions = props.minions.map(minion => {
    let name = minion.name.match(/.{1,11}/g).join('\n');
    return (
      <div className="minion-grid" key={minion.id}>
        <Link to={`/minions/${minion.id}`} >
          <img className="button minion-thumbnail" src={`public/img/${minion.id}.png`} alt="minion" />
          <p style={{textAlign:'left'}}>{name}</p>
          <p>ID #{minion.id}</p>
        </Link>
        <img onClick={() => props.deleteMinion(minion.id)}  className="button x-button" src="public/img/x_button.svg" alt="" />
      </div>
    )
  });
  
  return (
    <div>
      <div id="minions-landing">
        <div id="minions-title" className="label minions-label">Workers</div>
        <div id="all-minions">
          { minions }
          <div id="add-minion-button-grid" className="minion-grid">
            <Link to="/minions/new">
              <button className="add_minion_button" style = {{ borderRadius: '50px', backgroundColor: '#ff4f58', color:'white' , cursor: 'pointer', fontSize:'24px'}} >Add Minion</button>
              {/* <img id="add-minion-button" className="button" src="public/img/add_button.svg" alt="" /> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="button back-button">
        <Link to="/">
          <img className="button" src="public/img/arrow.svg" />
        </Link>
      </div>
    </div>
  )
}

const mapState = ({minions}) => ({
  minions
});

const mapDispatch = dispatch => ({
  deleteMinion: minionId => {
    dispatch(deleteMinionThunk(minionId));
  }
})

export default connect(mapState, mapDispatch)(AllMinions);
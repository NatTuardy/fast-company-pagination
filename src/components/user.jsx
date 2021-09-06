import React from 'react';
import Qualities from './qualitie'
import BookMark from './bookmark'


const User = ({_id, name, qualities, profession, completedMeetings, rate, onDelete, onToggle, status}) => {

    return ( <>
        <tr >
          <td>{name}</td>
          <td>
            {qualities.map((qua) => (
                <Qualities {...qua} key={qua._id}/>
            ))}
          </td>
          <td>{profession.name}</td>
          <td>{completedMeetings}</td>
          <td>{rate}</td>
          <td><BookMark id={_id} status={status} onToggle={onToggle}/></td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(_id)}
            >
              delete
            </button>
          </td>
        </tr>
      </> );
}
 
export default User;
import React from 'react';

const Qualitie = ({color, name }) => {

    const getBadgeclasses = (color) => {
        let classes = "badge bg-";
        classes += color;
        return classes;
      };

    return ( <><span className={getBadgeclasses(color)}>{name}</span></> );
}
 
export default Qualitie;
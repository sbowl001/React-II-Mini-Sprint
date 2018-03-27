import React from "react";

const PeopleList = props => {
    return <div>
        
            {props.people.map(person => {
            return <li>
            {`${props.first_name} ${props.last_name}`}
            {people.email}</li>
           
          })}
        
      </div>;
};

export default PeopleList;
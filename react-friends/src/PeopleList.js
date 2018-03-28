import React from "react";
import  "./PeopleList.css";

 export const PeopleList = (props) => {
    return (
    
    <div className = "People-Wrapper">
        
            {props.people.map((person => {
            return (
            <div className="listContainer">
                <h5 className= "names">{person.first_name}</h5>
                <h5  className="lastNames">{person.last_name}</h5>
                <h5 className="emails">{person.email}</h5>
           </div>
            )
           
          }))}
        
      </div>
    )
};

 
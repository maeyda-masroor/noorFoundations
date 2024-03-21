import React, {useContext} from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';
import {Context} from "../component/Wrapper";

function Test(props) {
 return (
   <div className="App">
     <header className="App-header">
       <p>
         <FormattedMessage
             id = "app.header"
             defaultMessage="Edit the files and save to reload"
             values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
         />
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         <FormattedMessage
           id = "app.content"
           defaultMessage="Learn React"
         />

       </a>
       <FormattedMessage
         id = "app.channel.plug"
         defaultMessage="Tutorial brought to you by Lokalise"
         values = {{blogName: "Lokalise"}}
       />
       <br/>
       <FormattedDate
           value={props.date}
           year = 'numeric'
           month= 'long'
           day = 'numeric'
           weekday = 'long'
       />
       <br/>
       <FormattedMessage id='welcome' defaultMessage="come" />
     </header>
   </div>
 );
}

export default Test;
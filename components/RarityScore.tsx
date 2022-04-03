import React from 'react'
import { useState } from 'react';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import {
    BaseLayout,
    Container,
    Grid,
    Section,
    SectionHeader,
    Typography
  } from '@iotabots/components'


/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */

//  const sizes = [
//                     { value: 's', name: 'Small' },
//                     { value: 'm', name: 'Medium' },
//                     { value: 'l', name: 'Large' },
//                 ]

//    const [size, setSize] = useState('s');
//      const style = {
//          fontFamily: '"Nunito Sans", sans-serif',
//          marginTop: '24px',
//          fontSize: '16px'
//      };

//      if (size === 's') {
//          style.fontSize = '16px';
//      } else if (size === 'm') {
//          style.fontSize = '32px';
//      } if (size === 'l') {
//          style.fontSize = '64px';
//      }

//  const RarityScore: React.FC = () => {
   
//      return(
//          <div>
//          <SelectSearch
//              options={sizes}
//              search
//              filterOptions={fuzzySearch}
//              emptyMessage="Not found"
//              placeholder="Select your country"
//          />
//          <h1 style={style}>Aa</h1>
//          </div>
//      )
// }

export const displayOptions  = [
    { value: 0.03, name: 'Small' },
    { value: 2.7, name: 'Medium' },
    { value: 7.47, name: 'Large' },
]

export const bodyOptions  = [
    { value: 0.41, name: 'Small' },
    { value: 0.2, name: 'Medium' },
    { value: 3.32, name: 'Large' },
]


export const RarityScoreSoonabots = () => {
    const [display, setDisplay] = useState(null);
    const [body, setBody] = useState(null);

    const style = {
        fontFamily: '"Nunito Sans", sans-serif',
        marginTop: '16px',
    };

    const button = {
        marginTop: '16px',
        display: 'inline-flex',
        position: 'relative',
        alignItems: 'center',
        height: '40px',
        padding: '0 16px',
        borderRadius: '3px',
        border: 'none',
        background: 'rgb(49, 173, 122)',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
    };

    const buttonTwo = {
        ...button,
        background: 'transparent',
        border: '2px solid #888',
        color: '#888',
        marginLeft: '8px',
    };

    const resetValues = () => {
        setDisplay(null)
       
    }


    const setDisplayValue = (display) => {
        setDisplay(display)
        //setRarityScore()
    }

    const setBodyValue = (body) => {
        setBody(body)
        //setRarityScore()
    }


    return (       
        <Container maxWidth='md'>
                        <Grid justifyContent='center'>
                        <h3 className="select-search-heading">DISPLAY</h3>
                        <SelectSearch
                            onChange={display => {setDisplayValue(display)}}
                            search
                            filterOptions={fuzzySearch}
                            value={display}
                            placeholder="Set your display"
                            options={displayOptions}
                        />
                        <div className="select-search-bottom"> Rarity Score: {display}</div>
                    </Grid>
                    <Grid>
                        <h3 className="select-search-heading">BODY</h3>
                        <SelectSearch
                            onChange={body => {setBodyValue(body)}}
                            search
                            filterOptions={fuzzySearch}
                            value={body}
                            placeholder="Set your body"
                            options={bodyOptions}
                        />
                        <div className="select-search-bottom">Rarity Score: {body} </div>
                    </Grid>
                    <Grid>
                        <h3 className="select-search-heading">FACE</h3>
                        <SelectSearch
                            onChange={face => {setFaceValue(face)}}
                            search
                            filterOptions={fuzzySearch}
                            value={face}
                            placeholder="Set your face"
                            options={faceOptions}
                        />
                        <div className="select-search-bottom">Rarity Score: {face} </div>
                    </Grid>




                 <Grid  
                    container spacing={1}
                    justifyContent='center'
                >
                    <Grid className="select-search-reset-button">
                    <button type="button" style="button" onClick={resetValues} >{display}</button>
                    </Grid>
                </Grid>  
                <Grid  
                    container spacing={1}
                    justifyContent='center'
                >
                    <Grid className="select-search-reset-button">
                    <button type="button" style="buttonTwo" onClick={resetValues} >{body}</button>
                    </Grid>
                </Grid>  

        </Container>
    );
};

export default RarityScoreSoonabots

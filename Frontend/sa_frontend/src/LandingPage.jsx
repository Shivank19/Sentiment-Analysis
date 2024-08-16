// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(){
    return (
        <div style={styles.container}>
            <h1>Welcome to Sentiment Analysis</h1>
            <Link to="/predict" >
                <button style={styles.button}>Start</button>
            </Link>
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default LandingPage;
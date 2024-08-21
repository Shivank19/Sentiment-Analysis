/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { Link } from 'react-router-dom';

// function LandingPage() {
//   return (
//     <div style={styles.container}>
//       <h1>Welcome to Sentiment Analysis</h1>
//       <Link to='/predict'>
//         <button style={styles.button}>Start</button>
//       </Link>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#f5f5f5',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
// };

// export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1>Sentiment Analysis Project</h1>
      <button onClick={scrollToAbout}>About</button>
      <Link to='/predict'>
        <button>Start</button>
      </Link>

      <div id='about'>
        <h2>About this project</h2>
        <p>
          This project uses a machine learning model to analyze the sentiment of
          text.
        </p>
        {/* Add more details about your project */}
      </div>
    </div>
  );
}

export default LandingPage;

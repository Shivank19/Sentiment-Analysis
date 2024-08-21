/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';

// function SentimentAnalysis() {
//   const [review, setReview] = useState('');
//   const [sentiment, setSentiment] = useState(null);
//   const [score, setScore] = useState(null);

//   const handleInputChange = (e) => {
//     setReview(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/predict', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ review }),
//     });
//     const data = await response.json();
//     setSentiment(data.sentiment);
//     setScore(data.score);
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Sentiment Analysis</h1>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <textarea
//           value={review}
//           onChange={handleInputChange}
//           placeholder='Enter your review here'
//           style={styles.textarea}
//         ></textarea>
//         <button type='submit' style={styles.button}>
//           Analyze Sentiment
//         </button>
//       </form>
//       {sentiment && (
//         <div style={styles.result}>
//           <h2>Sentiment: {sentiment}</h2>
//           <p>Score: {score.toFixed(2)}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f5f5f5',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   textarea: {
//     width: '300px',
//     height: '100px',
//     marginBottom: '20px',
//     padding: '10px',
//     fontSize: '14px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   result: {
//     marginTop: '20px',
//     textAlign: 'center',
//   },
// };

// export default SentimentAnalysis;

import React, { useState } from 'react';

function SentimentAnalysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Sentiment Analysis</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Predict</button>

      {result && (
        <div>
          <p>Text: {result.text}</p>
          <p>Score: {result.score}</p>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalysis;

from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.corpus import stopwords
import joblib

app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:5173/"])

#Load the trained model and vectorizer
model = joblib.load('models/sentiment_model.pkl')
tfidf = joblib.load('data/preprocessed_data.pkl')[6]        #tfidf is the 7th item saved

# @app.route('/')
# def hello():
#     return '<h1>Hello, World!</h1>'
@app.route('/predict', methods=['POST'])
def predict():
    review_text = request.form['q']

    processed_text = ' '.join([word for word in review_text.lower().split() if word not in set(stopwords.words('english'))])
    vectorized_text = tfidf.transform([processed_text])

    prediction = model.predict(vectorized_text)
    prediction_score = model.predict_proba(vectorized_text)
    sentiment = 'Positive' if prediction[0] == 1 else 'Negative'
    sentiment_score = prediction_score[0][1] if prediction[0] == 1 else prediction_score[0][0]

    response = jsonify({'sentiment': sentiment, 'score': sentiment_score})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
import nltk
from nltk.corpus import stopwords
import string

nltk.download('stopwords')

# read dataset
df = pd.read_csv('data/Reviews.csv')

df = df[['Score', 'Text']].dropna()

# Convert the Score into binary sentiment labels :- 1: Positive, 0: Negative
df['Sentiment'] = df['Score'].apply(lambda x: 1 if x > 3 else 0)
df = df[df['Score'] != 3]  # Remove neutral reviews

# Text proprocessing
def preprocess_text(text):
    text = text.lower()
    # Remove Stopwords
    text = ''.join([char for char in text if char not in string.punctuation])
    words = text.split()
    # Remove stopwords
    words = [word for word in words if word not in stopwords.words('english')]
    return ' '.join(words)

df['Preprocessed_Text'] = df['Text'].apply(preprocess_text)

x_train, x_temp, y_train, y_temp = train_test_split(df['Preprocessed_Text'], df['Sentiment'], test_size=0.3, random_state=42)
x_val, x_test, y_val, y_test = train_test_split(x_temp, y_temp, test_size=0.5, random_state=42)

#Vectorize using TF-IDF
tfidf = TfidfVectorizer(max_features=5000)
x_train_tfidf = tfidf.fit_transform(x_train)
x_val_tfidf = tfidf.transform(x_val)
x_test_tfidf = tfidf.transform(x_test)

# Save the processed data for future use
import joblib
joblib.dump((x_train_tfidf, y_train, x_val_tfidf, y_val, x_test_tfidf, y_test, tfidf), 'data/preprocessed_data.pkl')
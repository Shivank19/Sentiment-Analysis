import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Load the preprocessed data
X_train_tfidf, y_train, X_val_tfidf, y_val, X_test_tfidf, y_test, tfidf = joblib.load('data/preprocessed_data.pkl')

# Initialize and train the logistic regression model
model = LogisticRegression(max_iter=10000)
model.fit(X_train_tfidf, y_train)

# Evaluate the model on the validation set
y_val_pred = model.predict(X_val_tfidf)
val_accuracy = accuracy_score(y_val, y_val_pred)
print(f"Validation Accuracy: {val_accuracy * 100:.2f}%")
print("\nClassification Report:")
print(classification_report(y_val, y_val_pred))
print("\nConfusion Matrix:")
print(confusion_matrix(y_val, y_val_pred))

# Save the trained model for future use
joblib.dump(model, 'models/sentiment_model.pkl')

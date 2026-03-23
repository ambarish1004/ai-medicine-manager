import numpy as np
from sklearn.linear_model import LogisticRegression

# Dummy training data
X = np.array([
    [0, 5, 0],
    [2, 30, 1],
    [1, 15, 0],
    [3, 60, 1]
])

y = np.array([0, 1, 0, 1])  # 0 = low risk, 1 = high risk

model = LogisticRegression()
model.fit(X, y)

def predict_risk(missed, delay, side_effects):
    prediction = model.predict([[missed, delay, side_effects]])
    return "High Risk" if prediction[0] == 1 else "Low Risk"
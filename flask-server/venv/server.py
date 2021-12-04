import random
import os
import numpy as np
import librosa
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model

app = Flask(__name__)

mfccs = 0.0
def extract_data(file_name):
# function to load files and extract features
    try:
     # here kaiser_fast is a technique used for faster extraction
        X, sample_rate = librosa.load(file_name, res_type='kaiser_fast') 
        # we extract mfcc feature from data
        global mfccs
        mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=40).T,axis=0) 
    except Exception as e:
        print("Error encountered while parsing file: ")
    feature = np.array(mfccs).reshape([-1,1])
    print(mfccs)
    return feature

savedModel = load_model('ROAK.h5')

@app.route("/text", methods=["POST"])
def text():
    name_file = request.values["name"]
    return('hello'+ name_file)
    
@app.route("/heart", methods=["POST"])
def audio():
    data = []
    h_sound = request.values["heart"]
    test1 = extract_data(h_sound)
    data.append(test1)
    x = savedModel.predict_classes(np.array(data))
    print(x)
    return(str(x[0]))

if __name__ == '__main__':
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0', port=port, debug=True)
    
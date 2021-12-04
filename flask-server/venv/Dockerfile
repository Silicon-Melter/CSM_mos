FROM python:3.7
COPY . /venv
WORKDIR /venv
RUN apt-get update
RUN apt-get install -y libsndfile1
RUN pip install -r requirements.txt
RUN pip3 install Pillow
ENTRYPOINT ["python"]
CMD ["server.py"]
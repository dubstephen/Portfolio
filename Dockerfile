FROM python:3.8
WORKDIR /portfolio

COPY requirements.txt ./
RUN pip install -r requirements.txt
RUN pip install pymongo

COPY ./ ./

EXPOSE 8000

CMD ["python3","portfolio/manage.py","runserver"]
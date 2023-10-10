import requests
import json
import pymongo
data = requests.get("https://jsonplaceholder.typicode.com/posts/")


def api(data):
    i = 1
    while i != 100 :
        id = data.json()[i]["id"]
        title = data.json()[i]["title"]
        body = data.json()[i]["body"]
        print(f"ID: {id} \ntitle: {title}\nmessage:{body}")
        i = i+1

    
api(data)




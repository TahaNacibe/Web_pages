import requests
import json

from pymongo import MongoClient
data = requests.get("https://jsonplaceholder.typicode.com/posts/")


def api(data):
    i = 1
    while i != 100 :
        id = data.json()[i]["id"]
        title = data.json()[i]["title"]
        body = data.json()[i]["body"]
        print(f"ID: {id} \ntitle: {title}\nmessage:{body}")
        i = i+1

    
#api(data)
client = MongoClient("mongodb+srv://taha:2003@cluster0.zgznt5k.mongodb.net/")
#the database create if note exist
db = client.note
#collection same shit here too
SharedNote = db.Shared_Note
#adding one item 
SharedNote.insert_one({"Date":"10/10/2032","title":"Just Example","body":"message here pls"})
#updating value of all or use _one to edit only one can use id to edit specific
SharedNote.update_many({"body":"message here pls"},{"$set":{"body":"message here pls vol2"}})
#deleting use the same rules as the update sooo figed out man
SharedNote.delete_many({"body":"message here pls vol2"})
#list all the objects
#can put a filter find({"title":"j"})
for note in SharedNote.find():
    print(note)
#counting things withe filter
count = SharedNote.count_documents({"title":"Just Example"})
print(count)




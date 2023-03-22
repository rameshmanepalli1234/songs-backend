import json
import requests

BASE_URL= "http://localhost:8080/api/songs/add"

def loadJSON(filename):
    data = {}
    with open(filename, 'r') as f:
        data = json.load(f)
    f.close()
    return data


songs_json = loadJSON('./data/songsNew.json')

payload = songs_json[0]
headers = {'Content-type': 'application/json'}

response = requests.post(url=BASE_URL,data=json.dumps(payload,ensure_ascii=False),headers=headers)
print(response.status_code)
print(response.json())

print(json.dumps(payload,indent=6,ensure_ascii=False))
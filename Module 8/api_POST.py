import requests
import json

def create_new_post(title, body, user_id):
    url = 'https://jsonplaceholder.typicode.com/posts'
    post_data = { "title": title, "body": body, "userId": user_id }
    headers = { "Content-Type": "application/json" }

    try:
        response = requests.post(url, headers=headers, json=post_data)
        response.raise_for_status()
        new_post = response.json()
        print("\nNewly Created Post:")
        print(json.dumps(new_post, indent=2))
    except requests.exceptions.RequestException as e:
        print(f"Error creating post: {e}")

create_new_post("Python Coded Post", "Created using Python requests.", 10)

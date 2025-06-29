import requests
import json

def fetch_all_posts():
    url = 'https://jsonplaceholder.typicode.com/posts'
    try:
        response = requests.get(url)
        response.raise_for_status()
        posts = response.json()
        print("All Posts:")
        print(json.dumps(posts, indent=2))
        if posts:
            print("\nFirst Post Title:", posts[0]['title'])
    except requests.exceptions.RequestException as e:
        print(f"Error fetching posts: {e}")

fetch_all_posts()

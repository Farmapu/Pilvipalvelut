import requests
import os
from dotenv import load_dotenv

load_dotenv()

url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer " + os.getenv('API_READ_ACCESS_TOKEN')
}

params = {
    "language": "en-US",
    "page": 1
}

response = requests.get(url, headers=headers, params=params)

data = response.json()

movies = data.get("results", [])

sorted_movies = sorted(movies, key=lambda m: m["vote_average"], reverse=True)

print(f"{'Movie':40} {'Rating'}")
print("-" * 50)

for movie in sorted_movies:
    print(f"{movie['title'][:38]:40} {movie['vote_average']}")


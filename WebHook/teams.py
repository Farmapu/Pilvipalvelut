import requests
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv('API_KEY')
city = "Vantaa"

def send_teams_message(message: str):
    webhook = os.getenv('WEBHOOK')

    payload = {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.2",
        "body": [
            {
                "type": "TextBlock",
                "text": message,
                "wrap": True
            }
        ]
    }

    response = requests.post(webhook, json=payload)
    print(response.status_code)
    print(response.text)

def call_weather_api():
    
    url = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}"
    response = requests.get(url)
    weather_data = response.json()
    send_teams_message("Tämän hetkinen lämpötila kaupungissa " + str(city) + " on: " + str(weather_data["current"]["temp_c"]) + " °C")

call_weather_api()


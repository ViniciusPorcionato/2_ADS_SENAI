import requests
import pandas as pd

url = "http://localhost:8000/api/"

data = {
    'buying': 4,
    'maint': 4,
    'lug_boot': 0,
    'safety': 3,
    'doors_2': 1,
    'doors_3': 0,
    'doors_4': 0,
    'doors_5more': 0,
    'persons_2': 0,
    'persons_4': 1,
    'persons_more': 0
}

response = requests.post(url, json=data)

if response.status_code == 200:
    resultado = response.json()
    print("Resposta da API:", resultado)
    print(resultado["previsao"])
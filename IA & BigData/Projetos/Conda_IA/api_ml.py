import joblib
import pandas as pd
import uvicorn
import nest_asyncio
from pydantic import BaseModel
from fastapi import FastAPI


class InputData(BaseModel):
    buying: float
    maint: float
    lug_boot: float
    safety: float
    doors_2: int
    doors_3: int
    doors_4: int
    doors_5more: int
    persons_2: int
    persons_4: int
    persons_more: int
    
# Instanciar um objeto em FastAPI
app = FastAPI()

# Definir a rota que receberá os dados via POST
@app.post("/api/")
async def recebe_dados(data: InputData):
    # Caminho para os arquivos do pre-processamento e do modelo
    pre_processamento = "/notebook/scaler.pkl"
    modelo = "/notebook/modelo_SVM.pkl"
    #Carregando os modelos salvos:
    scaler = joblib.load(pre_processamento)
    model = joblib.load(modelo)
    dados = {
        'buying': [data.buying],
        'maint': [data.maint],
        'lug_boot': [data.lug_boot],
        'safety': [data.safety],
        'doors_2': [data.doors_2],
        'doors_3': [data.doors_3],
        'doors_4': [data.doors_4],
        'doors_5more': [data.doors_5more],
        'persons_2': [data.persons_2],
        'persons_4': [data.persons_4],
        'persons_more': [data.persons_more]
    }
    
    #Transformando dado recebido em DataFrame
    dado_previsao = pd.DataFrame(dados)
    #Ajustando a escala dos dados e realizando a previsão
    dado_previsao = scaler.transform(dado_previsao)
    #Fazendo a previsão com machine learning
    resultado = model.predict(dado_previsao)
    return {'resposta': resultado[0]}

uvicorn.run(app, host="0.0.0.0", port=8000)
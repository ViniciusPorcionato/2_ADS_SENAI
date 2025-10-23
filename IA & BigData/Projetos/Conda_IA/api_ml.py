# Importa a biblioteca joblib, usada para carregar modelos e objetos (como o scaler) salvos em disco
import joblib

# Importa a biblioteca pandas, usada para manipulação de dados em formato de DataFrame
import pandas as pd

# Importa o servidor uvicorn, usado para rodar a aplicação FastAPI
import uvicorn

# Permite que o asyncio (usado internamente pelo FastAPI) rode em notebooks Jupyter
import nest_asyncio

# Importa a classe BaseModel da biblioteca Pydantic, usada para validação e tipagem dos dados recebidos
from pydantic import BaseModel

# Importa o framework FastAPI, que será usado para criar a API
from fastapi import FastAPI


# Cria uma classe que define o formato dos dados de entrada esperados pela API
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
    
# Instancia o aplicativo FastAPI
app = FastAPI()

# Define uma rota POST que será chamada no endpoint "/api/"
# Quando a API receber uma requisição POST com dados no formato definido em InputData,
# a função "recebe_dados" será executada.
@app.post("/api/")
async def recebe_dados(data: InputData):
    # Define os caminhos onde estão salvos o scaler (pré-processamento) e o modelo treinado
    pre_processamento = "notebook/scaler.pkl"  
    modelo = "notebook/modelo_SVM.pkl"
    
    # Carrega os arquivos salvos (scaler e modelo) para uso
    scaler = joblib.load(pre_processamento)
    model = joblib.load(modelo)
    
    # Organiza os dados recebidos na requisição em um dicionário
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
    
    # Converte o dicionário em um DataFrame do pandas (formato aceito pelo scaler e modelo)
    dado_previsao = pd.DataFrame(dados)
    
    # Aplica o mesmo pré-processamento (normalização ou padronização) usado no treino do modelo
    dado_previsao = scaler.transform(dado_previsao)
    
    # Realiza a previsão usando o modelo de Machine Learning carregado
    resultado = model.predict(dado_previsao)
    
    # Retorna a resposta em formato JSON com o resultado da previsão
    return {'previsao': resultado[0]}

# Executa o servidor Uvicorn na porta 8000, disponível para todas as interfaces de rede (0.0.0.0)
uvicorn.run(app, host="localhost", port=8000)

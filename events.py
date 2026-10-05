from typing import List
from pydantic import BaseModel

class EventConfig(BaseModel):
    paquete: str
    horario: str
    dia: str
    capacidad: int
    adicionales: List[str]

PRICES_MATRIX = {
    "Desayuno": {
        "Lunes a Jueves": {
            40: {"HAPPY": 11900, "FUN": 14900, "CELEBRATION": 18900},
            50: {"HAPPY": 13400, "FUN": 16400, "CELEBRATION": 21900},
            75: {"HAPPY": 16900, "FUN": 21400, "CELEBRATION": 26400},
            85: {"HAPPY": 18400, "FUN": 22900, "CELEBRATION": 27900},
        },
        "Viernes a Domingo": {
            40: {"HAPPY": 14900, "FUN": 18400, "CELEBRATION": 21400},
            50: {"HAPPY": 15900, "FUN": 20400, "CELEBRATION": 23900},
            75: {"HAPPY": 20400, "FUN": 25900, "CELEBRATION": 29900},
            85: {"HAPPY": 22400, "FUN": 27900, "CELEBRATION": 32400},
        }
    },
    "Comida": {
        "Lunes a Jueves": {
            40: {"HAPPY": 12900, "FUN": 16900, "CELEBRATION": 20400},
            50: {"HAPPY": 14400, "FUN": 18400, "CELEBRATION": 22900},
            75: {"HAPPY": 18400, "FUN": 23400, "CELEBRATION": 27900},
            85: {"HAPPY": 20400, "FUN": 25400, "CELEBRATION": 29900},
        },
        "Viernes a Domingo": {
            40: {"HAPPY": 16900, "FUN": 20900, "CELEBRATION": 23900},
            50: {"HAPPY": 18900, "FUN": 23400, "CELEBRATION": 26400},
            75: {"HAPPY": 23400, "FUN": 28900, "CELEBRATION": 33900},
            85: {"HAPPY": 24900, "FUN": 30900, "CELEBRATION": 36900},
        }
    }
}

PRICES_ADICIONALES = {
    "show_tematico": 5000,
    "decoracion": 3000,
    "carrito_monchis": 2500,
    "munchie_cart": 2500,
    "pastel_premium": 1500
}

def calculate_event_cost(config: EventConfig) -> int:
    try:
        base_cost = PRICES_MATRIX[config.horario][config.dia][config.capacidad][config.paquete]
    except KeyError:
        base_cost = 11900
    
    addons_cost = 0
    for addon in config.adicionales:
        addons_cost += PRICES_ADICIONALES.get(addon, 0)
        
    return base_cost + addons_cost

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
            40: {"HAPPY": 42000, "FUN": 53500, "CELEBRATION": 54000},
            50: {"HAPPY": 47500, "FUN": 59000, "CELEBRATION": 61500},
            75: {"HAPPY": 62000, "FUN": 73000, "CELEBRATION": 75000},
            85: {"HAPPY": 67000, "FUN": 78500, "CELEBRATION": 80000},
        },
        "Viernes a Domingo": {
            40: {"HAPPY": 45000, "FUN": 55500, "CELEBRATION": 56000},
            50: {"HAPPY": 49500, "FUN": 61000, "CELEBRATION": 63500},
            75: {"HAPPY": 64000, "FUN": 74000, "CELEBRATION": 76000},
            85: {"HAPPY": 69000, "FUN": 79500, "CELEBRATION": 81000},
        }
    },
    "Comida": {
        "Lunes a Jueves": {
            40: {"HAPPY": 47000, "FUN": 57500, "CELEBRATION": 58000},
            50: {"HAPPY": 51500, "FUN": 63000, "CELEBRATION": 65500},
            75: {"HAPPY": 66000, "FUN": 75000, "CELEBRATION": 77000},
            85: {"HAPPY": 71000, "FUN": 80500, "CELEBRATION": 83000},
        },
        "Viernes a Domingo": {
            40: {"HAPPY": 49000, "FUN": 59500, "CELEBRATION": 60000},
            50: {"HAPPY": 53500, "FUN": 65000, "CELEBRATION": 67500},
            75: {"HAPPY": 68000, "FUN": 76000, "CELEBRATION": 78000},
            85: {"HAPPY": 73000, "FUN": 81500, "CELEBRATION": 85000},
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
        base_cost = 42000
    
    addons_cost = 0
    for addon in config.adicionales:
        addons_cost += PRICES_ADICIONALES.get(addon, 0)
        
    return base_cost + addons_cost

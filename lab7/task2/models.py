class Vehicle:
    def __init__(self, brand,model,year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"The engine of {self.brand} {self.model} has started."

    def get_info(self):
        return f"{self.year} {self.brand} {self.model}"

    def __str__(self):
        return f"Vehicle: {self.brand} {self.model} {self.year}"

class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand,model,year)
        self.fuel_type = fuel_type

    def open_trunk(self):
        return f"The trunk of {self.brand} {self.model} has been opened."

    def start_engine(self):
        return f"The {self.fuel_type} engine of {self.brand} {self.model} has started."

class Moto(Vehicle):
    def __init__(self, brand,model, year, has_sidecar = False):
        super().__init__(brand,model,year)
        self.has_sidecar = has_sidecar

    def pop_wheelie(self):
        return f"The wheelie of {self.brand} {self.model} has been popped."

    def start_engine(self):
        return f"The engine of {self.brand} {self.model} moto has started."


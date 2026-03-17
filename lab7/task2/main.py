from models import Car, Moto

def main():
    my_car1 = Car("Porche", "911", "2020", "Gasoline")
    my_moto1 = Moto("Honda", "CBR", "2019", False)
    my_car2 = Car("Ford", "91", "2001", "Gasoline")
    my_car3 = Car("Tesla", "1s", "2018", "Electric")

    vehicles = [my_car1, my_moto1, my_car2, my_car3]
    for vehicle in vehicles:
        print(vehicle)
        print(vehicle.start_engine())
        print(vehicle.get_info())
        print("------")

    print(my_car1.open_trunk())
    print(my_moto1.pop_wheelie())

if __name__ == "__main__":
    main()
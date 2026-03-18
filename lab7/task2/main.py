from models import Bicycle, Car, Vehicle


def main():
    generic = Vehicle("Abstract Vehicle", 2000, "gray")
    my_car = Car("Toyota", 2020, "red", "petrol", 5)
    my_bike = Bicycle("Stels", 2022, "blue", True)

    vehicles = [generic, my_car, my_bike]

    for v in vehicles:
        print(v)
        print("  Movement: " + v.move())

        if isinstance(v, Car):
            print("  Horn: " + v.honk())
        elif isinstance(v, Bicycle):
            print("  Bell: " + v.ring_bell())

        print("-" * 30)

if __name__ == "__main__":
    main()
class Vehicle:
    def __init__(self, brand, year, color):
        self.brand = brand
        self.year = year
        self.color = color

    def info(self):
        return self.brand + " (" + str(self.year) + "), color: " + self.color

    def move(self):
        return "The vehicle is moving."

    def __str__(self):
        return self.info()


class Car(Vehicle):
    def __init__(self, brand, year, color, fuel_type, doors=4):
        super().__init__(brand, year, color)
        self.fuel_type = fuel_type
        self.doors = doors

    def move(self):
        return "The car " + self.brand + " is driving on the road, using " + self.fuel_type + "."

    def honk(self):
        return "Beep beep!"

    def __str__(self):
        return super().__str__() + ", fuel: " + self.fuel_type + ", doors: " + str(self.doors)


class Bicycle(Vehicle):
    def __init__(self, brand, year, color, has_basket=False):
        super().__init__(brand, year, color)
        self.has_basket = has_basket

    def move(self):
        return "The bicycle " + self.brand + " is pedaling."

    def ring_bell(self):
        return "Ring ring!"

    def __str__(self):
        basket = "with basket" if self.has_basket else "without basket"
        return super().__str__() + ", " + basket

import faker from 'faker';

function generateFakeData() {
  return new Array(100).fill(undefined).map(() => ({
    id: faker.random.uuid(),
    title: `${faker.address.streetName()}, ${faker.address.city()}, ${faker.address.country()}`,
    price: faker.commerce.price(),
  }))
}

export const bigDataset = generateFakeData();

export const smallDataset = [
  {
    "id": 12345,
    "title": "Piso en Les Corts",
    "price": "300.000"
  },
  {
    "id": 11111,
    "title": "Piso dos habitaciones Barcelona",
    "price": "200.000"
  },
  {
    "id": 22222,
    "title": "Duplex barrio de gracia",
    "price": "100.000"
  },
  {
    "id": 33333,
    "title": "Piso amueblado en Paralel",
    "price": "350.000"
  },
  {
    "id": 44444,
    "title": "Piso 70m Las Ramblas",
    "price": "100.000"
  },
  {
    "id": 55555,
    "title": "Piso cerca Mercat de Sant Antoni",
    "price": "500.000"
  },
  {
    "id": 12121,
    "title": "Atico en la Barceloneta 2 habitaciones",
    "price": "700.000"
  },
  {
    "id": 21212,
    "title": "Piso barri Les Corts, 2 lavabos y 4 habitaciones",
    "price": "200.000"
  },
  {
    "id": 23232,
    "title": "Piso cerca del Camp Nou",
    "price": "900.000"
  },
  {
    "id": 22332,
    "title": "Segundo piso en el Carmelo",
    "price": "400.000"
  },
  {
    "id": 33223,
    "title": "Piso en venta cerca del mar, Badalona",
    "price": "600.000"
  },
  {
    "id": 45454,
    "title": "Piso en Sarria con 2 lavabos y 4 habitaciones",
    "price": "700.000"
  },
  {
    "id": 56565,
    "title": "Piso en Bonanova, amueblado, nueva construccion",
    "price": "800.000"
  },
  {
    "id": 88776,
    "title": "Piso en Poblenou, 50m2",
    "price": "100.000"
  },
  {
    "id": 55443,
    "title": "Plaza de parking en la Barceloneta",
    "price": "100.000"
  },
  {
    "id": 12211,
    "title": "Garaje en venta en Urquinaona",
    "price": "200.000"
  },
  {
    "id": 98898,
    "title": "Casa 4 habitaciones Plaza Concordia",
    "price": "900.000"
  },
  {
    "id": 99999,
    "title": "Oficinas 100m en diagonal",
    "price": "300.000"
  },
  {
    "id": 88877,
    "title": "Casa grande cerca de la playa, Barceloneta",
    "price": "300.000"
  }
]

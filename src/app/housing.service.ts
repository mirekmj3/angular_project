import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  // readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png';

  // url = 'http://localhost:3000/locations';

  // async getAllHousingLocations(): Promise<Housinglocation[]>{
  //   const data = await fetch (this.url)
  //   return await DataTransfer.json()??[]
  // }

  // async getAllHousingLocationsById(id:number): Promise<Housinglocation | undefined>{
  //   const data = await fetch ('{$this.url}/{$id}')
  //   return await data.json()??[]
  // }

  protected HousinglocationList: Housinglocation [] = [
    {
      id: 1,
      name: 'Mieszkanie 1',
      city: 'Gdansk',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 2,
      name: 'Mieszkanie 2',
      city: 'Lodz',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 3,
      name: 'Mieszkanie 3',
      city: 'Poznan',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Mieszkanie 4',
      city: 'Krakow',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Mieszkanie 5',
      city: 'Warszawa',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 6,
      name: 'Mieszkanie 6',
      city: 'Berlin',
      state: 'DE',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 7,
      name: 'Mieszkanie 7',
      city: 'Londyn',
      state: 'GB',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 8,
      name: 'Mieszkanie 8',
      city: 'Ladek-Zdroj',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 9,
      name: 'Mieszkanie 9',
      city: 'Gdynia',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    },
    {
      id: 10,
      name: 'Mieszkanie 10',
      city: 'Kartuzy',
      state: 'PL',
      photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_50,h_50/v1659998959/81475.png',
      availableUnit: 50,
      wifi: true,
      laundry: false
    }
  // Products:Products={
  //   id: 99,
  //   product_name: "product_name",
  //   price: 120,
  //   qty: 10,
  //   photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_159,h_159/v1659998959/81475.png',
  //   available: true
  // }
];

getAllHousingLocations(): Housinglocation[]{
  return this.HousinglocationList;
}

getAllHousingLocationsById(id:number): Housinglocation | undefined {
  return this.HousinglocationList.find(Housinglocation => Housinglocation.id ===id);
}

submitApplication(firstName: string, lastName: string, email:string){
  console.log(`firstName:${firstName}, lastName: ${lastName}, email: ${email}`);
}

}


export interface IVivienda {
  id: number;
  imgUrl: string;
  title: string;
  category: string;
  numBedroom: number;
  numBathroom: number;
  locationlatitude:string;
  amenities:string;
  available: boolean;
  squarefeet: number;
  userId: number;
  description: string;
  address:{
    pais: string;
    ciudad: string;
    postalCode: string;
  }
  locationLongitude:number;
  isReserved: boolean;
  price:number;
}

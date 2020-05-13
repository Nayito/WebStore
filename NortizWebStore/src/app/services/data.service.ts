import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = [
    {
      id: '1',
      pImg: '../../assets/img/Elect1.png',
      pName: 'IPhone X Fold',
      pNameURL: 'iPhoneFold',
      pDesc: 'Latest New phone with Unique features',
      additionalInfo: 'Only folds one way, DO NOT FOLD OPPOSITE WAY',
      price: '1900.00',
      quantity: 0
    },
    {
      id: '2',
      pImg: '../../assets/img/Elect2.png',
      pName: 'IPhone XI Pro',
      pNameURL: 'iPhonePro',
      pDesc: 'Up-To-Date Technology & Features',
      additionalInfo: 'Amazing Quality pictures thanks to extra camera',
      price: '1100.00',
      quantity: 0
    },
    {
      id: '3',
      pImg: '../../assets/img/Elect3.png',
      pName: 'Samsung Oxygen',
      pNameURL: 'SamOxygen',
      pDesc: 'Latest look & Technology with Old-School feel',
      additionalInfo: 'Choose from multiple colors',
      price: '990.00',
      quantity: 0
    },
    {
      id: '4',
      pImg: '../../assets/img/Elect4.png',
      pName: 'Samsung Oppo',
      pNameURL: 'SamOppo',
      pDesc: 'Gaming Phone with 64 Gb of Storage',
      additionalInfo: 'Comes with multiple color choices & storage',
      price: '790.00',
      quantity: 0
    },
    {
      id: '5',
      pImg: '../../assets/img/Elect5.jpg',
      pName: 'Watch Tech',
      pNameURL: 'WatchTech',
      pDesc: 'Say goodbye to old fashioned watches and step into the new era with Watch Tech',
      additionalInfo: 'From Phone Calls to downloadable games, this watch can do it all',
      price: '1600.00',
      quantity: 0
    },
    {
      id: '6',
      pImg: '../../assets/img/Elect6.webp',
      pName: 'IPhone Clear',
      pNameURL: 'iPhoneClear',
      pDesc: 'Never before done all around active phone',
      additionalInfo: 'See messages and phone calls before you even pick up the phone',
      price: '900.00',
      quantity: 0
    },
    {
      id: '7',
      pImg: '../../assets/img/Jewl1.png',
      pName: 'Diamond Crested Set',
      pNameURL: 'DiamondSet',
      pDesc: 'Get a variety of Rings, Watches and Bracelets',
      additionalInfo: 'Multiple sets to choose from',
      price: '4500.00',
      quantity: 0
    },
    {
      id: '8',
      pImg: '../../assets/img/Jewl2.png',
      pName: 'BirthStone Ring',
      pNameURL: 'BirthRing',
      pDesc: 'Large Crested Gem with your birthstone',
      additionalInfo: 'Different colors for each month depending on your birth month',
      price: '800.00',
      quantity: 0
    },
    {
      id: '9',
      pImg: '../../assets/img/Jewl3.png',
      pName: 'Lavender Amulets',
      pNameURL: 'LavAmulets',
      pDesc: 'Pairs of Gorgeous Amulets coated with refreshing Lavender',
      additionalInfo: 'Keep bad vibes away from you with these recharging Gems',
      price: '1090.00',
      quantity: 0
    },
    {
      id: '10',
      pImg: '../../assets/img/Jewl4.jpg',
      pName: 'Laso Necklace',
      pNameURL: 'LasoNecklace',
      pDesc: 'Stun everyone with this Necklace set',
      additionalInfo: 'Be the center of attention at your next party',
      price: '1300.00',
      quantity: 0
    },
    {
      id: '11',
      pImg: '../../assets/img/Jewl5.jpg',
      pName: 'TearDrop Ring',
      pNameURL: 'TearRing',
      pDesc: 'Diamond crested ring shaped to look like a rain drop',
      additionalInfo: 'This ring will be the perfect final peace for your outfit',
      price: '1500.00',
      quantity: 0
    },
    {
      id: '12',
      pImg: '../../assets/img/Jewl6.jpg',
      pName: 'Titanium Ring',
      pNameURL: 'TitanRing',
      pDesc: 'Titanium smelted Ring',
      additionalInfo: 'Choose between multiple choices with stunning quartz as the centerpiece',
      price: '1000.00',
      quantity: 0
    },
    {
      id: '13',
      pImg: '../../assets/img/Cloth1.jpg',
      pName: 'Gray Tux',
      pNameURL: 'GrayTux',
      pDesc: 'Look like a gentleman with this Tuxedo Set',
      additionalInfo: 'Last Minute Notice? No problem, fast shipping for every purchase',
      price: '350.00',
      quantity: 0
    },
    {
      id: '14',
      pImg: '../../assets/img/Cloth2.jpg',
      pName: 'Designer (Flame)',
      pNameURL: 'Flame',
      pDesc: 'Catch everyones attention with this eye catching Jacket',
      additionalInfo: 'Wash with cold water, will change color if not',
      price: '150.00',
      quantity: 0
    },
    {
      id: '15',
      pImg: '../../assets/img/Cloth3.jpg',
      pName: 'Flower Dress',
      pNameURL: 'FlowerDress',
      pDesc: 'Look stunning in the wind with this pure white dress lined with flowers',
      additionalInfo: '(Not real flowers on dress)',
      price: '180.00',
      quantity: 0
    },
    {
      id: '16',
      pImg: '../../assets/img/Cloth4.jpg',
      pName: 'Color Contrast Tux',
      pNameURL: 'ContrastTux',
      pDesc: 'Choose your color choices with this Tux Set',
      additionalInfo: 'Comes in kid sizes as well',
      price: '220.00',
      quantity: 0
    },
    {
      id: '17',
      pImg: '../../assets/img/Cloth5.jpg',
      pName: 'Mandala Dress',
      pNameURL: 'MandalaDress',
      pDesc: 'Beautiful dress with mini Mandala lined all around the dress',
      additionalInfo: 'Color choices only include: Blue, Red, Yellow and Orange',
      price: '110.00',
      quantity: 0
    },
    {
      id: '18',
      pImg: '../../assets/img/Cloth6.jpg',
      pName: 'UnderHang Coat',
      pNameURL: 'UnderCoat',
      pDesc: 'Perfect for all seasons and weather',
      additionalInfo: 'Design the dimensions yourself so its always a perfect fit',
      price: '130.00',
      quantity: 0
    }
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(sku: string): Observable<Product> {
    return of(
      this.products.find(
        somethingElse => somethingElse.id === sku
      ));
  }
}

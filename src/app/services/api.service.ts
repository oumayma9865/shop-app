import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Teething ring',
      price: 36.000,
      status: true,
      rating: 4.9,
      cover: 'assets/pets/anneau.jpg',
      description: 'A toy made of highly durable cotton and rubber, particularly recommended for animals that chew. Ideal for training and improving your dogs speed, reflexes, and resilience these toys consist of a rubber ball and a 60 cm long cotton rope. '
    },
    {
      id: '2',
      name: 'Amity Premium Lamb & Rice 3 kg',
      price: 36.000,
      status: true,
      rating: 4.7,
      cover: 'assets/pets/Amity.jpg',
      description: 'Features of AMITY Premium Adult Lamb & Rice Dog Food for Medium-sized Dogs:Suitable for adult dogs of all breeds,Highly digestible,Contains lamb and rice,Supports muscle maintenance,Promotes daily health and vitality,Available in 3kg and 15kg bags'
    },
    {
      id: '3',
      name: 'Anti-odor for Female in Heat 125ml',
      price: 24.000,
      status: true,
      rating: 4.9,
      cover: 'assets/pets/anti-odeur.png',
      description: 'Natural, Neutral, Alcohol-Free, Fragrance-Free Product to Reduce the Odor of Females in Heat and Minimize Unwanted Attention from Dogs During Daily Walks.Spray Daily Before Each Walk, on the back of the animal, lifting the tail slightly'
    },
    {
      id: '4',
      name: 'Royal Canin Cardiac Can - 410g',
      price: 22.000,
      status: true,
      rating: 4.8,
      cover: 'assets/pets/royal canic.jpg',
      description: 'ROYAL CANIN® CARDIAC mousse is a complete dietary food for dogs designed to support cardiac function in cases of chronic heart failure. This food contains a limited sodium content. RECOMMENDATIONS: Before use or extension of the duration of use,it is recommended to seek the advice of a veterinarian.Use CARDIAC initially for a duration of up to 6 months.'
    },
    {
      id: '5',
      name: 'Ferplast Steel Cable for Dogs',
      price: 60.000,
      status: true,
      rating: 4.5,
      cover: 'assets/pets/cable.jpg',
      description: 'With this plastic-coated steel cable for dogs, you can give your pet great freedom of movement while keeping them under control.Available in two models, PA 5985 and PA 5987, with lengths ranging from 300 to 450 cm,this cable allows you to safely leave your dog in the yard or garden.'
    },
    {
      id: '6',
      name: 'Vagabond Transport Box',
      price: 182.000,
      status: true,
      rating: 4.9,
      cover: 'assets/pets/box.jpg',
      description: 'The Vagabond Carrier transport box is IATA certified.It is sturdy, robust, and suitable for the needs of all breeds.It is available in several sizes, so choose the one that best suits your companion and travel with your Fido in complete tranquility.'
    },
    {
      id: '7',
      name: 'Brit Care Sustainable Activity 12kg',
      price: 249.000,
      status: true,
      rating: 4.6,
      cover: 'assets/pets/care activite.png',
      description: 'Chicken and Insect Formula, Planet-Friendly for Active Dogs and Dogs with Increased Mobility. Complete Food for Dogs.Super Premium, Sustainable, and Eco-Friendly Food for Healthy Digestion,Reduced Stress, Improved Physical Condition, and Enhanced Mobility. Ideal for Active Dogs. Contains Easily Digestible Proteins with Complete Nutritional Value,Including Essential Amino Acids for Excellent Muscle Tone and Healthy Tissues.'
    },
    {
      id: '8',
      name: 'Brit Care Kitten Grain-Free 2kg',
      price: 49.000,
      status: true,
      rating: 4.9,
      cover: 'assets/pets/care kitten.png',
      description: 'Complete Food for Kittens and Pregnant or Nursing Cats.A hypoallergenic, grain-free, highly digestible formula rich in essential nutrients to meet the energy needs of pregnant or nursing cats and promote the proper development of the fetus. The balanced content of calcium, phosphorus, magnesium, vitamin D, and a complex of vitamins, minerals,and essential fatty acids ensures the delivery of healthy kittens and helps prevent rickets.'
    },
    {
      id: '9',
      name: 'Brit Care Hair And skin Grain-Free 2kg',
      price: 52.000,
      status: true,
      rating: 4.6,
      cover: 'assets/pets/care hair.png',
      description: 'Complete Food for Adult Cats with Demanding Coat Care.A hypoallergenic, grain-free formula rich in fiber that facilitates the passage of hairballs.High-quality meat proteins help maintain lean and strong muscles. In combination with taurine,an essential nutrient for cats, it promotes good vision and heart health.'
    },
    {
      id: '10',
      name: 'Brit Care Mini Grain-Free Adult',
      price: 54.000,
      status: true,
      rating: 4.7,
      cover: 'assets/pets/mini grain.png',
      description: 'Grain-Free Hypoallergenic Formula for Adult Dogs of Miniature Breeds.'
    },
    {
      id: '11',
      name: 'Brit Premium By Nature Lamb for Sensitive Cats',
      price: 15.000,
      status: true,
      rating: 4.6,
      cover: 'assets/pets/chat sensible.png',
      description: 'Composition:Agneau déshydraté 20% ,Riz,Dinde déshydratée 15%,Petits pois ,Graisse de poulet,Pulpe de pomme déshydratée,Huile de saumon 3%,Foie de poulet hydrolysé,Levure de bière,Épinards déshydratés 0,5%'
    },
    {
      id: '12',
      name:'Brit Premium By Nature Adulte XL',
      price: 45.000,
      status: true,
      rating: 4.5,
      cover: 'assets/pets/nature adulte.png',
      description: 'Complete Chicken Formula for Adult Dogs of Very Large Breeds (45 to 90 kg).'
    },
    {
      id: '13',
      name: 'Adhesive Brush',
      price: 25.000,
      status: true,
      rating: 4.7,
      cover: 'assets/pets/brosse carde.jpg',
      description: 'Croci Strong Adhesive Pet Hair Brush 20m'
    },
    {
      id: '14',
      name: 'Ferplast Slicker Brush',
      price: 22.000,
      status: true,
      rating: 4.5,
      cover: 'assets/pets/brush.jpg',
      description: 'The slicker brush is ideal for dogs and cats with medium to long hair. The stainless steel blades remove dead hair, making grooming your pets coat much easier.You will also find a useful comb included in the packaging to remove dead hair from the brush.Ferplast Steel Cable for Dogs'
    },
  ];

  constructor() { }
}


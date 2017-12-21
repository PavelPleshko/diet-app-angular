
import {InMemoryDbService} from 'angular-in-memory-web-api'; 
import {ProductModel} from '../product/product.model';

export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    let products:ProductModel[] = [
      {id:1,
      title:'Apple',
      category:'fruit',
      imageUrl:'/assets/images/products/apple.jpg',
      thumbnailUrl:'',
      nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0.1}
      ]
      },
       {id:2,
      title:'Banana',
      category:'fruit',
      imageUrl:'/assets/images/products/banana.jpg',
      thumbnailUrl:'',
       nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0}
      ]
      },
       {id:3,
      title:'Pear',
      category:'fruit',
      imageUrl:'/assets/images/products/apple.jpg',
      thumbnailUrl:'',
       nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0}
      ]
      },
       {id:4,
      title:'Peach',
      category:'fruit',
      imageUrl:'/assets/images/products/peach.jpg',
      thumbnailUrl:'',
       nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0}
      ]
      },
       {id:5,
      title:'Pineapple',
      category:'fruit',
      imageUrl:'/assets/images/products/pineapple.jpg',
      thumbnailUrl:'',
      nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0}
      ]
      },
       {id:6,
      title:'Strawberry',
      category:'fruit',
      imageUrl:'/assets/images/products/apple.jpg',
      thumbnailUrl:'',
       nutrients:[
      {title:'energy',amount:52,units:'Kcal',RDA:2.5},
      {title:'protein',amount:0.26,units:'g',RDA:0.5},
      {title:'carbohydrates',amount:13.8,units:'g',RDA:11},
      {title:'Total fat',amount:0.17,units:'g',RDA:0.5},
      {title:'cholesterol',amount:0,units:'mg',RDA:0},
      {title:'dietary fiber',amount:2.4,units:'g',RDA:6}
      ],
      vitamins:[
      {title:'folates',amount:3,units:'μg',RDA:1},
      {title:'niacin',amount:0.091,units:'mg',RDA:1},
      {title:'pantothenic acid',amount:0.061,units:'mg',RDA:1},
      {title:'pyridoxine',amount:0.041,units:'mg',RDA:3},
      {title:'riboflavin',amount:0.026,units:'mg',RDA:2},
      {title:'thiamin',amount:0.017,units:'mg',RDA:1},
      {title:'Vitamin A',amount:54,units:'IU',RDA:2},
      {title:'Vitamin C',amount:4.6,units:'mg',RDA:8},
      {title:'Vitamin E',amount:0.18,units:'mg',RDA:1},
      {title:'Vitamin K',amount:2.2,units:'μg',RDA:2}
      ],
      minerals:[
      {title:'calcium',amount:6,units:'mg',RDA:0.6},
      {title:'iron',amount:0.12,units:'mg',RDA:1},
      {title:'magnesium',amount:5,units:'mg',RDA:1},
      {title:'phosphorus',amount:11,units:'mg',RDA:2},
      {title:'zinc',amount:0.04,units:'mg',RDA:0}
      ]
      }


    ]
  let users=[];
  let ingredients=[{id:1,
    title:'basilico',
        img:'/assets/images/ingredients/basilico/icon.png',
        max:4,
        imgnum:0
  },{id:2,
    title:'brocoli',
        img:'/assets/images/ingredients/brocoli/icon.png',
         max:4,
         imgnum:1
  },{id:3,
    title:'carote',
        img:'/assets/images/ingredients/carote/icon.png',
         max:4,
          imgnum:0
  },{id:4,
    title:'cipolline',
        img:'/assets/images/ingredients/cipolline/icon.png',
         max:4,
          imgnum:1
  },{id:5,
    title:'edamer',
        img:'/assets/images/ingredients/edamer/icon.png',
        max:4,
         imgnum:2
  },{id:6,
    title:'carciofo',
        img:'/assets/images/ingredients/carciofo/icon.png',
         max:4,
          imgnum:2
  },{id:7,
    title:'caviar_black',
        img:'/assets/images/ingredients/caviar_black/icon.png',
         max:4,
          imgnum:2
  },{id:8,
    title:'cetriolo',
        img:'/assets/images/ingredients/cetriolo/icon.png',
         max:4,
          imgnum:0
  }];

return {products,users,ingredients};
  }


} 
export const validProductData = [
  {
    productName: 'Mayonaisse',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  {
    productName: 'MayonnaisBama',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  {
    productName: 'Bamsonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  {
    productName: 'Valuebread',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  {
    productName: 'ValueDrink',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidProductNameData = [
  // Undefined product name 0
  {
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // product name not a string 1
  {
    productName: 23,
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Empty product name 2
  {
    productName: '',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid product name length 3
  {
    productName: 'M',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid Character in product name 4
  {
    productName: 'Mayonn34578',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Found product name 5(**NOT USED**)
  {
    productName: 'Mayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidDescriptionData = [
  // Undefined description 0
  {
    productName: 'Mayonnaisa',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Description is not a string 1
  {
    productName: 'Mayonnaisb',
    description: 45,
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Description is empty 2
  {
    productName: 'Mayonnaisc',
    description: '',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid description length 3
  {
    productName: 'Mayonnaisd',
    description: 'Nice spr',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid character 4
  {
    productName: 'Mayonnaisee',
    description: 'Nice spread over 1991',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidCategoryData = [
  // Undefined category 0
  {
    productName: 'Mayonnaisf',
    description: 'Nice spread over bread',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Category not a string 1
  {
    productName: 'Mayonnaisg',
    description: 'Nice spread over bread',
    category: 56,
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Category empty 2
  {
    productName: 'Mayonnaish',
    description: 'Nice spread over bread',
    category: '',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Category invalid characters 3
  {
    productName: 'Mayonnaisi',
    description: 'Nice spread over bread',
    category: 'Comestible45',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Inavlid category length 4
  {
    productName: 'Mayonnaisj',
    description: 'Nice spread over bread',
    category: 'Co',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidImageURLData = [
  // Undefined ImageURL 0
  {
    productName: 'Mayonnaisk',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Image URL not a string 1
  {
    productName: 'Mayonnaisl',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 5,
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
  // Image URL empty 2
  {
    productName: 'Mayonnaism',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: '',
    quantity: '20',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidQuantityData = [
  // Undefined quantity 0
  {
    productName: 'Mayonnaisn',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    unitPrice: '200',
    userId: '1'
  },
  // Quantity not string 1
  {
    productName: 'Mayonnaiso',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: [20],
    unitPrice: '200',
    userId: '1'
  },
  // Quantity empty 2
  {
    productName: 'Mayonnaisp',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid quantity length 3
  {
    productName: 'Mayonnaisq',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '208765',
    unitPrice: '200',
    userId: '1'
  },
  // Quantity less than 1 (4)
  {
    productName: 'Mayonnaisr',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '0',
    unitPrice: '200',
    userId: '1'
  },
  // Invalid quantity character detected 5
  {
    productName: 'Mayonnaisser',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20px',
    unitPrice: '200',
    userId: '1'
  },
];

export const inValidUnitPriceData = [
  // Undefined unitPrice 0
  {
    productName: 'Mayonnarees',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    userId: '1'
  },
  // Not a string 1
  {
    productName: 'Mayonnaisgang',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: 200,
    userId: '1'
  },
  // Empty 2
  {
    productName: 'Mayonnaisdem',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '',
    userId: '1'
  },
  // Unit price < 1 (3)
  {
    productName: 'Bamabama',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '0',
    userId: '1'
  },
  // Invalid Price (4)
  {
    productName: 'Newproduct',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '23456783456',
    userId: '1'
  },
];

export const inValidUserIdData = [
  // Undefined 0
  {
    productName: 'Ourayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200'
  },
  // userId empty 1
  {
    productName: 'Mayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: ''
  },
  // userId NaN 2
  {
    productName: 'Bayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: '1qd'
  },
  // userID not a string 3
  {
    productName: 'Vayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitPrice: '200',
    userId: 1
  },
];

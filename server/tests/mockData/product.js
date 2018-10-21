export const validProductData = [
  {
    productname: 'Mayonaisse',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  {
    productname: 'MayonnaisBama',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  {
    productname: 'Bamsonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  {
    productname: 'Valuebread',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  {
    productname: 'ValueDrink',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidProductNameData = [
  // Undefined product name 0
  {
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // product name not a string 1
  {
    productname: 23,
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Empty product name 2
  {
    productname: '',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid product name length 3
  {
    productname: 'M',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid Character in product name 4
  {
    productname: 'Mayonn34578',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Found product name 5(**NOT USED**)
  {
    productname: 'Mayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidDescriptionData = [
  // Undefined description 0
  {
    productname: 'Mayonnaisa',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Description is not a string 1
  {
    productname: 'Mayonnaisb',
    description: 45,
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Description is empty 2
  {
    productname: 'Mayonnaisc',
    description: '',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid description length 3
  {
    productname: 'Mayonnaisd',
    description: 'Nice spr',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid character 4
  {
    productname: 'Mayonnaisee',
    description: 'Nice spread over 1991',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidCategoryData = [
  // Undefined category 0
  {
    productname: 'Mayonnaisf',
    description: 'Nice spread over bread',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Category not a string 1
  {
    productname: 'Mayonnaisg',
    description: 'Nice spread over bread',
    category: 56,
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Category empty 2
  {
    productname: 'Mayonnaish',
    description: 'Nice spread over bread',
    category: '',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Category invalid characters 3
  {
    productname: 'Mayonnaisi',
    description: 'Nice spread over bread',
    category: 'Comestible45',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Inavlid category length 4
  {
    productname: 'Mayonnaisj',
    description: 'Nice spread over bread',
    category: 'Co',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidImageURLData = [
  // Undefined ImageURL 0
  {
    productname: 'Mayonnaisk',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Image URL not a string 1
  {
    productname: 'Mayonnaisl',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 5,
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
  // Image URL empty 2
  {
    productname: 'Mayonnaism',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: '',
    quantity: '20',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidQuantityData = [
  // Undefined quantity 0
  {
    productname: 'Mayonnaisn',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    unitprice: '200',
    UserId: '1'
  },
  // Quantity not string 1
  {
    productname: 'Mayonnaiso',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: [20],
    unitprice: '200',
    UserId: '1'
  },
  // Quantity empty 2
  {
    productname: 'Mayonnaisp',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid quantity length 3
  {
    productname: 'Mayonnaisq',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '208765',
    unitprice: '200',
    UserId: '1'
  },
  // Quantity less than 1 (4)
  {
    productname: 'Mayonnaisr',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '0',
    unitprice: '200',
    UserId: '1'
  },
  // Invalid quantity character detected 5
  {
    productname: 'Mayonnaisser',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20px',
    unitprice: '200',
    UserId: '1'
  },
];

export const inValidUnitPriceData = [
  // Undefined unitprice 0
  {
    productname: 'Mayonnarees',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    UserId: '1'
  },
  // Not a string 1
  {
    productname: 'Mayonnaisgang',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: 200,
    UserId: '1'
  },
  // Empty 2
  {
    productname: 'Mayonnaisdem',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '',
    UserId: '1'
  },
  // Unit price < 1 (3)
  {
    productname: 'Bamabama',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '0',
    UserId: '1'
  },
  // Invalid Price (4)
  {
    productname: 'Newproduct',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '23456783456',
    UserId: '1'
  },
];

export const inValidUserIdData = [
  // Undefined 0
  {
    productname: 'Ourayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200'
  },
  // UserId empty 1
  {
    productname: 'Mayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: ''
  },
  // UserId NaN 2
  {
    productname: 'Bayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: '1qd'
  },
  // UserID not a string 3
  {
    productname: 'Vayonnaise',
    description: 'Nice spread over bread',
    category: 'Comestibles',
    imageurl: 'https://www.example.com',
    quantity: '20',
    unitprice: '200',
    UserId: 1
  },
];

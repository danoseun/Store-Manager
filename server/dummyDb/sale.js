const sales = [
  {
    id: 1,
    userId: 2,
    items: [
      {
        productId: 5,
        productname: 'Headphone',
        quantity: 2,
        unitprice: 750
      },
      {
        productId: 6,
        productname: 'Earpiece',
        quantity: 3,
        unitprice: 500
      }
    ],
    totalAmount: 1500,
    dateSold: new Date()
  },

  // Sale 2
  {
    id: 2,
    userId: 3,
    items: [
      {
        productId: 6,
        productname: 'Canvas',
        quantity: 2,
        unitprice: 750
      },
      {
        productId: 6,
        productname: 'Denimsweater',
        quantity: 3,
        unitprice: 500
      }
    ],
    totalAmount: 1500,
    dateSold: new Date()
  },
];

export default sales;

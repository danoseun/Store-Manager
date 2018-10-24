const sales = [
  {
    id: 1,
    userId: 2,
    items: [
      {
        productId: 5,
        productName: 'Headphone',
        quantity: 2,
        unitPrice: 750
      },
      {
        productId: 6,
        productName: 'Earpiece',
        quantity: 3,
        unitPrice: 500
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
        productName: 'Canvas',
        quantity: 2,
        unitPrice: 750
      },
      {
        productId: 6,
        productName: 'Denimsweater',
        quantity: 3,
        unitPrice: 500
      }
    ],
    totalAmount: 1500,
    dateSold: new Date()
  },
];

export default sales;

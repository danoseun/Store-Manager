export const inValidSaleInputData = [
  {
    userId: '',
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
    total: 1500,
    dateSold: new Date()
  },

  {
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
    total: 1500,
    dateSold: new Date()
  },

  {
    userId: 1,
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
    total: 1500,
    dateSold: new Date()
  },
  {
    userId: 2,
    items: [
      {
        productId: 20,
        productName: 'Headphone',
        quantity: 2,
        unitPrice: 750
      },
      {
        productId: 21,
        productName: 'Earpiece',
        quantity: 3,
        unitPrice: 500
      }
    ],
    total: 1500,
    dateSold: new Date()
  },
];

export const validSaleInputData = [
  {
    userId: 2,
    items: [
      {
        productId: 5,
        productName: 'Headphone',
        quantity: 2,
        unitPrice: 750
      },
      {
        productId: 5,
        productName: 'Earpiece',
        quantity: 3,
        unitPrice: 500
      }
    ],
    total: 1500,
    dateSold: new Date()
  },
];

export const inValidSaleInputData = [
  {
    saleItems: [
      {
        quantity: 2
      },
      {
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 0.5,
        quantity: 2
      },
      {
        productId: 'q',
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 12345678945,
        quantity: 2
      },
      {
        productId: 9876543456,
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 1,
        quantity: 'q'
      },
      {
        productId: 1,
        quantity: 0.5
      }
    ]
  }
];

export const validSaleInputData = [
  {
    saleItems: [
      {
        productId: 1,
        quantity: 2
      },
      {
        productId: 2,
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 2,
        quantity: 1
      },
      {
        productId: 1,
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 3,
        quantity: 1
      },
      {
        productId: 4,
        quantity: 2
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 7,
        quantity: 1
      },
      {
        productId: 8,
        quantity: 1
      }
    ]
  },

  {
    saleItems: [
      {
        productId: 3,
        quantity: 2000
      },
      {
        productId: 4,
        quantity: 2000
      }
    ]
  }
];

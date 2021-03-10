/* eslint-disable arrow-body-style */
import { rest } from 'msw';

const testReviews = [
  {
    review_id: 5,
    rating: 3,
    summary: "I'm enjoying wearing these shades",
    recommend: false,
    response: null,
    body: 'Comfortable and practical.',
    date: '2019-04-14T00:00:00.000Z',
    reviewer_name: 'shortandsweeet',
    helpfulness: 5,
    photos: [{
      id: 1,
      url: 'urlplaceholder/review_5_photo_number_1.jpg',
    },
    {
      id: 2,
      url: 'urlplaceholder/review_5_photo_number_2.jpg',
    },
    ],
  },
  {
    review_id: 3,
    rating: 4,
    summary: 'I am liking these glasses',
    recommend: false,
    response: "Glad you're enjoying the product!",
    body: "They are very dark. But that's good because I'm in very sunny spots",
    date: '2019-06-23T00:00:00.000Z',
    reviewer_name: 'bigbrotherbenjamin',
    helpfulness: 5,
    photos: [],
  },
];

const testProduct = {
  id: 11,
  name: 'Air Minis 250',
  slogan: 'Full court support',
  description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
  category: 'Basketball Shoes',
  default_price: '0',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
  ],
};

const testMetadata = {
  product_id: '2',
  ratings: {
    2: 1,
    3: 1,
    4: 2,
    // ...
  },
  recommended: {
    0: 5,
  },
  characteristics: {
    Size: {
      id: 14,
      value: '4.0000',
    },
    Width: {
      id: 15,
      value: '3.5000',
    },
    Comfort: {
      id: 16,
      value: '4.0000',
    },
  },
};

const testStyles = {
  style_id: 1,
  name: 'Forest Green & Black',
  original_price: 140,
  sale_price: 0,
  default: true
}

const handlers = [
  // eslint-disable-next-line arrow-body-style
  rest.get('/api/shared/products/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(testProduct),
    );
  }),
  rest.get('/api/reviews/meta', (req, res, ctx) => {
    const query = req.url.searchParams;
    const product_id = query.get('product_id');
    return res(
      ctx.status(200),
      ctx.json(testMetadata),
    );
  }),
  rest.get('/api/reviews/', (req, res, ctx) => {
    const query = req.url.searchParams;
    const product_id = query.get('product_id');
    return res(
      ctx.status(200),
      ctx.json(testReviews),
    );
  }),
  rest.get('/api/products/16060/styles', (req, res, ctx) => {
    const query = req.url.searchParams;
    const product_id = query.get('product_id');
    return res(
      ctx.status(200),
      ctx.json(testStyles),
    );
  })
];

export default handlers;

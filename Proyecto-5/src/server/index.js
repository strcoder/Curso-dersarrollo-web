require('ignore-styles');

require('asset-require-hook')({
  extension: ['jpg', 'jpeg', 'png', 'svg'],
  name: '/assets/[hash].[ext]',
});

require('./server');

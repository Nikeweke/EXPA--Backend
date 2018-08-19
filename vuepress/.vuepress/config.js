module.exports = {
  title: 'Backend experience',
  description: 'Experience from life',
  base: '/EXPA--Backend/',
  dest: 'docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      // '/php.md',
      {
        title: 'PHP',
        collapsable: true,
        children: [
          '/php/composer.md',
          '/php/examples-and-solutions.md',
          '/php/laravel.md',
          '/php/sqlite.md',
          '/php/symfony.md',
          '/php/websockets.md',
        ]
      },
      {
        title: 'Node',
        collapsable: true,
        children: [
          '/node/npm.md',
          '/node/basic.md',
          '/node/express-and-ejs.md',
          '/node/repl.md',
          '/node/templaters.md',
          '/node/sockets-io.md',
          '/node/sails.md',
          '/node/adonis.md',
          '/node/int-packages.md',
        ]
      },
      {
        title: 'Golang',
        collapsable: true,
        children: [
          '/golang/quick-start.md',
          '/golang/basic.md',
          '/golang/revel.md',
          '/golang/useful-fns.md',
          '/golang/useful-links.md',
        ]
      },
    ]
  }
}
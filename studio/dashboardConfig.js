export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee635174883e8024e31648e',
                  title: 'Sanity Studio',
                  name: 'diamonds-equine-2-studio',
                  apiId: '828876ea-7bd5-48ac-8aaf-f9d25db93513'
                },
                {
                  buildHookId: '5ee6351770175c019e8216b2',
                  title: 'Blog Website',
                  name: 'diamonds-equine-2',
                  apiId: '6795dc0e-b177-4811-aba0-77b0658eaed3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SeosamhRoibin/diamonds-equine-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://diamonds-equine-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f835b22158e4b6f77eff290',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-y6p47ftv',
                  apiId: '40b55e83-d9ca-4b41-9123-43aa98d5e760'
                },
                {
                  buildHookId: '5f835b22d1e620500fc0d02f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fuqh2cxw',
                  apiId: 'f3fc9cbc-bc99-4087-8c38-f020489cdd03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mog3n/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fuqh2cxw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

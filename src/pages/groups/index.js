import Groups from './Groups.vue'
import GroupsHome from './home/GroupsHome.vue'

import CityContent from './content/CityContent.vue'

const routes = {
  path: '/grupos',
  component: Groups,
  children: [
    {
      path: '',
      name: 'groupsHome',
      meta: {
        breadcrumb: 'Grupos / Home'
      },
      component: GroupsHome
    },
    {
      path: ':city',
      name: 'groupsCity',
      meta: {
        breadcrumb: 'Grupos / Cidade'
      },
      component: CityContent
    }
  ]
}

export { routes }

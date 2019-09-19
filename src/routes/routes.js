//routes.js
import index from '../components/index.vue'
import menus from '../components/Menu/MenuComponent.vue'
import rooms from '../components/Rooms/RoomsComponent.vue'
import events from '../components/Events/EventsComponent.vue'
import tables from '../components/Tables/TableComponent.vue'
import FileUpload from '../components/utils/fileuploadComponent.vue'

const routes = [
  { path: '/', component: index },
  { path: '/menus', component: menus },
  { path: '/rooms',component: rooms },
  { path: '/events', component: events },
  { path: '/tables', component: tables},
  { path: '/uploadfile', component: FileUpload }
]

export default routes

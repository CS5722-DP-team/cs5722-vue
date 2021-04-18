import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import Index from '../views/Index'
import BookUpdate from '../views/BookUpdate'
import FamilyLunch from '../views/memento/FamilyLunch'
import Coffee from '../views/bridge/Coffee'
import ChildrenMeal from '../views/builder/ChildrenMeal'
import ChangeRoomToKitchen from '../views/adapter/ChangeRoomToKitchen'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Food Management",
    component: Index,
    show: true,
    redirect: "/AddFamilyLunch",
    children: [
      // {
      //   path: "/BookManage",
      //   name: "query book",
      //   component: BookManage
      // },
      // {
      //   path: "/AddBook",
      //   name: "add book",
      //   component: AddBook
      // },
      {
        path: "/AddFamilyLunch",
        name: "add family lunch(memento)",
        component: FamilyLunch
      },
      {
        path: "/AddCoffee",
        name: "add coffee(bridge)",
        component: Coffee
      },
      {
        path: "/AddChildrenMeal",
        name: "add children meal(builder)",
        component: ChildrenMeal
      },
      {
        path: "/ChangeRoomToKitchen",
        name: "change room to kitchen(adapter)",
        component: ChangeRoomToKitchen
      }
    ]
  },
  
  {
    path: '/update',
    component: BookUpdate,
    show: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

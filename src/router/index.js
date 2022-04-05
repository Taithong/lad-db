import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Report from "../views/Report.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/report",
    name: "report",
    component: Report
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock
  },
  {
    path: "/stock-create",
    name: "stock-create",
    component: StockCreate
  },
  {
    path: "/stock-edit/:id",
    name: "stock-edit",
    component: StockEdit
  },
  {
    path: "/about",
    name: "about",
    component: About
  },

  {
    path:"/",
    redirect:"/login"
    
  },
  {
    path:"*",
    redirect:"/login" // page mnot found
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

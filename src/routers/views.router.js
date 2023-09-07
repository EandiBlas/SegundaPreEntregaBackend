import { Router } from 'express';
import ProductManager from "../dao/managers/productManagerMongo.js"
import CartManager from '../dao/managers/cartManagerMongo.js';

const cm = new CartManager()
const pm = new ProductManager()


const routerV = Router()


routerV.get("/", async (req, res) => {
    const listadeproductos = await pm.getProductsView()
    res.render("home", { listadeproductos, style:'styles.css' })
})

routerV.get("/products", async (req, res) => {
    const listadeproductos = await pm.getProductsView()
    res.render("products", { listadeproductos, style:'styles.css'})
})

routerV.get("/carts/:cid", async (req, res) => {
    const { cid } = req.params
    const carritofound = await cm.getCartById(cid)
    res.render("carts", { carritofound: carritofound.products}, {style:'styles.css'})
})

routerV.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts", {style:'styles.css'})
})

routerV.get("/chat", (req, res) => {
    res.render("chat",{style:'chat.css'})
})



export default routerV
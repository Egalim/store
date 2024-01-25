import { Router } from "express";
import controller from "../controller/controller.js";

const router = new Router()

router.post("/newProduct", controller.createProduct)
router.get("/products", controller.getProduct)
router.get("/products/:id", controller.getOneProduct)

export default router
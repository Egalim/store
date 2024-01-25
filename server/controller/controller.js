import path from "path";
import { db } from "../db.js";

class Controller {
    async createProduct(req, res) {
        if (!req.files || !req.files.file) {
            return res.status(400).json({
                message: "No files uploaded"
            });
        }

        const file = req.files.file;
        const filename = file.name;
        const uploadPath = path.join(
            'D:/REACT/store/client/src/uploads',
            filename
        )
        const { title, price } = req.body

        file.mv(uploadPath, (error) => {
            if (error) {
                console.error('Error saving file: ', error)
                return res.status(500).json({ message: "Error saving file" })
            }

            const newProduct = db.query(
                `INSERT INTO products (title, price, img) VALUES ($1, $2, $3) RETURNING *`, 
                [title, price, filename]
            )

            // Возвращаем информацию о загруженном файле в ответе
            res.json(newProduct.rows)
        })
    }

    async getProduct(req, res) {
        const products = await db.query(`SELECT * FROM products`)
        res.json(products.rows)
    }

    async getOneProduct(req, res) {
        const id = req.params.id
        const product = await db.query(`SELECT * FROM products WHERE id=$1`, [id])
        res.json(product.rows[0])
    }
}

export default new Controller()
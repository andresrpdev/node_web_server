
import express from "express"
import path from "path"

export const startServer = (options) => {
    const {port, public_path = "public"} = options;
    
    const app = express()
    
    app.use(express.static(public_path)); // Servir archivos estáticos de la carpeta "public"

    app.get("*",(req,res) =>{
        const indexPath = path.join(__dirname + `../../../${public_path}/juego.html`)
        res.sendFile(indexPath)
    })

    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })

}


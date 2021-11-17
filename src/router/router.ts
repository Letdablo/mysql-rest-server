import { Router, Request, Response } from "express";
import MySQL from '../database/mysql';
const router = Router();


router.get('/users', (req:Request, res:Response) => {
    const query = `SELECT * FROM users`;
    MySQL.query(query, (err:Error, results:Object[])=>{
        if(err){
            res.status(400).json({
                ok: false,
                err,
            });
        }
        else {
            res.json({
                ok: true,
                heroes: results
            });
        }
    });
});

router.get('/bloodTest/:id', (req:Request, res:Response) => {
    const query = `SELECT * FROM users_laboratory_tests WHERE user_id=${MySQL.escape(req.params.id)}`
    MySQL.query(query, (err:Error, results:Object[]) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        else{
            res.json({
                ok: true,
                hero: results[0],
            });
        }
    });
});


export default router;
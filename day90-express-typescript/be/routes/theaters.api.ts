import {Router} from "express"
import { getTheaterById, getTheaters, searchTheaters } from "../controllers/theater.controller";


const TheaterRouter=Router();

TheaterRouter.get('/list',getTheaters);



TheaterRouter.get('/byId/:id',getTheaterById)


TheaterRouter.get('/search?keyword', searchTheaters)
export default TheaterRouter
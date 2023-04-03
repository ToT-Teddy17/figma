import TheaterModel from "../models/theaters.models";
import {Request,Response} from "express"



export const getTheaters=async(req:Request,res:Response)=>{
    try{
        const theaters=await TheaterModel.find();
        res.status(200).json(theaters);
    }
    catch(error){
        res.status(404).json({data:[]})
    }
}
export const getTheaterById=async(req:Request,res:Response)=>{
    try{
        const theaters=await TheaterModel.find({theaterId:Number(req.params.id)});
        res.status(200).json(theaters);
    }
    catch(error){
        res.status(404).json({data:[]})
    }
}

export const searchTheaters=async(req:Request,res:Response)=>{
//    const keyword: string=req.query.keyword
}
import TheaterModel from "../models/theaters.models";
import { Request, Response } from "express";

export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const theaters = await TheaterModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    const theater = await TheaterModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theater);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchTheaters = async (req: Request, res: Response) => {
  const keyword = req.query.keyword;
};

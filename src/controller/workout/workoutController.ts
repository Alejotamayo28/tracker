import { pool } from "../../database/database";
import { GENERAL_ERROR_HANDLER } from "../../errors";
import { ResponseHandler } from "../../model/classes/responseClasses";
import { WorkoutManager } from "./workoutManager";
import { Response, Request } from "express";

export const insertWorkout = async (req: Request, res: Response): Promise<void> => {
    let client;
    try {
        const { body } = req
        const { id } = req.params
        client = await pool.connect();
        if (await new WorkoutManager(client, res).verifyWorkout(id, body) !== 0) {
            ResponseHandler.sendExerciseExists(res);
        } else {
            await new WorkoutManager(client, res).insertWorkout(id, body);
            ResponseHandler.sendSuccessMessage(res, body);
        }
    } catch (e) {
        GENERAL_ERROR_HANDLER(e, res);
        console.error(e);
    } finally {
        client && client.release();
    }
}

export const workoutData = async (req: Request, res: Response) => {
    let client
    try {
        const { id } = req.params
        const { body } = req
        client = await pool.connect()
        const response = await new WorkoutManager(client, res).workoutData(id, body)
        ResponseHandler.sendSuccessMessage(res, response?.rows)
    } catch (e) {
        GENERAL_ERROR_HANDLER(e, res)
        console.error(e)
    } finally {
        client && client.release()
    }
}

export const deleteWorkoutData = async ({ params, body }: Request, res: Response) => {
    let client
    try {
        client = await pool.connect()
        const { id } = params
        await new WorkoutManager(client, res).deleteWorkout(id, body)
        ResponseHandler.sendSuccessMessage(res, body)
    } catch (e) {
        GENERAL_ERROR_HANDLER(e, res)
        console.error(e)
    } finally {
        client && client.release()
    }
}

export const UpdateWorkoutData = async ({ params, body }: Request, res: Response) => {
    let client
    try {
        client = await pool.connect()
        const { id } = params
        await new WorkoutManager(client, res).UpdateWorkout(id, body)
        ResponseHandler.sendSuccessMessage(res, body)
    } catch (e) {
        GENERAL_ERROR_HANDLER(e, res)
        console.error(e)
    } finally {
        client && client.release()
    }
}

import express from 'express'
import {getEmployeeList} from '../controller/controller.js'


const route=express.Router()

route.get("/getUsers",getEmployeeList);


export default route



                    
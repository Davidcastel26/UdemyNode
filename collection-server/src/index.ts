import dotenv from 'dotenv';
import { Server } from './models/server'
// const dotenv = require('dotenv')

dotenv.config()

const server = new Server();

server.listen()
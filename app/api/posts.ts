import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const handler = async (req: any, res: any) => {
    const DbPath = path.join(process.cwd(), 'petlife.db');
}



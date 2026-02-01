import axios from 'axios';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

dotenv.config();

const API_TOKEN = process.env.KANBANFLOW_API_TOKEN;
const BASE_URL = 'https://kanbanflow.com/api/v1';

if (!API_TOKEN) {
  console.error('Error: KANBANFLOW_API_TOKEN is not set in environment variables.');
  process.exit(1);
}

const args = process.argv.slice(2);
const command = args[0];

async function main() {
  try {
    switch (command) {
      case 'board':
        await getBoard();
        break;
      case 'list-tasks':
          // Simplified for now, just dumps board
         await getBoard();
         break;
      default:
        console.log('Usage: kanbanflow-skill <board|list-tasks>');
        break;
    }
  } catch (error: any) {
    console.error('API Error:', error.response?.data || error.message);
  }
}

async function getBoard() {
  const response = await axios.get(`${BASE_URL}/board`, {
    params: { apiToken: API_TOKEN }
  });
  console.log(JSON.stringify(response.data, null, 2));
}

main();

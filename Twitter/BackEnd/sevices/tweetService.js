import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "..", "data", "tweets.json");


async function readData() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (err) {
    if (err.code === "ENOENT") return []; 
    throw err;
  }
}


async function writeData(arr) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), "utf8");
}


function generateId() {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export async function getAllTweets() {
  return await readData();
}

export async function addTweet({ username, tweet }) {
  const arr = await readData();
  const newTweet = {
    id: generateId(),
    username: String(username).trim(),
    tweet: String(tweet).trim(),
    createdAt: new Date().toISOString()
  };
  arr.unshift(newTweet); 
  await writeData(arr);
  return newTweet;
}

export async function updateTweet(id, { tweet }) {
  const arr = await readData();
  const idx = arr.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  arr[idx].tweet = String(tweet).trim();
  arr[idx].edited = true;
  arr[idx].editedAt = new Date().toISOString();
  await writeData(arr);
  return arr[idx];
}

export async function deleteTweet(id) {
  const arr = await readData();
  const idx = arr.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  arr.splice(idx, 1);
  await writeData(arr);
  return true;
}

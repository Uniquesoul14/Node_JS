import { Router } from "express";
import { getAllTweets,updateTweet,addTweet,deleteTweet } from "../sevices/tweetService.js";
import { forCreate, forUpdate } from "../middleware/validateTweet.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const tweets = await getAllTweets();
    res.json(tweets);
  } catch (err) {
    next(err);
  }
});

router.post("/", forCreate, async (req, res, next) => {
  try {
    const created = await addTweet(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", forUpdate, async (req, res, next) => {
  try {
    const updated = await updateTweet(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Tweet not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const ok = await deleteTweet(req.params.id);
    if (!ok) return res.status(404).json({ error: "Tweet not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

export default router;

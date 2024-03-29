import { MongoClient } from "mongodb";

// /api/new-meetup
// POST
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://john:1234@nodeexpressproject.viwrjth.mongodb.net/meetups?retryWrites=true&w=majority&appName=NodeExpressProject"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

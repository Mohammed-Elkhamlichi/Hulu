import nextConnect from "next-connect";
import middleware from "../../utils/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let user = await req.db.collection("users").findOne();
    let setUser = await req.db.collection("users").add;
    console.log(user);

    if (req.method === "GET") {
        res.statusCode = 202;
        res.json({ message: "The HTTP method is GET", user });
    }
});

export default handler;

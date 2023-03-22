const adminRouter = express.Router();
import Users from "../models/Users";
const bcrypt = require("bcrypt");
adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;

  const oldUser = await Users.findOne({ email: email });

  if (oldUser) {
    return response.status(500).json({
      data: "hereglech ali hediin burtgeltei bn",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  Users.create({ email: email, password: hashedPassword })
    .then((data) => {
      response.status(201).json({
        message: "asjdghfkjasdbgkjaskdjg",
        email: data.email,
      });
      return;
    })
    .catch((error) => {
      response.status(500).json({
        success: false,
        error,
      });
    });
  //    else {
  //     return response.json({ error: "Input field is empty" });
  //   }
});

adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!(email && password)) {
      return response.status(400).json({
        data: "utguuda buren oruulna",
      });
    }
    const user = await Users.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, user?.password);
    if (user && isMatch) {
      const jwtBody = { user_id: user._id, email };
      const token = jwtBody.sign(jwtBody, "privateKey", { expiresIn: "24h" });
      return response.status(200).json({
        success: true,
        token: token,
      });
    } else {
      return response.status(400).json({
        success: false,
        status: "nuuts ug aldaatai",
      });
    }
  } catch (error) {
    res.status(500).json({
      data: "error hooe",
      error: err,
    });
  }
});

module.exports = adminRouter;

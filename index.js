import Application from "./framework/Application.js";
import router from "./src/user-router.js";
import jsonParser from "./framework/parseJson.js";
import parseUrl from "./framework/parseUrl.js";
import mongoose from "mongoose";
import setCredential from "./mongoose.js";

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(parseUrl("http://localhost:5000"));
setCredential();

app.addRouter(router);

const start = async () => {
  try {
    await mongoose.connect(process.env.mongooseconnect);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();

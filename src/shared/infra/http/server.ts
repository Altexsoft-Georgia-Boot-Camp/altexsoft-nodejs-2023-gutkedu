import { app } from "@shared/infra/http/app";

app.listen(process.env.PORT || 3333, () => {
  console.log(`server is running!`);
});

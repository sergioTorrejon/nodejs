import app from './app';
import { appConfig } from './config/config';

async function main() {
  
  try {
    console.log("debug", appConfig);
    app.listen(appConfig.server.port, () =>{
      console.log(`Server is Running on port:${appConfig.server.port}`)
      console.log(`Server is Running on ${appConfig.server.host}:${appConfig.server.port}`)
    }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
    }
  }
}

main();

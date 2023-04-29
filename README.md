# Clone of NetFlix

# Steps

1. use `npx create-expo-app -t expo-template-blank-typescript` this will init the project in typescript
2. add the web support `npx expo install react-dom react-native-web @expo/webpack-config`
3. add amplify `yarn add aws-amplify amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage core-js`
4. init the amplify `amplify init`
5. add amplify auth `amplify add auth`

- select Default configuration.
- select username as the default auth
- yes i am done -
- then amplify push
  -yes

6. add to app.js

```
import { Amplify, Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
Amplify.configure(awsConfig);
```

7. add aws-amplify-ui

```
yarn add @aws-amplify/ui-react-native aws-amplify react-native-safe-area-context amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values react-native-url-polyfill
```

8. in app.js

```
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
<Authenticator.Provider>
    <Authenticator>
    </Authenticator>
</Authenticator.Provider>
```
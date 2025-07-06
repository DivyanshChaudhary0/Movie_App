
import { Account, Client } from "react-native-appwrite"

export const client  = new Client();
client.setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
.setPlatform('co.habittracker.in');

export const account = new Account(client);
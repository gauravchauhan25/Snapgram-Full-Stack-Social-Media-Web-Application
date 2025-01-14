import { Client, Account } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("67864fab003947d4618c");

const account = new Account(client);

export { client, account };

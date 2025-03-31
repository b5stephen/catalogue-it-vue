import { Client, Account } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('67398c8c0029bb4828ad')

export const account = new Account(client)
export { ID } from 'appwrite'

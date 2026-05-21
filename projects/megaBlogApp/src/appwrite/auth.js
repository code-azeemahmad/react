/* eslint-disable no-useless-catch */
/*
Vendor lock-in in an authentication (auth) system happens when your organization becomes heavily dependent on a single identity provider (like Auth0, AWS Cognito, or Firebase). The time, cost, and technical debt required to migrate to another service become so high that you are essentially trapped, even if pricing or features become unfavorable
*/
/* solution is services like Appwrite, which is an open-source backend server that provides a suite of services including authentication, databases, storage, and more. By using Appwrite, you can avoid vendor lock-in because you have the flexibility to host it on your own infrastructure or choose from various hosting providers. This allows you to maintain control over your authentication system and easily switch providers if needed without being tied to a specific vendor's ecosystem. */

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  // better code practice
  constructor() {
    // client is made only when object is made
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  // wrapper to call appwrite services
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        // call another method (login)
        return await this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;

// if app or backend service changes tomorrow, then changes are incorporated in this file only.
// frontend has nothing to do with under the hood, future proof code (absraction)

/*
Overuse of try-catch
async functions automatically throw errors
*/

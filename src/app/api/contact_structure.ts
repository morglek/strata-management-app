// src/app/api/contact.ts

export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: number;
  }
  
  // Temporary in‑memory store for contact requests (renamed from "submissions" to "contactRequests")
  const contactRequests: ContactSubmission[] = [];
  
  /**
   * Retrieves all contact requests.
   */
  export function getContactRequests(): ContactSubmission[] {
    return contactRequests;
  }
  
  /**
   * Adds a new contact request.
   * @param requestData - The new contact data (without a timestamp).
   * @returns The added contact request with a timestamp.
   */
  export function addContactRequest(
    requestData: Omit<ContactSubmission, "timestamp">
  ): ContactSubmission {
    const newRequest: ContactSubmission = {
      ...requestData,
      timestamp: Date.now(),
    };
    contactRequests.push(newRequest);
    return newRequest;
  }
  
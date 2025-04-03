// src/app/api/contact.ts

export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: number;
  }
  
  // Temporary in-memory store for contact submissions
  const submissions: ContactSubmission[] = [];
  
  /**
   * Retrieves all contact submissions.
   */
  export function getContactSubmissions(): ContactSubmission[] {
    return submissions;
  }
  
  /**
   * Adds a new contact submission.
   * @param submission - The contact submission data (without timestamp).
   * @returns The new contact submission with a timestamp.
   */
  export function addContactSubmission(submission: Omit<ContactSubmission, 'timestamp'>): ContactSubmission {
    const newSubmission: ContactSubmission = {
      ...submission,
      timestamp: Date.now(),
    };
    submissions.push(newSubmission);
    return newSubmission;
  }
  
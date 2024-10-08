import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure options.headers is initialized if it doesn't exist
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, options);
    
    if (res.ok) {
      // Check for a JSON response and return it
      return res.json();
    } else {
      // Get response status and text for error details
      const errorText = await res.text();
      throw new Error(`HTTP Error ${res.status}: ${errorText}`);
    }
  } catch (error) {
    console.error('Request failed:', error.message);
    throw error; // Re-throw the error after logging
  }
}

// Array of URLs
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Function to make asynchronous HTTP GET requests
const fetchData = async () => {
  try {
    // Loop through each URL in the array
    for (const url of urls) {
      // Make the asynchronous HTTP GET request
      const response = await fetch(url);

      // Check if the response is successful
      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();

        // Log the response data in a human-readable format
        console.log(`Response from ${url}:`);
        console.log('User ID:', data.userId);
        console.log('ID:', data.id);
        console.log('Title:', data.title);
        console.log('Body:', data.body);
        console.log('---');
      } else {
        // Log error if response is not successful
        console.error(`Error fetching data from ${url}: ${response.status} ${response.statusText}`);
      }
    }
  } catch (error) {
    // Log any errors that occur during the requests
    console.error('Error fetching data:', error.message);
  }
};

// Invoke the fetchData function to make the HTTP requests
fetchData();

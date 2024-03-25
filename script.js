//your JS code here. If required.
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(`Response from ${url}:`, data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
  }
}

async function fetchAll(urls) {
  const promises = urls.map(url => fetchData(url));
  await Promise.all(promises);
}

fetchAll(urls);

import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// url object

const urlObj = new URL(urlString);
console.log(urlObj);

//format
console.log(url.format(urlObj));

// import meta.url - fileURL
console.log(import.meta.url);

//fileURLtoPath
console.log(url.fileURLToPath(import.meta.url));

// how to get query/search params
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));

// add on to params
params.append('limit','5');
console.log(params);
params.delete('limit','5');
console.log(params);
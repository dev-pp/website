const axios = require('axios');

var blobUtil = require('blob-util')

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content) {
 const links = new Set()
 let match
 while (match = regex.exec(content)) {
  links.add(match[1])
 }
 return Array.from(links)
}

function getFilesMetadata(photos) {
 const request = require('request')
 const promises = [];

 photos.forEach(element => {
  promises.push(new Promise(resolve => {
   try {
    request.head(element, function (err, res, body) {
     if (res) {
      resolve({
       src: `${element}=h1300`,
       //inline;filename="meetup-xpto.jpg"
       meetup: res.headers['content-disposition'].split("=")[1].replace(/"/g, "").split('-')[0]
      });
     } else {
      console.log({ body, err });
      resolve(null)
     }
    })

   } catch (e) {
    console.log({ e });
   }
  }))
 });

 return new Promise(resolve => {
  Promise.all(promises).then(results => {
   resolve(results);
  })
 })
}

async function getAlbum(albumId, meetupId) {
 try {
  const response = await axios.get(`https://photos.app.goo.gl/${albumId}`)
  let photos = extractPhotos(response.data)

  let result = await getFilesMetadata(photos);
  result = result.filter(x => x.meetup == meetupId)
  return result;
 }
 catch (e) {
  console.log(e);
  return null
 }
}


module.exports = {
 getAlbum
}
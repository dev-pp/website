import FireStoreParser from 'firestore-parser'

const baseUrl = 'https://firestore.googleapis.com/v1beta1/projects/dev-pp/databases/(default)';

export default {
  fetchByMeetupId: async meetupId => {
    const url = `${baseUrl}/documents/meetups-resources/${meetupId}`

    const data = fetch(url)
      .then(response => response.json())
      .then(json => FireStoreParser(json))
      .then(data => data);

    return data;
  }
}

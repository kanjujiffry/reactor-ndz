
  import axios from 'axios';
  import XMLParser from 'react-xml-parser';

  const getUser = async () => {
	try {
		const response = await axios.get('/birdnest/drones');
		var xml = new XMLParser().parseFromString(response.data); 
        console.log(xml)
	} catch (error) {
		console.error(error);
	}
  }

  export default getUser;
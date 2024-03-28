

// define functions which contains server-side code
// API routes only run on the server

// /api/new-meetup
// POST
function hander(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;


  }
}

export default hander();

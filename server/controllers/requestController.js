const Request = require('../models/request');
const requestCtrl = {};

// GET all requests
requestCtrl.getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET a single request by ID
requestCtrl.getRequestById = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new request
requestCtrl.createRequest = async (req, res) => {
  const request = new Request({
    user_id: req.body.user_id,
    administrator_id: req.body.administrator_id,
    arco_right: req.body.arco_right,
    date: req.body.date,
    finished: req.body.finished,
    comment: req.body.comment
  });
  try {
    const newRequest = await request.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE an existing request
requestCtrl.updateRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    request.user_id = req.body.user_id || request.user_id;
    request.administrator_id = req.body.administrator_id || request.administrator_id;
    request.arco_right = req.body.arco_right || request.arco_right;
    request.date = req.body.date || request.date;
    request.finished = req.body.finished || request.finished;
    request.comment = req.body.comment || request.comment;
    const updatedRequest = await request.save();
    res.json(updatedRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE a request
requestCtrl.deleteRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    await request.remove();
    res.json({ message: 'Request deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = requestCtrl;
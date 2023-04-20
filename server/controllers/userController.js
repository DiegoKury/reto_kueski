const db = require('../database');
const User = require('../models/user');
const userController = {};

// GET /users
userController.getUsers = async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users');
    res.json({users});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /users/:id
userController.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /users
userController.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, user_data, is_client, is_blocked } = req.body;
    
    // Check that all required fields are present in the request body
    if (!name || !first_last_name || !second_last_name || !born_date || !nationality || !state_of_birth || !economic_activity || !curp || !gender || !phone_number || !email || !user_data || !is_client || !is_blocked) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.create({ name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, user_data, is_client, is_blocked });
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// PATCH /users/:id
userController.updateUser = async (req, res) => {
  try {
    const { name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, user_data, is_client, is_blocked } = req.body;
    const [numOfAffectedRows, [updatedUser]] = await User.update(
      { name, first_last_name, second_last_name, born_date, nationality, state_of_birth, economic_activity, curp, gender, phone_number, email, user_data, is_client, is_blocked },
      { returning: true, where: { id: req.params.id } }
    );
    if (numOfAffectedRows !== 1) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// DELETE /users/:id
userController.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = userController;

const Team = require("../model/Team");

// get all teams
exports.getTeams = async (req, reply) => {
  try {
    const teams = await Team.find();
    return teams;
  } catch (err) {
    throw err;
  }
};

// getting single team
exports.getParticularTeam = async (req, reply) => {
  try {
    const teamId = req.params.id;
    const team = await Team.findById(teamId);
    return team;
  } catch (err) {
    throw err;
  }
};

// add new team
exports.addTeam = async (req, reply) => {
  try {
    const team = new Team(req.body);
    return team.save();
  } catch (err) {
    throw err;
  }
};

// update team
exports.updateTeam = async (req, reply) => {
  try {
    const teamId = req.params.id;
    const team = req.body;
    const { ...updateTeam } = team;
    const update = await Team.findByIdAndUpdate(teamId, updateTeam, {
      new: true,
    });
    return update;
  } catch (err) {
    throw err;
  }
};

// delete team
exports.deleteTeam = async (req, reply) => {
  try {
    const teamId = req.params.id;
    const team = Team.findByIdAndDelete(teamId);
    return team;
  } catch (err) {
    throw err;
  }
};

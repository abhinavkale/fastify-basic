const teamController = require("../controllers/teamController");

const routes = [
  {
    method: "GET",
    url: "/api/team",
    handler: teamController.getTeams,
  },
  {
    method: "GET",
    url: "/api/team/:id",
    handler: teamController.getParticularTeam,
  },
  {
    method: "POST",
    url: "/api/team",
    handler: teamController.addTeam,
  },
  {
    method: "PUT",
    url: "/api/team/:id",
    handler: teamController.updateTeam,
  },
  {
    method: "DELETE",
    url: "/api/team/:id",
    handler: teamController.deleteTeam,
  },
];

module.exports = routes;

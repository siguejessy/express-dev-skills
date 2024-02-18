const skills = [
  { id: 328001, skill: "HTML", done: true },
  { id: 328002, skill: "CSS", done: true },
  { id: 328003, skill: "JavaScript Fundamentals", done: true },
  { id: 328004, skill: "Node.js Runtime Environment", done: true },
  { id: 328005, skill: "Express Web App Framework", done: true },
  { id: 328006, skill: "MongoDB", done: false },
  { id: 328007, skill: "React", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
};

// function update(id, updatedSkill) {
//   id = parseInt(id);
//   const skill = skills.find((skill) => skill.id === id);
// Object.assign(skill, updatedSkill);
// }

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

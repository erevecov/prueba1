
const profile = async (req, res) => {
  res.status(200).send({
    fullname: 'Eduardo Reveco Villalobos',
    email: 'eduardorevecovillalobos@gmail.com',
    github: 'https://github.com/erevecov',
    profession: 'computer engineer, developer',
    technologies: [
      'javascript',
      'nodejs',
      'hapijs',
      'express',
      'mongodb',
      'couchdb',
      'mysql',
      'redis',
      'jwt',
      'gnu/linux',
      'jest',
      'html 5',
      'css 3',
      'react',
      'nextjs',
      'jquery',
      'bootstrap'
    ],
    thisProyect: {
      repository: 'https://github.com/erevecov/prueba1'
    }
  })
}

module.exports = profile

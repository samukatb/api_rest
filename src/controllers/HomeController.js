import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Samuel',
      sobrenome: 'Silva',
      email: 'samukatb@gmail.com',
      idade: 26,
      peso: 70,
      altura: 1.7,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();

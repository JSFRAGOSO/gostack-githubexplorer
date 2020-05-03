import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, RepositoryList, Error } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@githubexplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
    } else {
      try {
        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo('');
        setInputError('');
      } catch (err) {
        setInputError('Repositório não encontrado');
      }
    }
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Title>Explore Repositórios no Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          placeholder="Digite o nome do repositório"
          onChange={(event) => setNewRepo(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <RepositoryList>
        {repositories.map((repository) => (
          <Link
            to={`repositories/${repository.full_name}`}
            key={repository.full_name}
          >
            <img src={repository.owner.avatar_url} alt="repository" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={40} />
          </Link>
        ))}
      </RepositoryList>
    </>
  );
};

export default Dashboard;

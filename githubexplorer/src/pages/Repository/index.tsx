import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

interface Parameters {
  repositoryName: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Parameters>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get<Repository>(`repos/${params.repositoryName}`).then((response) => {
      setRepository(response.data);
    });

    api
      .get<Issue[]>(`repos/${params.repositoryName}/issues`)
      .then((response) => {
        setIssues(response.data);
      });
  }, [params.repositoryName]);
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src={repository?.owner.avatar_url}
            alt={repository?.owner.login}
          />
          <div>
            <strong>{repository?.full_name}</strong>
            <p>{repository?.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository?.stargazers_count}</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>{repository?.forks_count}</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>{repository?.open_issues_count}</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={40} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;

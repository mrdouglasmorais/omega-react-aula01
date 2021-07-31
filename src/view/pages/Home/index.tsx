import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import api from '../../../services/api';

import Loader from '../../../assets/img/chuck.gif';

import { Container } from './styles';

interface IData{
  id: string;
  icon_url: string;
  value: string;
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IData>();
  const [ isLoad, setIsLoad ] = useState(false);

  useEffect(() => {
    setIsLoad(true)
    api.get('random').then(
      response => {
        setData(response.data)
      }
    ).catch( e => toast.error('Xiii Marquinho!')).finally(() => {
      setIsLoad(false);
    })
  }, []);

  if (isLoad) {
    return(
      <Container>
        <div className="loader">
          <img src={Loader} alt="loader" />
        </div>
      </Container>
    )
  }

  return(
    <Container>
      <div className="content">
        <div>
          <img src={data?.icon_url} alt="icone" />
          <h1>{data?.value}</h1>
        </div>
      </div>
    </Container>
  );
}

export default Home;
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [monitoramento, setMonitoramento] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMonitoramento = async () => {
    const response = await axios
      .get(
        "https://my-json-server.typicode.com/dev-guif/api-niceplanet/monitoramentos",
      )
      .then((res) => {
        var dados = Object.keys(res.data).map((key) => {
          return res.data[key];
        });
        setMonitoramento(dados);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMonitoramento();
  }, []);

  return (
    <div>
      <h1>Monitoramentos</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        monitoramento.map((item, index) => {
          return (
            <div className="item" key={index}>
              <h2>Nome da Propriedade: {item.idVinculo}</h2>
              <p>Cadastro Rural: {item.numeroCadastroRural}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
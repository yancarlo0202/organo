import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props, aoDeletar) => {
  const css = { backgroundColor: hexToRgba(`${props.cor}`, 0.6) };

  return (
    (props.colaboradores.length > 0) ? <section className="time" style={css}>
      <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.cor} type="color" className="input-cor"/>
      <h3 style={{ borderColor: props.cor}}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.cor}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={aoDeletar}
          />
        ))}
      </div>
    </section> 
    : ''
  );
};

export default Time;

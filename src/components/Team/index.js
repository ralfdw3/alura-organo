import Colaborador from '../Colaborador'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secundaryColor }

    return (
        (props.colaboradores.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.primaryColor} key={colaborador.name} name={colaborador.name} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
        : ''
    )
}
export default Team
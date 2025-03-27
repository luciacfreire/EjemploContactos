import {FunctionComponent} from "preact";

const Header: FunctionComponent = () => {
    return(
        <div class="Header">
            <div><a href="/add">Añadir contactos</a></div>
            <div><a href="/list">Listar contactos</a></div>
        </div>
    )
};

export default Header;
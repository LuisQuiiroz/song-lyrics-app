import { useLyrics } from "../hooks/useLyrics"
import Alert from "./Alert";
import Form from "./Form"
import Lyrics from "./Lyrics";

const AppLyrics = () => {
    const { alert, lyrics, cargando } = useLyrics();
    return (
        <>
            <header>Búsqueda de letras de canciones</header>
            <Form />
            <main>
                {
                    alert
                        ? <Alert>{alert}</Alert>
                        : lyrics
                            ? <Lyrics />
                            : cargando
                                ? 'Cargando...'
                                : <p className="text-center">Busca letras de tus artistas preferidos</p>
                }
            </main>
        </>
    )
}

export default AppLyrics

import { useLyrics } from "../hooks/useLyrics"

const Lyrics = () => {
    const { lyrics, cargando } = useLyrics();
    return (
        cargando
            ? 'Cargando...'
            : <div className="letra">{lyrics}</div>
    )
}

export default Lyrics
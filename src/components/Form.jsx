import { useState } from 'react'
import { useLyrics } from '../hooks/useLyrics';

const Form = () => {

    const { setAlert, searchLyrics } = useLyrics();
    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const handleChangeData = (e) => {
        setSearch({
            ...search,
            [e.target.name]: [e.target.value]
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(search).includes('')) {
            setAlert('Coloca nombre de artista y canción');
            return;
        }
        searchLyrics(search)
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <legend>Busca por artista y canción</legend>
            <div className="form-grid">
                <div>
                    <label htmlFor="artist">Artista</label>
                    <input
                        type="text"
                        name="artist"
                        id="artist"
                        placeholder="Nombre del artista"
                        value={search.artist}
                        onChange={e => handleChangeData(e)} />
                </div>

                <div>
                    <label htmlFor="song">Canción</label>
                    <input
                        type="text"
                        name="song"
                        id="song"
                        placeholder="Nombre de la canción"
                        value={search.song}
                        onChange={e => handleChangeData(e)} />
                </div>
                <input type="submit" value="Buscar" />
            </div>
        </form>
    )
}

export default Form

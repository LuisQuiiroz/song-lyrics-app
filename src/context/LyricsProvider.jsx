import { useState, createContext } from 'react'
import axios from 'axios';

export const LyricsContext = createContext();

export const LyricsProvider = ({ children }) => {

    const [alert, setAlert] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [loading, setLoading] = useState(false);

    const searchLyrics = async (search) => {
        setLoading(true);
        try {
            const { artist, song } = search;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const result = await axios.get(url);
            setLyrics(result.data.lyrics);
            setAlert('');
        } catch (error) {
            console.log(error)
            setAlert('Canción no encontrada')
        }
        setLoading(false);
    }

    return (
        <LyricsContext.Provider
            value={{
                alert,
                setAlert,
                searchLyrics,
                lyrics,
                loading
            }}
        >
            {children}
        </LyricsContext.Provider>
    )
}
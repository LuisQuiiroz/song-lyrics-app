import { useContext } from 'react'
import { LyricsContext } from '../context/LyricsProvider'

export const useLyrics = () => useContext(LyricsContext);

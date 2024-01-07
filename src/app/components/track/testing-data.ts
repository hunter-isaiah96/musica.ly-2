import { Track } from '../../models/Track.model';

export const testTrack: Track = {
  id: 1875447247,
  title: 'ceilings',
  title_short: 'ceilings',
  title_version: '',
  link: 'https://www.deezer.com/track/1875447247',
  duration: 182,
  rank: 840156,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    'https://cdns-preview-8.dzcdn.net/stream/c-8ae9c6c7cc530df81d38a9e466186695-3.mp3',
  md5_image: 'd0eaf634445f49ad8ee6c9571874e059',
  position: 6,
  artist: {
    id: 14157839,
    name: 'Lizzy McAlpine',
    link: 'https://www.deezer.com/artist/14157839',
    picture: 'https://api.deezer.com/artist/14157839/image',
    picture_small:
      'https://e-cdns-images.dzcdn.net/images/artist/a9fbceedfeffb03d6a912d091e3d07d8/56x56-000000-80-0-0.jpg',
    picture_medium:
      'https://e-cdns-images.dzcdn.net/images/artist/a9fbceedfeffb03d6a912d091e3d07d8/250x250-000000-80-0-0.jpg',
    picture_big:
      'https://e-cdns-images.dzcdn.net/images/artist/a9fbceedfeffb03d6a912d091e3d07d8/500x500-000000-80-0-0.jpg',
    picture_xl:
      'https://e-cdns-images.dzcdn.net/images/artist/a9fbceedfeffb03d6a912d091e3d07d8/1000x1000-000000-80-0-0.jpg',
    radio: true,
    tracklist: 'https://api.deezer.com/artist/14157839/top?limit=50',
    type: 'artist',
  },
  album: {
    id: 348365347,
    title: 'five seconds flat',
    cover: 'https://api.deezer.com/album/348365347/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/d0eaf634445f49ad8ee6c9571874e059/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/d0eaf634445f49ad8ee6c9571874e059/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/d0eaf634445f49ad8ee6c9571874e059/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/d0eaf634445f49ad8ee6c9571874e059/1000x1000-000000-80-0-0.jpg',
    md5_image: 'd0eaf634445f49ad8ee6c9571874e059',
    tracklist: 'https://api.deezer.com/album/348365347/tracks',
    type: 'album',
  },
  type: 'track',
};

import { AlbumInfo } from '../../models/AlbumInfo.model';
import { Artist } from '../../models/Artist.model';
import { ArtistTopTracks } from '../../models/ArtistTopTracks.model';
import { Chart } from '../../models/Chart.model';
import { Playlists } from '../../models/Playlist.model';
import { Tracks } from '../../models/Track.model';
import { TrackInfo } from '../../models/TrackInfo.model';

export const getTracksResults: Tracks = {
  data: [
    {
      id: 2192589097,
      readable: true,
      title: 'Movement In Green',
      title_short: 'Movement In Green',
      title_version: '',
      link: 'https://www.deezer.com/track/2192589097',
      duration: 196,
      rank: 182739,
      explicit_lyrics: false,
      explicit_content_lyrics: 2,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-0.dzcdn.net/stream/c-082eb08e2f5c0b7242989aaaf97ffb4c-3.mp3',
      md5_image: '859ebe25f9cd02c4d414f0f251ff3e10',
      artist: {
        id: 280497,
        name: 'Nobuo Uematsu',
        link: 'https://www.deezer.com/artist/280497',
        picture: 'https://api.deezer.com/artist/280497/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/057b08d4baa18145059436d7a6febb2c/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/057b08d4baa18145059436d7a6febb2c/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/057b08d4baa18145059436d7a6febb2c/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/057b08d4baa18145059436d7a6febb2c/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/280497/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 417821207,
        title: 'FINAL FANTASY X Original Soundtrack',
        cover: 'https://api.deezer.com/album/417821207/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/859ebe25f9cd02c4d414f0f251ff3e10/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/859ebe25f9cd02c4d414f0f251ff3e10/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/859ebe25f9cd02c4d414f0f251ff3e10/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/859ebe25f9cd02c4d414f0f251ff3e10/1000x1000-000000-80-0-0.jpg',
        md5_image: '859ebe25f9cd02c4d414f0f251ff3e10',
        tracklist: 'https://api.deezer.com/album/417821207/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 688869882,
      readable: true,
      title: 'Movement In Green',
      title_short: 'Movement In Green',
      title_version: '',
      link: 'https://www.deezer.com/track/688869882',
      duration: 186,
      rank: 134503,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-6.dzcdn.net/stream/c-60df9f1a234740222a498132adfe4364-4.mp3',
      md5_image: '0fdf20eeb96bd350bb9143434ab92111',
      artist: {
        id: 13405823,
        name: 'Federico Dubbini',
        link: 'https://www.deezer.com/artist/13405823',
        picture: 'https://api.deezer.com/artist/13405823/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/75039f4f199d704ee12159b16b487eda/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/75039f4f199d704ee12159b16b487eda/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/75039f4f199d704ee12159b16b487eda/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/75039f4f199d704ee12159b16b487eda/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/13405823/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 98803912,
        title: 'FFX World',
        cover: 'https://api.deezer.com/album/98803912/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/0fdf20eeb96bd350bb9143434ab92111/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/0fdf20eeb96bd350bb9143434ab92111/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/0fdf20eeb96bd350bb9143434ab92111/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/0fdf20eeb96bd350bb9143434ab92111/1000x1000-000000-80-0-0.jpg',
        md5_image: '0fdf20eeb96bd350bb9143434ab92111',
        tracklist: 'https://api.deezer.com/album/98803912/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 141961157,
      readable: true,
      title: 'Movement In Green',
      title_short: 'Movement In Green',
      link: 'https://www.deezer.com/track/141961157',
      duration: 196,
      rank: 16871,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-b.dzcdn.net/stream/c-be597818fcadbf8848d39346ef4bb8bd-2.mp3',
      md5_image: '653212a3641227d4d645a3fbb751f8a1',
      artist: {
        id: 7537666,
        name: '3000m',
        link: 'https://www.deezer.com/artist/7537666',
        picture: 'https://api.deezer.com/artist/7537666/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/d5f33100b7eb767f5422a752c2cad656/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/d5f33100b7eb767f5422a752c2cad656/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/d5f33100b7eb767f5422a752c2cad656/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/d5f33100b7eb767f5422a752c2cad656/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/7537666/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 15335045,
        title: 'Final Fantasy 10, Vol. 2',
        cover: 'https://api.deezer.com/album/15335045/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/653212a3641227d4d645a3fbb751f8a1/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/653212a3641227d4d645a3fbb751f8a1/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/653212a3641227d4d645a3fbb751f8a1/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/653212a3641227d4d645a3fbb751f8a1/1000x1000-000000-80-0-0.jpg',
        md5_image: '653212a3641227d4d645a3fbb751f8a1',
        tracklist: 'https://api.deezer.com/album/15335045/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 733150972,
      readable: true,
      title: 'Movement in Green (From "Final Fantasy X")',
      title_short: 'Movement in Green (From "Final Fantasy X")',
      title_version: '',
      link: 'https://www.deezer.com/track/733150972',
      duration: 196,
      rank: 18675,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-c.dzcdn.net/stream/c-c8dc183adbacc950227fb2d4d38f47e6-3.mp3',
      md5_image: '1a5e0e1ca8be521267a1bbf293185d31',
      artist: {
        id: 10251744,
        name: 'Pontus Hultgren',
        link: 'https://www.deezer.com/artist/10251744',
        picture: 'https://api.deezer.com/artist/10251744/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/6b7c56ca0a91419ecda073e951e5a5f6/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/6b7c56ca0a91419ecda073e951e5a5f6/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/6b7c56ca0a91419ecda073e951e5a5f6/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/6b7c56ca0a91419ecda073e951e5a5f6/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/10251744/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 107713762,
        title: 'Songs From Spira',
        cover: 'https://api.deezer.com/album/107713762/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/1a5e0e1ca8be521267a1bbf293185d31/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/1a5e0e1ca8be521267a1bbf293185d31/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/1a5e0e1ca8be521267a1bbf293185d31/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/1a5e0e1ca8be521267a1bbf293185d31/1000x1000-000000-80-0-0.jpg',
        md5_image: '1a5e0e1ca8be521267a1bbf293185d31',
        tracklist: 'https://api.deezer.com/album/107713762/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 124197738,
      readable: true,
      title: 'Blue In Green',
      title_short: 'Blue In Green',
      title_version: '',
      link: 'https://www.deezer.com/track/124197738',
      duration: 357,
      rank: 77606,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-c.dzcdn.net/stream/c-cf92eeb360d75fbff9389ee8f41bcdd1-3.mp3',
      md5_image: '504fbc70c46d40e330a7424b0265fe2b',
      artist: {
        id: 78606,
        name: 'Jack DeJohnette',
        link: 'https://www.deezer.com/artist/78606',
        picture: 'https://api.deezer.com/artist/78606/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/b98e645bf2535ae74d97285bede587a3/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/b98e645bf2535ae74d97285bede587a3/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/b98e645bf2535ae74d97285bede587a3/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/b98e645bf2535ae74d97285bede587a3/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/78606/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 13030406,
        title: 'In Movement',
        cover: 'https://api.deezer.com/album/13030406/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/504fbc70c46d40e330a7424b0265fe2b/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/504fbc70c46d40e330a7424b0265fe2b/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/504fbc70c46d40e330a7424b0265fe2b/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/504fbc70c46d40e330a7424b0265fe2b/1000x1000-000000-80-0-0.jpg',
        md5_image: '504fbc70c46d40e330a7424b0265fe2b',
        tracklist: 'https://api.deezer.com/album/13030406/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 490419412,
      readable: true,
      title: 'Mozart Symphony #40 in G Minor, K550, 1st Movement',
      title_short: 'Mozart Symphony #40 in G Minor, K550, 1st Movement',
      title_version: '',
      link: 'https://www.deezer.com/track/490419412',
      duration: 248,
      rank: 94417,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-6.dzcdn.net/stream/c-606ffdd3e2cab1f2f2e7422383048fd0-2.mp3',
      md5_image: '959f31bb7132d7a36a442a69afcbe164',
      artist: {
        id: 8437,
        name: 'Grant Green',
        link: 'https://www.deezer.com/artist/8437',
        picture: 'https://api.deezer.com/artist/8437/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/227d9ad18013ecab317b7f8ef57a1fdf/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/227d9ad18013ecab317b7f8ef57a1fdf/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/227d9ad18013ecab317b7f8ef57a1fdf/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/227d9ad18013ecab317b7f8ef57a1fdf/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/8437/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 62004312,
        title: 'Visions',
        cover: 'https://api.deezer.com/album/62004312/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/959f31bb7132d7a36a442a69afcbe164/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/959f31bb7132d7a36a442a69afcbe164/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/959f31bb7132d7a36a442a69afcbe164/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/959f31bb7132d7a36a442a69afcbe164/1000x1000-000000-80-0-0.jpg',
        md5_image: '959f31bb7132d7a36a442a69afcbe164',
        tracklist: 'https://api.deezer.com/album/62004312/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1416318722,
      readable: true,
      title: 'Green River Sway (Movement No.1 in C Major)',
      title_short: 'Green River Sway (Movement No.1 in C Major)',
      title_version: '',
      link: 'https://www.deezer.com/track/1416318722',
      duration: 72,
      rank: 27113,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-d.dzcdn.net/stream/c-d9cfa11c5966c7a026890df9a81cc78b-3.mp3',
      md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
      artist: {
        id: 137409022,
        name: 'Bonnie Milne',
        link: 'https://www.deezer.com/artist/137409022',
        picture: 'https://api.deezer.com/artist/137409022/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/137409022/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 240140742,
        title: 'Anticipation',
        cover: 'https://api.deezer.com/album/240140742/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
        tracklist: 'https://api.deezer.com/album/240140742/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1416318732,
      readable: true,
      title: 'Green River Sway (Movement No.2 in C Major)',
      title_short: 'Green River Sway (Movement No.2 in C Major)',
      title_version: '',
      link: 'https://www.deezer.com/track/1416318732',
      duration: 200,
      rank: 100000,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-c.dzcdn.net/stream/c-c9cd2c2ced94cf87ebd8e623eae22407-3.mp3',
      md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
      artist: {
        id: 137409022,
        name: 'Bonnie Milne',
        link: 'https://www.deezer.com/artist/137409022',
        picture: 'https://api.deezer.com/artist/137409022/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/137409022/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 240140742,
        title: 'Anticipation',
        cover: 'https://api.deezer.com/album/240140742/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
        tracklist: 'https://api.deezer.com/album/240140742/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1416318812,
      readable: true,
      title: 'Green River Sway (Movement No.2 in C Major) (Piano Only)',
      title_short: 'Green River Sway (Movement No.2 in C Major) (Piano Only)',
      title_version: '',
      link: 'https://www.deezer.com/track/1416318812',
      duration: 200,
      rank: 18248,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-4.dzcdn.net/stream/c-408cddb61cda2cf265b087cc243e5349-3.mp3',
      md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
      artist: {
        id: 137409022,
        name: 'Bonnie Milne',
        link: 'https://www.deezer.com/artist/137409022',
        picture: 'https://api.deezer.com/artist/137409022/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/137409022/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 240140742,
        title: 'Anticipation',
        cover: 'https://api.deezer.com/album/240140742/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
        tracklist: 'https://api.deezer.com/album/240140742/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1416318802,
      readable: true,
      title: 'Green River Sway (Movement No.1 in C Major) (Piano Only)',
      title_short: 'Green River Sway (Movement No.1 in C Major) (Piano Only)',
      title_version: '',
      link: 'https://www.deezer.com/track/1416318802',
      duration: 72,
      rank: 100000,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-5.dzcdn.net/stream/c-5f011a6885cad505eb8c1b09509a3b0e-3.mp3',
      md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
      artist: {
        id: 137409022,
        name: 'Bonnie Milne',
        link: 'https://www.deezer.com/artist/137409022',
        picture: 'https://api.deezer.com/artist/137409022/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/137409022/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 240140742,
        title: 'Anticipation',
        cover: 'https://api.deezer.com/album/240140742/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/8b77faaab4d461b4e07d0f9c09ef1141/1000x1000-000000-80-0-0.jpg',
        md5_image: '8b77faaab4d461b4e07d0f9c09ef1141',
        tracklist: 'https://api.deezer.com/album/240140742/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1470166022,
      readable: true,
      title: "Everything's Gone Green (Live)",
      title_short: "Everything's Gone Green",
      title_version: '(Live)',
      link: 'https://www.deezer.com/track/1470166022',
      duration: 300,
      rank: 31231,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-6.dzcdn.net/stream/c-614768ed6e748e44272a82ce538804d3-3.mp3',
      md5_image: '9a01bab95cc27f7814b9de82c13c1b47',
      artist: {
        id: 142682622,
        name: 'Peter Hook & the Light',
        link: 'https://www.deezer.com/artist/142682622',
        picture: 'https://api.deezer.com/artist/142682622/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/00b6f716eade078cc84807726f20b115/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/00b6f716eade078cc84807726f20b115/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/00b6f716eade078cc84807726f20b115/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/00b6f716eade078cc84807726f20b115/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/142682622/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 253046232,
        title:
          "New Order's Movement & Power Corruption & Lies (Live At Hebden Bridge)",
        cover: 'https://api.deezer.com/album/253046232/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/9a01bab95cc27f7814b9de82c13c1b47/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/9a01bab95cc27f7814b9de82c13c1b47/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/9a01bab95cc27f7814b9de82c13c1b47/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/9a01bab95cc27f7814b9de82c13c1b47/1000x1000-000000-80-0-0.jpg',
        md5_image: '9a01bab95cc27f7814b9de82c13c1b47',
        tracklist: 'https://api.deezer.com/album/253046232/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 828466672,
      readable: true,
      title:
        'Movement in Green -arrange- (Zanarkand) from Final Fantasy X (From "Dissidia Final Fantasy") [For Piano Solo]',
      title_short:
        'Movement in Green -arrange- (Zanarkand) from Final Fantasy X (From "Dissidia Final Fantasy") [For Piano Solo]',
      title_version: '',
      link: 'https://www.deezer.com/track/828466672',
      duration: 125,
      rank: 18707,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-1.dzcdn.net/stream/c-11b7e857738c54c8cdf8c7d814f08ffa-3.mp3',
      md5_image: '27b9dfe2424627dd1bee00f5fda194d3',
      artist: {
        id: 7162100,
        name: 'daigoro789',
        link: 'https://www.deezer.com/artist/7162100',
        picture: 'https://api.deezer.com/artist/7162100/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/4a09ee4b0ca8909119996ff5d10b3f90/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/4a09ee4b0ca8909119996ff5d10b3f90/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/4a09ee4b0ca8909119996ff5d10b3f90/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/4a09ee4b0ca8909119996ff5d10b3f90/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/7162100/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 122354202,
        title:
          'Dissidia Final Fantasy & other Final Fantasy Spin-off Games Piano Collections',
        cover: 'https://api.deezer.com/album/122354202/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/27b9dfe2424627dd1bee00f5fda194d3/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/27b9dfe2424627dd1bee00f5fda194d3/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/27b9dfe2424627dd1bee00f5fda194d3/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/27b9dfe2424627dd1bee00f5fda194d3/1000x1000-000000-80-0-0.jpg',
        md5_image: '27b9dfe2424627dd1bee00f5fda194d3',
        tracklist: 'https://api.deezer.com/album/122354202/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 880386162,
      readable: true,
      title: 'Movement',
      title_short: 'Movement',
      title_version: '',
      link: 'https://www.deezer.com/track/880386162',
      duration: 246,
      rank: 13563,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-4.dzcdn.net/stream/c-40af6c48c9ef5bce8511fa29576d3032-2.mp3',
      md5_image: 'f441dfa12d5ffea61e6f244be7a4df51',
      artist: {
        id: 251742,
        name: 'Green Mind',
        link: 'https://www.deezer.com/artist/251742',
        picture: 'https://api.deezer.com/artist/251742/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/96839ec0fa850fb811ae799d6e5234fb/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/96839ec0fa850fb811ae799d6e5234fb/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/96839ec0fa850fb811ae799d6e5234fb/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/96839ec0fa850fb811ae799d6e5234fb/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/251742/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 132128132,
        title: 'IN MIND',
        cover: 'https://api.deezer.com/album/132128132/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/f441dfa12d5ffea61e6f244be7a4df51/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/f441dfa12d5ffea61e6f244be7a4df51/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/f441dfa12d5ffea61e6f244be7a4df51/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/f441dfa12d5ffea61e6f244be7a4df51/1000x1000-000000-80-0-0.jpg',
        md5_image: 'f441dfa12d5ffea61e6f244be7a4df51',
        tracklist: 'https://api.deezer.com/album/132128132/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1476302822,
      readable: true,
      title: 'Movement',
      title_short: 'Movement',
      title_version: '',
      link: 'https://www.deezer.com/track/1476302822',
      duration: 114,
      rank: 1796,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-6.dzcdn.net/stream/c-65afed798c5ae8f2e63856da69c7620e-3.mp3',
      md5_image: '03b79caf46e8cd2f9860da62c8a44b4e',
      artist: {
        id: 15049673,
        name: 'Green Cat',
        link: 'https://www.deezer.com/artist/15049673',
        picture: 'https://api.deezer.com/artist/15049673/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/03b79caf46e8cd2f9860da62c8a44b4e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/03b79caf46e8cd2f9860da62c8a44b4e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/03b79caf46e8cd2f9860da62c8a44b4e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/03b79caf46e8cd2f9860da62c8a44b4e/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/15049673/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 254518482,
        title: 'Cat in the Office',
        cover: 'https://api.deezer.com/album/254518482/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/03b79caf46e8cd2f9860da62c8a44b4e/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/03b79caf46e8cd2f9860da62c8a44b4e/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/03b79caf46e8cd2f9860da62c8a44b4e/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/03b79caf46e8cd2f9860da62c8a44b4e/1000x1000-000000-80-0-0.jpg',
        md5_image: '03b79caf46e8cd2f9860da62c8a44b4e',
        tracklist: 'https://api.deezer.com/album/254518482/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 2444046745,
      readable: true,
      title: 'Blue in Green',
      title_short: 'Blue in Green',
      title_version: '',
      link: 'https://www.deezer.com/track/2444046745',
      duration: 290,
      rank: 69458,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-f.dzcdn.net/stream/c-f97b8427f1e76a54556d5267eed36aa5-1.mp3',
      md5_image: 'd60336b76f0756a396d4eba30d15e4c0',
      artist: {
        id: 106364,
        name: 'Lisa Hilton',
        link: 'https://www.deezer.com/artist/106364',
        picture: 'https://api.deezer.com/artist/106364/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/0733977d0514448272e4e52456ebb55e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/0733977d0514448272e4e52456ebb55e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/0733977d0514448272e4e52456ebb55e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/0733977d0514448272e4e52456ebb55e/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/106364/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 485194165,
        title: 'Coincidental Moment',
        cover: 'https://api.deezer.com/album/485194165/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/d60336b76f0756a396d4eba30d15e4c0/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/d60336b76f0756a396d4eba30d15e4c0/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/d60336b76f0756a396d4eba30d15e4c0/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/d60336b76f0756a396d4eba30d15e4c0/1000x1000-000000-80-0-0.jpg',
        md5_image: 'd60336b76f0756a396d4eba30d15e4c0',
        tracklist: 'https://api.deezer.com/album/485194165/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 2297230045,
      readable: true,
      title: 'Slight Movement In The Surroundings',
      title_short: 'Slight Movement In The Surroundings',
      title_version: '',
      link: 'https://www.deezer.com/track/2297230045',
      duration: 194,
      rank: 100000,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-9.dzcdn.net/stream/c-9a295e49d499eb9b2905a46fa90c6b29-3.mp3',
      md5_image: '847745591c472aecf6d5c50655a5ade0',
      artist: {
        id: 206590547,
        name: 'Green Green Grass',
        link: 'https://www.deezer.com/artist/206590547',
        picture: 'https://api.deezer.com/artist/206590547/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/9ae21196b15c8c48034a6b9bc8cb2a41/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/9ae21196b15c8c48034a6b9bc8cb2a41/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/9ae21196b15c8c48034a6b9bc8cb2a41/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/9ae21196b15c8c48034a6b9bc8cb2a41/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/206590547/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 445370775,
        title: 'The Gentle Green',
        cover: 'https://api.deezer.com/album/445370775/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/847745591c472aecf6d5c50655a5ade0/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/847745591c472aecf6d5c50655a5ade0/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/847745591c472aecf6d5c50655a5ade0/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/847745591c472aecf6d5c50655a5ade0/1000x1000-000000-80-0-0.jpg',
        md5_image: '847745591c472aecf6d5c50655a5ade0',
        tracklist: 'https://api.deezer.com/album/445370775/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 123208748,
      readable: true,
      title: 'Bowling Green (Live)',
      title_short: 'Bowling Green (Live)',
      link: 'https://www.deezer.com/track/123208748',
      duration: 134,
      rank: 5430,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-d.dzcdn.net/stream/c-d9068809e6020b65b13bacd2702f0c83-4.mp3',
      md5_image: '6c40336b18fa6b7845c6f6c81b14c433',
      artist: {
        id: 5708987,
        name: 'The Barefoot Movement',
        link: 'https://www.deezer.com/artist/5708987',
        picture: 'https://api.deezer.com/artist/5708987/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/a56f7a36b9ea13c5fd03f295af0debd6/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/a56f7a36b9ea13c5fd03f295af0debd6/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/a56f7a36b9ea13c5fd03f295af0debd6/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/a56f7a36b9ea13c5fd03f295af0debd6/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/5708987/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 12903178,
        title: 'Live in L.A.',
        cover: 'https://api.deezer.com/album/12903178/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/6c40336b18fa6b7845c6f6c81b14c433/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/6c40336b18fa6b7845c6f6c81b14c433/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/6c40336b18fa6b7845c6f6c81b14c433/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/6c40336b18fa6b7845c6f6c81b14c433/1000x1000-000000-80-0-0.jpg',
        md5_image: '6c40336b18fa6b7845c6f6c81b14c433',
        tracklist: 'https://api.deezer.com/album/12903178/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 2470401095,
      readable: true,
      title: 'Tears in the Sky',
      title_short: 'Tears in the Sky',
      title_version: '',
      link: 'https://www.deezer.com/track/2470401095',
      duration: 248,
      rank: 100000,
      explicit_lyrics: false,
      explicit_content_lyrics: 2,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-3.dzcdn.net/stream/c-3320e4c9f941f60ca86c7a7a65320734-1.mp3',
      md5_image: 'e852cf5e123ec0a89fc40b9e4c1b3352',
      artist: {
        id: 232149335,
        name: 'Green Matches',
        link: 'https://www.deezer.com/artist/232149335',
        picture: 'https://api.deezer.com/artist/232149335/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/232149335/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 492452545,
        title: 'Constant Movement',
        cover: 'https://api.deezer.com/album/492452545/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/e852cf5e123ec0a89fc40b9e4c1b3352/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/e852cf5e123ec0a89fc40b9e4c1b3352/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/e852cf5e123ec0a89fc40b9e4c1b3352/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/e852cf5e123ec0a89fc40b9e4c1b3352/1000x1000-000000-80-0-0.jpg',
        md5_image: 'e852cf5e123ec0a89fc40b9e4c1b3352',
        tracklist: 'https://api.deezer.com/album/492452545/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 107116794,
      readable: true,
      title: '(What A Day For A) Daydream',
      title_short: '(What A Day For A) Daydream',
      title_version: '',
      link: 'https://www.deezer.com/track/107116794',
      duration: 141,
      rank: 60674,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-5.dzcdn.net/stream/c-54255d1d05a8d580acf852a11f8bad1e-0.mp3',
      md5_image: 'ccd7009d8800d3c7dea5109a08ac1195',
      artist: {
        id: 5090305,
        name: 'Robson Green',
        link: 'https://www.deezer.com/artist/5090305',
        picture: 'https://api.deezer.com/artist/5090305/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/89a006c426cfd1f8d65a1232de5e0d7e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/89a006c426cfd1f8d65a1232de5e0d7e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/89a006c426cfd1f8d65a1232de5e0d7e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/89a006c426cfd1f8d65a1232de5e0d7e/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/5090305/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 11168762,
        title: 'Moment In Time',
        cover: 'https://api.deezer.com/album/11168762/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/ccd7009d8800d3c7dea5109a08ac1195/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/ccd7009d8800d3c7dea5109a08ac1195/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/ccd7009d8800d3c7dea5109a08ac1195/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/ccd7009d8800d3c7dea5109a08ac1195/1000x1000-000000-80-0-0.jpg',
        md5_image: 'ccd7009d8800d3c7dea5109a08ac1195',
        tracklist: 'https://api.deezer.com/album/11168762/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1761703427,
      readable: true,
      title: "Ray's Collard Greens",
      title_short: "Ray's Collard Greens",
      title_version: '',
      link: 'https://www.deezer.com/track/1761703427',
      duration: 396,
      rank: 47799,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-0.dzcdn.net/stream/c-0315c51068a023e27b89ef864f604004-3.mp3',
      md5_image: '7285afdfc368c6d5f71a75e4f5bdc29f',
      artist: {
        id: 149765,
        name: 'Steve Turre',
        link: 'https://www.deezer.com/artist/149765',
        picture: 'https://api.deezer.com/artist/149765/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/631c1deb26c48c2850df36d4132408bb/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/631c1deb26c48c2850df36d4132408bb/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/631c1deb26c48c2850df36d4132408bb/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/631c1deb26c48c2850df36d4132408bb/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/149765/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 320962657,
        title: 'In The Spur Of The Moment',
        cover: 'https://api.deezer.com/album/320962657/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/7285afdfc368c6d5f71a75e4f5bdc29f/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/7285afdfc368c6d5f71a75e4f5bdc29f/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/7285afdfc368c6d5f71a75e4f5bdc29f/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/7285afdfc368c6d5f71a75e4f5bdc29f/1000x1000-000000-80-0-0.jpg',
        md5_image: '7285afdfc368c6d5f71a75e4f5bdc29f',
        tracklist: 'https://api.deezer.com/album/320962657/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1992229567,
      readable: true,
      title: 'a moment in time',
      title_short: 'a moment in time',
      title_version: '',
      link: 'https://www.deezer.com/track/1992229567',
      duration: 159,
      rank: 89933,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-f.dzcdn.net/stream/c-f12ccdf25f7b9b54d205351f77ac2232-2.mp3',
      md5_image: '204f4048860f16d9830731b07dd35dc6',
      artist: {
        id: 11900657,
        name: 'Idealism',
        link: 'https://www.deezer.com/artist/11900657',
        picture: 'https://api.deezer.com/artist/11900657/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/863819ec085c7fa3391fe73c5f982d32/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/863819ec085c7fa3391fe73c5f982d32/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/863819ec085c7fa3391fe73c5f982d32/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/863819ec085c7fa3391fe73c5f982d32/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/11900657/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 371406907,
        title: 'a moment in time',
        cover: 'https://api.deezer.com/album/371406907/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/204f4048860f16d9830731b07dd35dc6/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/204f4048860f16d9830731b07dd35dc6/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/204f4048860f16d9830731b07dd35dc6/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/204f4048860f16d9830731b07dd35dc6/1000x1000-000000-80-0-0.jpg',
        md5_image: '204f4048860f16d9830731b07dd35dc6',
        tracklist: 'https://api.deezer.com/album/371406907/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 72009095,
      readable: true,
      title: 'The Movement (Feat. Vito Green)',
      title_short: 'The Movement (Feat. Vito Green)',
      title_version: '',
      link: 'https://www.deezer.com/track/72009095',
      duration: 248,
      rank: 13325,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-a.dzcdn.net/stream/c-a531cc65de7ecd9577852e157e6688ba-0.mp3',
      md5_image: '57edb95cc767dbef764ac474d484f713',
      artist: {
        id: 5308447,
        name: 'Carlos F',
        link: 'https://www.deezer.com/artist/5308447',
        picture: 'https://api.deezer.com/artist/5308447/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/00591e2c7be2f5e2fb214340a0842fa8/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/00591e2c7be2f5e2fb214340a0842fa8/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/00591e2c7be2f5e2fb214340a0842fa8/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/00591e2c7be2f5e2fb214340a0842fa8/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/5308447/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 7073731,
        title: 'Diamond In The Sky: The Star Life',
        cover: 'https://api.deezer.com/album/7073731/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/57edb95cc767dbef764ac474d484f713/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/57edb95cc767dbef764ac474d484f713/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/57edb95cc767dbef764ac474d484f713/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/57edb95cc767dbef764ac474d484f713/1000x1000-000000-80-0-0.jpg',
        md5_image: '57edb95cc767dbef764ac474d484f713',
        tracklist: 'https://api.deezer.com/album/7073731/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 111379734,
      readable: true,
      title: 'In the Clouds',
      title_short: 'In the Clouds',
      title_version: '',
      link: 'https://www.deezer.com/track/111379734',
      duration: 155,
      rank: 0,
      explicit_lyrics: false,
      explicit_content_lyrics: 2,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-f.dzcdn.net/stream/c-f3c7b3334bd2d1175a14cdcd6d153866-4.mp3',
      md5_image: '64ef68039a00f4e62cae45ce1a161049',
      artist: {
        id: 7927536,
        name: 'Warner/Chappell Productions',
        link: 'https://www.deezer.com/artist/7927536',
        picture: 'https://api.deezer.com/artist/7927536/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/bf46416e62ac5180fde9b317da822660/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/bf46416e62ac5180fde9b317da822660/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/bf46416e62ac5180fde9b317da822660/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/bf46416e62ac5180fde9b317da822660/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/7927536/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 11571708,
        title: 'Green Movement',
        cover: 'https://api.deezer.com/album/11571708/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/64ef68039a00f4e62cae45ce1a161049/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/64ef68039a00f4e62cae45ce1a161049/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/64ef68039a00f4e62cae45ce1a161049/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/64ef68039a00f4e62cae45ce1a161049/1000x1000-000000-80-0-0.jpg',
        md5_image: '64ef68039a00f4e62cae45ce1a161049',
        tracklist: 'https://api.deezer.com/album/11571708/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 2450470685,
      readable: true,
      title: 'Spend Time in Green Spaces',
      title_short: 'Spend Time in Green Spaces',
      title_version: '',
      link: 'https://www.deezer.com/track/2450470685',
      duration: 182,
      rank: 100000,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-4.dzcdn.net/stream/c-4ca42d53cc2889e02cf3239a5b67db66-1.mp3',
      md5_image: 'b4c1c288782a5e2c84d3addb9fade560',
      artist: {
        id: 184261157,
        name: 'Sleep Music!',
        link: 'https://www.deezer.com/artist/184261157',
        picture: 'https://api.deezer.com/artist/184261157/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/6f02821d0f60f2bce377cead4ce5c085/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/6f02821d0f60f2bce377cead4ce5c085/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/6f02821d0f60f2bce377cead4ce5c085/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/6f02821d0f60f2bce377cead4ce5c085/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/184261157/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 486983705,
        title: 'Thermal Conductivity',
        cover: 'https://api.deezer.com/album/486983705/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/b4c1c288782a5e2c84d3addb9fade560/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/b4c1c288782a5e2c84d3addb9fade560/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/b4c1c288782a5e2c84d3addb9fade560/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/b4c1c288782a5e2c84d3addb9fade560/1000x1000-000000-80-0-0.jpg',
        md5_image: 'b4c1c288782a5e2c84d3addb9fade560',
        tracklist: 'https://api.deezer.com/album/486983705/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1186113412,
      readable: true,
      title: 'Beethoven #7, 2nd Movement',
      title_short: 'Beethoven #7, 2nd Movement',
      title_version: '',
      link: 'https://www.deezer.com/track/1186113412',
      duration: 163,
      rank: 72620,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-c.dzcdn.net/stream/c-c2c986b6ba02278c19d77dff1f8659f2-2.mp3',
      md5_image: '7420a90540cbcfa59b39a9cd0e899c81',
      artist: {
        id: 1595617,
        name: 'David Helbock',
        link: 'https://www.deezer.com/artist/1595617',
        picture: 'https://api.deezer.com/artist/1595617/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/d8d9c42036c4d08dff81edcdb39525ca/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/d8d9c42036c4d08dff81edcdb39525ca/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/d8d9c42036c4d08dff81edcdb39525ca/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/d8d9c42036c4d08dff81edcdb39525ca/1000x1000-000000-80-0-0.jpg',
        tracklist: 'https://api.deezer.com/artist/1595617/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 194897792,
        title: 'Romantic Freedom - Blue in Green',
        cover: 'https://api.deezer.com/album/194897792/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/7420a90540cbcfa59b39a9cd0e899c81/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/7420a90540cbcfa59b39a9cd0e899c81/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/7420a90540cbcfa59b39a9cd0e899c81/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/7420a90540cbcfa59b39a9cd0e899c81/1000x1000-000000-80-0-0.jpg',
        md5_image: '7420a90540cbcfa59b39a9cd0e899c81',
        tracklist: 'https://api.deezer.com/album/194897792/tracks',
        type: 'album',
      },
      type: 'track',
    },
  ],
  total: 31,
  next: 'https://api.deezer.com/search/track?q=movement%20in%20green&index=25',
};

export const getChartResults: Chart = {
  tracks: {
    data: [
      {
        id: 2459517745,
        title: 'Agora Hills',
        title_short: 'Agora Hills',
        title_version: '',
        link: 'https://www.deezer.com/track/2459517745',
        duration: 265,
        rank: 931440,
        explicit_lyrics: true,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-4.dzcdn.net/stream/c-4afb61f61f74117c8634474b6843f9f5-1.mp3',
        md5_image: 'aea5d295972a673a994d88a82fb8e83c',
        position: 1,
        artist: {
          id: 5578942,
          name: 'Doja Cat',
          link: 'https://www.deezer.com/artist/5578942',
          picture: 'https://api.deezer.com/artist/5578942/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/5578942/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 489358925,
          title: 'Scarlet',
          cover: 'https://api.deezer.com/album/489358925/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/aea5d295972a673a994d88a82fb8e83c/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/aea5d295972a673a994d88a82fb8e83c/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/aea5d295972a673a994d88a82fb8e83c/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/aea5d295972a673a994d88a82fb8e83c/1000x1000-000000-80-0-0.jpg',
          md5_image: 'aea5d295972a673a994d88a82fb8e83c',
          tracklist: 'https://api.deezer.com/album/489358925/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2565567572,
        title: 'MY HOUSE',
        title_short: 'MY HOUSE',
        title_version: '',
        link: 'https://www.deezer.com/track/2565567572',
        duration: 262,
        rank: 815111,
        explicit_lyrics: true,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-a.dzcdn.net/stream/c-ae2652ad5e506ea12dc88f337eaba410-1.mp3',
        md5_image: '08824c6d942a428c1999cc91b29953c2',
        position: 2,
        artist: {
          id: 145,
          name: 'Beyoncé',
          link: 'https://www.deezer.com/artist/145',
          picture: 'https://api.deezer.com/artist/145/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/145/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 518544282,
          title: 'MY HOUSE',
          cover: 'https://api.deezer.com/album/518544282/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/1000x1000-000000-80-0-0.jpg',
          md5_image: '08824c6d942a428c1999cc91b29953c2',
          tracklist: 'https://api.deezer.com/album/518544282/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 1858539707,
        title: 'SNAP',
        title_short: 'SNAP',
        title_version: '',
        link: 'https://www.deezer.com/track/1858539707',
        duration: 179,
        rank: 963121,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-3.dzcdn.net/stream/c-3af9b97bced2da58372505fec78b3edf-3.mp3',
        md5_image: '24e217baa78c0c56263677219f78e861',
        position: 3,
        artist: {
          id: 142015162,
          name: 'Rosa Linn',
          link: 'https://www.deezer.com/artist/142015162',
          picture: 'https://api.deezer.com/artist/142015162/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/ee1d007dac3e748327200795ff05036f/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/ee1d007dac3e748327200795ff05036f/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/ee1d007dac3e748327200795ff05036f/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/ee1d007dac3e748327200795ff05036f/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/142015162/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 344520787,
          title: 'SNAP',
          cover: 'https://api.deezer.com/album/344520787/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/24e217baa78c0c56263677219f78e861/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/24e217baa78c0c56263677219f78e861/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/24e217baa78c0c56263677219f78e861/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/24e217baa78c0c56263677219f78e861/1000x1000-000000-80-0-0.jpg',
          md5_image: '24e217baa78c0c56263677219f78e861',
          tracklist: 'https://api.deezer.com/album/344520787/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2381294455,
        title: 'Water',
        title_short: 'Water',
        title_version: '',
        link: 'https://www.deezer.com/track/2381294455',
        duration: 200,
        rank: 982453,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-b.dzcdn.net/stream/c-b4dccbe121c42ce54010fcead7ea9aa2-3.mp3',
        md5_image: 'b246276eba02e22c9e08605924395480',
        position: 4,
        artist: {
          id: 1220981,
          name: 'Tyla',
          link: 'https://www.deezer.com/artist/1220981',
          picture: 'https://api.deezer.com/artist/1220981/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/4d2c368914c4af6bdebbc0748b1e03ed/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/4d2c368914c4af6bdebbc0748b1e03ed/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/4d2c368914c4af6bdebbc0748b1e03ed/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/4d2c368914c4af6bdebbc0748b1e03ed/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/1220981/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 468167025,
          title: 'Water',
          cover: 'https://api.deezer.com/album/468167025/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/b246276eba02e22c9e08605924395480/1000x1000-000000-80-0-0.jpg',
          md5_image: 'b246276eba02e22c9e08605924395480',
          tracklist: 'https://api.deezer.com/album/468167025/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2536499851,
        title: 'Lovin On Me',
        title_short: 'Lovin On Me',
        title_version: '',
        link: 'https://www.deezer.com/track/2536499851',
        duration: 138,
        rank: 663269,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-4.dzcdn.net/stream/c-4f64236cc588c3a754c191053d47dfd5-1.mp3',
        md5_image: 'ef310e6d334b0ba975c9dec9ba086dfe',
        position: 5,
        artist: {
          id: 9093938,
          name: 'Jack Harlow',
          link: 'https://www.deezer.com/artist/9093938',
          picture: 'https://api.deezer.com/artist/9093938/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/7d5211931ac5ef6efe0a88e31ae5ab82/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/7d5211931ac5ef6efe0a88e31ae5ab82/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/7d5211931ac5ef6efe0a88e31ae5ab82/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/7d5211931ac5ef6efe0a88e31ae5ab82/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/9093938/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 510918021,
          title: 'Lovin On Me',
          cover: 'https://api.deezer.com/album/510918021/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ef310e6d334b0ba975c9dec9ba086dfe/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ef310e6d334b0ba975c9dec9ba086dfe/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ef310e6d334b0ba975c9dec9ba086dfe/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ef310e6d334b0ba975c9dec9ba086dfe/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ef310e6d334b0ba975c9dec9ba086dfe',
          tracklist: 'https://api.deezer.com/album/510918021/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
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
      },
      {
        id: 2365569495,
        title: 'My Love Mine All Mine',
        title_short: 'My Love Mine All Mine',
        title_version: '',
        link: 'https://www.deezer.com/track/2365569495',
        duration: 137,
        rank: 957243,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-0.dzcdn.net/stream/c-0a0ac7cb37f91bc749c972688d62b28f-2.mp3',
        md5_image: 'db69f7d3ea280f1155256705735648cd',
        position: 7,
        artist: {
          id: 6630050,
          name: 'Mitski',
          link: 'https://www.deezer.com/artist/6630050',
          picture: 'https://api.deezer.com/artist/6630050/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/d26ad27237ab3b96df964cfaac780d94/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/d26ad27237ab3b96df964cfaac780d94/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/d26ad27237ab3b96df964cfaac780d94/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/d26ad27237ab3b96df964cfaac780d94/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/6630050/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 463824335,
          title: 'The Land Is Inhospitable and So Are We',
          cover: 'https://api.deezer.com/album/463824335/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/db69f7d3ea280f1155256705735648cd/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/db69f7d3ea280f1155256705735648cd/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/db69f7d3ea280f1155256705735648cd/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/db69f7d3ea280f1155256705735648cd/1000x1000-000000-80-0-0.jpg',
          md5_image: 'db69f7d3ea280f1155256705735648cd',
          tracklist: 'https://api.deezer.com/album/463824335/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2440763205,
        title: 'get him back!',
        title_short: 'get him back!',
        title_version: '',
        link: 'https://www.deezer.com/track/2440763205',
        duration: 211,
        rank: 853116,
        explicit_lyrics: true,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-b.dzcdn.net/stream/c-ba38e12f6d98eac60fbe21cb82f2de6a-2.mp3',
        md5_image: '4bb79214365c0049e031f5e2caae4752',
        position: 8,
        artist: {
          id: 11152580,
          name: 'Olivia Rodrigo',
          link: 'https://www.deezer.com/artist/11152580',
          picture: 'https://api.deezer.com/artist/11152580/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/245d3346a03388562d56ab5a63f6549d/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/245d3346a03388562d56ab5a63f6549d/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/245d3346a03388562d56ab5a63f6549d/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/245d3346a03388562d56ab5a63f6549d/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/11152580/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 484372295,
          title: 'GUTS',
          cover: 'https://api.deezer.com/album/484372295/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/4bb79214365c0049e031f5e2caae4752/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/4bb79214365c0049e031f5e2caae4752/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/4bb79214365c0049e031f5e2caae4752/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/4bb79214365c0049e031f5e2caae4752/1000x1000-000000-80-0-0.jpg',
          md5_image: '4bb79214365c0049e031f5e2caae4752',
          tracklist: 'https://api.deezer.com/album/484372295/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 62710442,
        title: 'All I Want for Christmas Is You',
        title_short: 'All I Want for Christmas Is You',
        title_version: '',
        link: 'https://www.deezer.com/track/62710442',
        duration: 241,
        rank: 947822,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-f.dzcdn.net/stream/c-f68c9c9dbb03f99f6b0080c1982cf4d8-5.mp3',
        md5_image: '60d8f7635ead9b3c5e571aec47a8c73e',
        position: 9,
        artist: {
          id: 65,
          name: 'Mariah Carey',
          link: 'https://www.deezer.com/artist/65',
          picture: 'https://api.deezer.com/artist/65/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/be9cdac3dc07bd13a1903b973cc2a8ac/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/be9cdac3dc07bd13a1903b973cc2a8ac/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/be9cdac3dc07bd13a1903b973cc2a8ac/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/be9cdac3dc07bd13a1903b973cc2a8ac/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/65/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 6155526,
          title: 'Merry Christmas',
          cover: 'https://api.deezer.com/album/6155526/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/1000x1000-000000-80-0-0.jpg',
          md5_image: '60d8f7635ead9b3c5e571aec47a8c73e',
          tracklist: 'https://api.deezer.com/album/6155526/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2444176345,
        title: 'greedy',
        title_short: 'greedy',
        title_version: '',
        link: 'https://www.deezer.com/track/2444176345',
        duration: 131,
        rank: 995645,
        explicit_lyrics: true,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
          'https://cdns-preview-d.dzcdn.net/stream/c-d3798b1f541af7a8886af7e8fec035b9-2.mp3',
        md5_image: 'ef25b6bec265332a059879f45d33cd7e',
        position: 10,
        artist: {
          id: 13817211,
          name: 'Tate McRae',
          link: 'https://www.deezer.com/artist/13817211',
          picture: 'https://api.deezer.com/artist/13817211/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/5b635e0690f91f7ba72a25ec37285fc0/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/5b635e0690f91f7ba72a25ec37285fc0/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/5b635e0690f91f7ba72a25ec37285fc0/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/5b635e0690f91f7ba72a25ec37285fc0/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/13817211/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 485235215,
          title: 'greedy',
          cover: 'https://api.deezer.com/album/485235215/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/ef25b6bec265332a059879f45d33cd7e/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/ef25b6bec265332a059879f45d33cd7e/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/ef25b6bec265332a059879f45d33cd7e/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/ef25b6bec265332a059879f45d33cd7e/1000x1000-000000-80-0-0.jpg',
          md5_image: 'ef25b6bec265332a059879f45d33cd7e',
          tracklist: 'https://api.deezer.com/album/485235215/tracks',
          type: 'album',
        },
        type: 'track',
      },
    ],
    total: 10,
  },
  albums: {
    data: [
      {
        id: 530364182,
        title: 'RealG4Life Vol. 4',
        link: 'https://www.deezer.com/album/530364182',
        cover: 'https://api.deezer.com/album/530364182/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/530364182/tracks',
        explicit_lyrics: true,
        position: 2,
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          link: 'https://www.deezer.com/artist/326042',
          picture: 'https://api.deezer.com/artist/326042/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 507193681,
        title: 'Tie Rise & Cwas feat King Donna - Ithuba (feat. King Donna)',
        link: 'https://www.deezer.com/album/507193681',
        cover: 'https://api.deezer.com/album/507193681/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/7c6a6af7aae866c7aa100a0f8a64971c/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/7c6a6af7aae866c7aa100a0f8a64971c/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/7c6a6af7aae866c7aa100a0f8a64971c/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/7c6a6af7aae866c7aa100a0f8a64971c/1000x1000-000000-80-0-0.jpg',
        md5_image: '7c6a6af7aae866c7aa100a0f8a64971c',
        record_type: 'ep',
        tracklist: 'https://api.deezer.com/album/507193681/tracks',
        explicit_lyrics: true,
        position: 3,
        artist: {
          id: 222074685,
          name: 'Tie Rise & Cwas',
          link: 'https://www.deezer.com/artist/222074685',
          picture: 'https://api.deezer.com/artist/222074685/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/7c6a6af7aae866c7aa100a0f8a64971c/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/7c6a6af7aae866c7aa100a0f8a64971c/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/7c6a6af7aae866c7aa100a0f8a64971c/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/7c6a6af7aae866c7aa100a0f8a64971c/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/222074685/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 493258281,
        title: '$AD BOYZ 4 LIFE II',
        link: 'https://www.deezer.com/album/493258281',
        cover: 'https://api.deezer.com/album/493258281/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/0eb82206c61cd4267d64f47b5a2e85cd/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/0eb82206c61cd4267d64f47b5a2e85cd/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/0eb82206c61cd4267d64f47b5a2e85cd/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/0eb82206c61cd4267d64f47b5a2e85cd/1000x1000-000000-80-0-0.jpg',
        md5_image: '0eb82206c61cd4267d64f47b5a2e85cd',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/493258281/tracks',
        explicit_lyrics: true,
        position: 4,
        artist: {
          id: 54047652,
          name: 'Junior H',
          link: 'https://www.deezer.com/artist/54047652',
          picture: 'https://api.deezer.com/artist/54047652/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/5eeb46b149c675fe19ccc676c455f2d4/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/5eeb46b149c675fe19ccc676c455f2d4/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/5eeb46b149c675fe19ccc676c455f2d4/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/5eeb46b149c675fe19ccc676c455f2d4/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/54047652/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 80251,
        title: '9.0 Live',
        link: 'https://www.deezer.com/album/80251',
        cover: 'https://api.deezer.com/album/80251/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/e9f51f3751d49019726fe229caf51650/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/e9f51f3751d49019726fe229caf51650/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/e9f51f3751d49019726fe229caf51650/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/e9f51f3751d49019726fe229caf51650/1000x1000-000000-80-0-0.jpg',
        md5_image: 'e9f51f3751d49019726fe229caf51650',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/80251/tracks',
        explicit_lyrics: true,
        position: 5,
        artist: {
          id: 117,
          name: 'Slipknot',
          link: 'https://www.deezer.com/artist/117',
          picture: 'https://api.deezer.com/artist/117/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/7a66231b65ed2a4040991bf5730c4826/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/7a66231b65ed2a4040991bf5730c4826/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/7a66231b65ed2a4040991bf5730c4826/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/7a66231b65ed2a4040991bf5730c4826/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/117/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 525190472,
        title: 'Corazones en Almíbar',
        link: 'https://www.deezer.com/album/525190472',
        cover: 'https://api.deezer.com/album/525190472/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/27ef1179bf26dfa0e76a0cac53389b9e/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/27ef1179bf26dfa0e76a0cac53389b9e/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/27ef1179bf26dfa0e76a0cac53389b9e/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/27ef1179bf26dfa0e76a0cac53389b9e/1000x1000-000000-80-0-0.jpg',
        md5_image: '27ef1179bf26dfa0e76a0cac53389b9e',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/525190472/tracks',
        explicit_lyrics: false,
        position: 6,
        artist: {
          id: 6052318,
          name: 'Adán Cruz',
          link: 'https://www.deezer.com/artist/6052318',
          picture: 'https://api.deezer.com/artist/6052318/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/93cef2a7e6ea341be60e3bde18568020/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/93cef2a7e6ea341be60e3bde18568020/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/93cef2a7e6ea341be60e3bde18568020/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/93cef2a7e6ea341be60e3bde18568020/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/6052318/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 70122642,
        title: 'Brutos de Verdade',
        link: 'https://www.deezer.com/album/70122642',
        cover: 'https://api.deezer.com/album/70122642/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/5702cc740a41172358ef5e8488a67383/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/5702cc740a41172358ef5e8488a67383/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/5702cc740a41172358ef5e8488a67383/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/5702cc740a41172358ef5e8488a67383/1000x1000-000000-80-0-0.jpg',
        md5_image: '5702cc740a41172358ef5e8488a67383',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/70122642/tracks',
        explicit_lyrics: false,
        position: 7,
        artist: {
          id: 464921,
          name: 'Jads & Jadson',
          link: 'https://www.deezer.com/artist/464921',
          picture: 'https://api.deezer.com/artist/464921/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/953609fff079a1493e0f33ea905a891c/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/953609fff079a1493e0f33ea905a891c/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/953609fff079a1493e0f33ea905a891c/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/953609fff079a1493e0f33ea905a891c/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/464921/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 176411,
        title: 'Só Modão (Ao Vivo)',
        link: 'https://www.deezer.com/album/176411',
        cover: 'https://api.deezer.com/album/176411/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/8a138c59984d9ecd55dafa3d503344c0/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/8a138c59984d9ecd55dafa3d503344c0/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/8a138c59984d9ecd55dafa3d503344c0/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/8a138c59984d9ecd55dafa3d503344c0/1000x1000-000000-80-0-0.jpg',
        md5_image: '8a138c59984d9ecd55dafa3d503344c0',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/176411/tracks',
        explicit_lyrics: false,
        position: 8,
        artist: {
          id: 243327,
          name: 'Di Paullo & Paulino',
          link: 'https://www.deezer.com/artist/243327',
          picture: 'https://api.deezer.com/artist/243327/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/5c1df48f834f52e9d7fb0a930963a766/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/5c1df48f834f52e9d7fb0a930963a766/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/5c1df48f834f52e9d7fb0a930963a766/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/5c1df48f834f52e9d7fb0a930963a766/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/243327/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 529794662,
        title: 'the 2024',
        link: 'https://www.deezer.com/album/529794662',
        cover: 'https://api.deezer.com/album/529794662/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/dcec3945bcaebd04188edd82bed6ada7/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/dcec3945bcaebd04188edd82bed6ada7/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/dcec3945bcaebd04188edd82bed6ada7/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/dcec3945bcaebd04188edd82bed6ada7/1000x1000-000000-80-0-0.jpg',
        md5_image: 'dcec3945bcaebd04188edd82bed6ada7',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/529794662/tracks',
        explicit_lyrics: false,
        position: 9,
        artist: {
          id: 244888072,
          name: 'PUNK UASD',
          link: 'https://www.deezer.com/artist/244888072',
          picture: 'https://api.deezer.com/artist/244888072/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist//56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist//250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist//1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/244888072/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
      {
        id: 105614472,
        title: 'Undertow',
        link: 'https://www.deezer.com/album/105614472',
        cover: 'https://api.deezer.com/album/105614472/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/83540df6a4dc5286dc04e5fe67b73b8c/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/83540df6a4dc5286dc04e5fe67b73b8c/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/83540df6a4dc5286dc04e5fe67b73b8c/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/83540df6a4dc5286dc04e5fe67b73b8c/1000x1000-000000-80-0-0.jpg',
        md5_image: '83540df6a4dc5286dc04e5fe67b73b8c',
        record_type: 'album',
        tracklist: 'https://api.deezer.com/album/105614472/tracks',
        explicit_lyrics: true,
        position: 10,
        artist: {
          id: 689,
          name: 'TOOL',
          link: 'https://www.deezer.com/artist/689',
          picture: 'https://api.deezer.com/artist/689/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/4b44a5f85c132844a16417dfa361c3b3/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/4b44a5f85c132844a16417dfa361c3b3/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/4b44a5f85c132844a16417dfa361c3b3/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/4b44a5f85c132844a16417dfa361c3b3/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/689/top?limit=50',
          type: 'artist',
        },
        type: 'album',
      },
    ],
    total: 9,
  },
  artists: {
    data: [
      {
        id: 230,
        name: 'Kanye West',
        link: 'https://www.deezer.com/artist/230',
        picture: 'https://api.deezer.com/artist/230/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/230/top?limit=50',
        position: 1,
        type: 'artist',
      },
      {
        id: 10583405,
        name: 'Bad Bunny',
        link: 'https://www.deezer.com/artist/10583405',
        picture: 'https://api.deezer.com/artist/10583405/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/cdfd6ff5cfb909593e152ded3557132d/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/cdfd6ff5cfb909593e152ded3557132d/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/cdfd6ff5cfb909593e152ded3557132d/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/cdfd6ff5cfb909593e152ded3557132d/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/10583405/top?limit=50',
        position: 2,
        type: 'artist',
      },
      {
        id: 4860761,
        name: 'J Balvin',
        link: 'https://www.deezer.com/artist/4860761',
        picture: 'https://api.deezer.com/artist/4860761/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/709299d977b699056bedcf98661cb9cc/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/709299d977b699056bedcf98661cb9cc/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/709299d977b699056bedcf98661cb9cc/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/709299d977b699056bedcf98661cb9cc/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/4860761/top?limit=50',
        position: 3,
        type: 'artist',
      },
      {
        id: 4050205,
        name: 'The Weeknd',
        link: 'https://www.deezer.com/artist/4050205',
        picture: 'https://api.deezer.com/artist/4050205/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/4050205/top?limit=50',
        position: 4,
        type: 'artist',
      },
      {
        id: 246791,
        name: 'Drake',
        link: 'https://www.deezer.com/artist/246791',
        picture: 'https://api.deezer.com/artist/246791/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/246791/top?limit=50',
        position: 5,
        type: 'artist',
      },
      {
        id: 5578942,
        name: 'Doja Cat',
        link: 'https://www.deezer.com/artist/5578942',
        picture: 'https://api.deezer.com/artist/5578942/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/383baea8d4ef2c9a74087f84dc1c8a1e/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/5578942/top?limit=50',
        position: 6,
        type: 'artist',
      },
      {
        id: 13,
        name: 'Eminem',
        link: 'https://www.deezer.com/artist/13',
        picture: 'https://api.deezer.com/artist/13/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
        position: 7,
        type: 'artist',
      },
      {
        id: 288166,
        name: 'Justin Bieber',
        link: 'https://www.deezer.com/artist/288166',
        picture: 'https://api.deezer.com/artist/288166/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/288166/top?limit=50',
        position: 8,
        type: 'artist',
      },
      {
        id: 11289472,
        name: 'Rauw Alejandro',
        link: 'https://www.deezer.com/artist/11289472',
        picture: 'https://api.deezer.com/artist/11289472/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/56aff0f72679145157d86c21ff184eb7/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/56aff0f72679145157d86c21ff184eb7/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/56aff0f72679145157d86c21ff184eb7/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/56aff0f72679145157d86c21ff184eb7/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/11289472/top?limit=50',
        position: 9,
        type: 'artist',
      },
      {
        id: 398521,
        name: 'Lil Baby',
        link: 'https://www.deezer.com/artist/398521',
        picture: 'https://api.deezer.com/artist/398521/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/52b6dcb22b38f051680d8ca20901537c/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/52b6dcb22b38f051680d8ca20901537c/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/52b6dcb22b38f051680d8ca20901537c/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/52b6dcb22b38f051680d8ca20901537c/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/398521/top?limit=50',
        position: 10,
        type: 'artist',
      },
    ],
    total: 10,
  },
  playlists: {
    data: [
      {
        id: 1479458365,
        title: 'Happy Hits',
        public: true,
        nb_tracks: 80,
        link: 'https://www.deezer.com/playlist/1479458365',
        picture: 'https://api.deezer.com/playlist/1479458365/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/7ff14811fbb9922a17a766e5a8fb784e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/7ff14811fbb9922a17a766e5a8fb784e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/7ff14811fbb9922a17a766e5a8fb784e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/7ff14811fbb9922a17a766e5a8fb784e/1000x1000-000000-80-0-0.jpg',
        checksum: '67cc8811d5d9be93850a86584face8f1',
        tracklist: 'https://api.deezer.com/playlist/1479458365/tracks',
        creation_date: '2015-12-02 05:41:53',
        md5_image: '7ff14811fbb9922a17a766e5a8fb784e',
        picture_type: 'playlist',
        user: {
          id: 846571671,
          name: 'Alice - Deezer Moods Editor',
          tracklist: 'https://api.deezer.com/user/846571671/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 3338949242,
        title: 'chill lofi',
        public: true,
        nb_tracks: 80,
        link: 'https://www.deezer.com/playlist/3338949242',
        picture: 'https://api.deezer.com/playlist/3338949242/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/b651e0a0dce725a5fb017d241d82ecda/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/b651e0a0dce725a5fb017d241d82ecda/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/b651e0a0dce725a5fb017d241d82ecda/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/b651e0a0dce725a5fb017d241d82ecda/1000x1000-000000-80-0-0.jpg',
        checksum: '8bb0b1abfe0a38b0935d12ddff261e27',
        tracklist: 'https://api.deezer.com/playlist/3338949242/tracks',
        creation_date: '2017-07-08 02:46:07',
        md5_image: 'b651e0a0dce725a5fb017d241d82ecda',
        picture_type: 'playlist',
        user: {
          id: 846571671,
          name: 'Alice - Deezer Moods Editor',
          tracklist: 'https://api.deezer.com/user/846571671/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 1996494362,
        title: 'Rap Bangers',
        public: true,
        nb_tracks: 50,
        link: 'https://www.deezer.com/playlist/1996494362',
        picture: 'https://api.deezer.com/playlist/1996494362/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/5c1d71aa74c8ee4c5977de7dac3a2170/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/5c1d71aa74c8ee4c5977de7dac3a2170/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/5c1d71aa74c8ee4c5977de7dac3a2170/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/5c1d71aa74c8ee4c5977de7dac3a2170/1000x1000-000000-80-0-0.jpg',
        checksum: '6cd13912161b9f1d8920f3de08a7ceec',
        tracklist: 'https://api.deezer.com/playlist/1996494362/tracks',
        creation_date: '2016-07-05 10:34:42',
        md5_image: '5c1d71aa74c8ee4c5977de7dac3a2170',
        picture_type: 'playlist',
        user: {
          id: 917475151,
          name: 'Ayoub - Deezer Rap Editor',
          tracklist: 'https://api.deezer.com/user/917475151/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 1130102843,
        title: 'Country Hits',
        public: true,
        nb_tracks: 63,
        link: 'https://www.deezer.com/playlist/1130102843',
        picture: 'https://api.deezer.com/playlist/1130102843/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/8b80037cdc4856b0bd6f6e64b2bc82a8/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/8b80037cdc4856b0bd6f6e64b2bc82a8/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/8b80037cdc4856b0bd6f6e64b2bc82a8/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/8b80037cdc4856b0bd6f6e64b2bc82a8/1000x1000-000000-80-0-0.jpg',
        checksum: '51a8beb4b9dbaf226b61d01d5e325f7d',
        tracklist: 'https://api.deezer.com/playlist/1130102843/tracks',
        creation_date: '2015-01-26 12:01:41',
        md5_image: '8b80037cdc4856b0bd6f6e64b2bc82a8',
        picture_type: 'playlist',
        user: {
          id: 4294642822,
          name: 'Deezer Country Editor',
          tracklist: 'https://api.deezer.com/user/4294642822/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 1787912442,
        title: 'Piano Meditation',
        public: true,
        nb_tracks: 199,
        link: 'https://www.deezer.com/playlist/1787912442',
        picture: 'https://api.deezer.com/playlist/1787912442/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/c1a0a5a691fb4dea91f7c05b2d8807c5/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/c1a0a5a691fb4dea91f7c05b2d8807c5/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/c1a0a5a691fb4dea91f7c05b2d8807c5/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/c1a0a5a691fb4dea91f7c05b2d8807c5/1000x1000-000000-80-0-0.jpg',
        checksum: '32be3aa50e4db9f8ecd048eda266568c',
        tracklist: 'https://api.deezer.com/playlist/1787912442/tracks',
        creation_date: '2016-05-03 12:41:06',
        md5_image: 'c1a0a5a691fb4dea91f7c05b2d8807c5',
        picture_type: 'playlist',
        user: {
          id: 353978015,
          name: 'Yannick - Deezer Classical Editor',
          tracklist: 'https://api.deezer.com/user/353978015/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 7062175504,
        title: 'Rain Sounds - Sleep Sounds - White Noise',
        public: true,
        nb_tracks: 382,
        link: 'https://www.deezer.com/playlist/7062175504',
        picture: 'https://api.deezer.com/playlist/7062175504/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/e8a4232529cbb48663d720bf8621ebc2/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/e8a4232529cbb48663d720bf8621ebc2/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/e8a4232529cbb48663d720bf8621ebc2/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/e8a4232529cbb48663d720bf8621ebc2/1000x1000-000000-80-0-0.jpg',
        checksum: 'ad16d1024ba51c2b2de5f5774f6255b7',
        tracklist: 'https://api.deezer.com/playlist/7062175504/tracks',
        creation_date: '2020-01-03 01:53:41',
        md5_image: 'e8a4232529cbb48663d720bf8621ebc2',
        picture_type: 'playlist',
        user: {
          id: 1721738026,
          name: 'edmsauce',
          tracklist: 'https://api.deezer.com/user/1721738026/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 4590807924,
        title: 'Calm Piano',
        public: true,
        nb_tracks: 200,
        link: 'https://www.deezer.com/playlist/4590807924',
        picture: 'https://api.deezer.com/playlist/4590807924/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/e5fefebdb770b0eaee991c87f2a0ecda/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/e5fefebdb770b0eaee991c87f2a0ecda/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/e5fefebdb770b0eaee991c87f2a0ecda/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/e5fefebdb770b0eaee991c87f2a0ecda/1000x1000-000000-80-0-0.jpg',
        checksum: '8f65aeae5d54b209c6afd960d7668299',
        tracklist: 'https://api.deezer.com/playlist/4590807924/tracks',
        creation_date: '2018-06-21 05:28:30',
        md5_image: 'e5fefebdb770b0eaee991c87f2a0ecda',
        picture_type: 'playlist',
        user: {
          id: 353978015,
          name: 'Yannick - Deezer Classical Editor',
          tracklist: 'https://api.deezer.com/user/353978015/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 1964085082,
        title: 'Feel Good Pop',
        public: true,
        nb_tracks: 60,
        link: 'https://www.deezer.com/playlist/1964085082',
        picture: 'https://api.deezer.com/playlist/1964085082/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/17ff92775df34f33ec4d4b26186467e3/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/17ff92775df34f33ec4d4b26186467e3/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/17ff92775df34f33ec4d4b26186467e3/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/17ff92775df34f33ec4d4b26186467e3/1000x1000-000000-80-0-0.jpg',
        checksum: 'bac62998d146b550234200723e252c82',
        tracklist: 'https://api.deezer.com/playlist/1964085082/tracks',
        creation_date: '2016-06-25 08:57:19',
        md5_image: '17ff92775df34f33ec4d4b26186467e3',
        picture_type: 'playlist',
        user: {
          id: 753546365,
          name: 'Fábio - Deezer Pop Editor',
          tracklist: 'https://api.deezer.com/user/753546365/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 1273315391,
        title: 'Reggaeton Hits',
        public: true,
        nb_tracks: 56,
        link: 'https://www.deezer.com/playlist/1273315391',
        picture: 'https://api.deezer.com/playlist/1273315391/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/fae24a64e9bc0f4923966e84b24a6cab/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/fae24a64e9bc0f4923966e84b24a6cab/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/fae24a64e9bc0f4923966e84b24a6cab/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/fae24a64e9bc0f4923966e84b24a6cab/1000x1000-000000-80-0-0.jpg',
        checksum: '69de7d7e9afd97d9becff60bf6b8cd40',
        tracklist: 'https://api.deezer.com/playlist/1273315391/tracks',
        creation_date: '2015-06-17 05:34:25',
        md5_image: 'fae24a64e9bc0f4923966e84b24a6cab',
        picture_type: 'playlist',
        user: {
          id: 3115986664,
          name: 'Camojada - Deezer Editor',
          tracklist: 'https://api.deezer.com/user/3115986664/flow',
          type: 'user',
        },
        type: 'playlist',
      },
      {
        id: 789123393,
        title: 'Reggaeton Classics',
        public: true,
        nb_tracks: 50,
        link: 'https://www.deezer.com/playlist/789123393',
        picture: 'https://api.deezer.com/playlist/789123393/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/playlist/84a5fd74dbe51769931009b1e83d9a03/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/playlist/84a5fd74dbe51769931009b1e83d9a03/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/playlist/84a5fd74dbe51769931009b1e83d9a03/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/playlist/84a5fd74dbe51769931009b1e83d9a03/1000x1000-000000-80-0-0.jpg',
        checksum: '8e7fd52bc05c13ce1d56964278ce0c67',
        tracklist: 'https://api.deezer.com/playlist/789123393/tracks',
        creation_date: '2014-02-18 12:30:16',
        md5_image: '84a5fd74dbe51769931009b1e83d9a03',
        picture_type: 'playlist',
        user: {
          id: 302057723,
          name: 'Deezer Editor Americas',
          tracklist: 'https://api.deezer.com/user/302057723/flow',
          type: 'user',
        },
        type: 'playlist',
      },
    ],
    total: 10,
  },
  podcasts: {
    data: [
      {
        id: 585702,
        title: 'Dateline NBC',
        description:
          'Current and classic episodes, featuring compelling true-crime mysteries, powerful documentaries and in-depth investigations.',
        available: true,
        fans: 5579,
        link: 'https://www.deezer.com/show/585702',
        share:
          'https://www.deezer.com/show/585702?utm_source=deezer&utm_content=show-585702&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/01af6d2e55b243b11a90a33cd41d3c2f/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/01af6d2e55b243b11a90a33cd41d3c2f/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/01af6d2e55b243b11a90a33cd41d3c2f/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/01af6d2e55b243b11a90a33cd41d3c2f/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/01af6d2e55b243b11a90a33cd41d3c2f/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 3457812,
        title: 'The Alex Jones Show - Infowars.com',
        description:
          "Because there's a war on for your mind; broadcaster, filmmaker and news analyst Alex Jones brings you an in-depth look at the news between the day's headlines.",
        available: true,
        fans: 870,
        link: 'https://www.deezer.com/show/3457812',
        share:
          'https://www.deezer.com/show/3457812?utm_source=deezer&utm_content=show-3457812&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/8aacd1e8a84c5f5190e762f273404923/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/8aacd1e8a84c5f5190e762f273404923/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/8aacd1e8a84c5f5190e762f273404923/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/8aacd1e8a84c5f5190e762f273404923/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/8aacd1e8a84c5f5190e762f273404923/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 679102,
        title: 'Crime Junkie',
        description:
          'If you can never get enough true crime... Congratulations, you’ve found your people.',
        available: true,
        fans: 8462,
        link: 'https://www.deezer.com/show/679102',
        share:
          'https://www.deezer.com/show/679102?utm_source=deezer&utm_content=show-679102&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/76eeb5b96235e1e944e9456632dd1647/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/76eeb5b96235e1e944e9456632dd1647/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/76eeb5b96235e1e944e9456632dd1647/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/76eeb5b96235e1e944e9456632dd1647/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/76eeb5b96235e1e944e9456632dd1647/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 2962422,
        title: '48 Hours',
        description:
          '“48 Hours” uncovers the narrative behind crime and justice cases that have left a lasting mark on society. Award-winning CBS News correspondents thoughtfully examine the complexities of each crime by transporting you to the heart of the investigation through key evidence and gripping interviews with critical figures from the case. The unmatched reporting has made a tangible difference in countless lives, leading to the exoneration of wrongly convicted individuals and the reopening — and resolution — of previously closed cold cases.Listen to a new “48 Hours” episode every Sunday and then go deeper into the case on Tuesdays with the immersive “Post Mortem” series — producers and correspondents join host Anne-Marie Green to discuss key evidence, dead ends, mishaps, and stranger-than-fiction twists they faced in the field. Plus, every Thursday, we’ll revisit a classic “48 Hours” episode. Watch “48 Hours” Saturdays 10/9c on CBS and Paramount+.',
        available: true,
        fans: 394,
        link: 'https://www.deezer.com/show/2962422',
        share:
          'https://www.deezer.com/show/2962422?utm_source=deezer&utm_content=show-2962422&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/401fda5250469f18e33eb29030cdf0e7/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/401fda5250469f18e33eb29030cdf0e7/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/401fda5250469f18e33eb29030cdf0e7/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/401fda5250469f18e33eb29030cdf0e7/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/401fda5250469f18e33eb29030cdf0e7/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 2665202,
        title: 'Relatos de la Noche',
        description:
          'En la tradición de los clásicos de la radio, aquí se cuentan las historias, relatos y leyendas que habitan las calles de México e Iberoamérica.',
        available: true,
        fans: 19784,
        link: 'https://www.deezer.com/show/2665202',
        share:
          'https://www.deezer.com/show/2665202?utm_source=deezer&utm_content=show-2665202&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/69b915bf759971f3b50fdaba65cd6822/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/69b915bf759971f3b50fdaba65cd6822/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/69b915bf759971f3b50fdaba65cd6822/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/69b915bf759971f3b50fdaba65cd6822/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/69b915bf759971f3b50fdaba65cd6822/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 2409432,
        title: 'DOSIS DIARIA ROKA',
        description:
          'Mision  Buscamos rescatar los valores de la sociedad, especialmente de la juventud enfocándonos en ofrecer una palabra clara, reconfortante y constante que pueda servir de apoyo para restaurar las heridas del Corazón de quienes han sufrido experiencias o vivencias que han marcado sus vidas; siempre exaltando el amor y el perdón de Dios que dió a través de su hijo Jesucristo.  ¿En que nos fundamentamos?  La gran comisión, ir a todo el mundo y predicar el evangelio a toda persona. Marcos 16:15 En la Oracion como respuesta a toda necesidad de cada oyente por la palabra que nos entrego. Hechos 10:38 Creemos que hemos sido restaurados para restaurar. Jeremias 33:6 Nuestros valores  Vida en Dios sentido de responsabilidad amor propio y por el prójimo proclamar la verdad ¿Para quiénes? Roka Stereo esta dirigida para hombres y mujeres que tengan necesidad de Dios y que tengan un corazón dispuesto para oír el mensaje diario que Dios tiene para ellos.  Apoya nuestro ministerio  Dios esta cambiando y sanando vidas a través de de esta emisora, agradecemos tu apoyo y el sentir que tienes en tu corazón para que este Ministerio nunca se detenga. www.rokastereo.com',
        available: true,
        fans: 2577,
        link: 'https://www.deezer.com/show/2409432',
        share:
          'https://www.deezer.com/show/2409432?utm_source=deezer&utm_content=show-2409432&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/e2bc69205c27ec0aab9a645181b1ca3e/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/e2bc69205c27ec0aab9a645181b1ca3e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/e2bc69205c27ec0aab9a645181b1ca3e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/e2bc69205c27ec0aab9a645181b1ca3e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/e2bc69205c27ec0aab9a645181b1ca3e/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 52913,
        title: 'The Daily',
        description:
          'This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro and Sabrina Tavernise. Twenty minutes a day, five days a week, ready by 6 a.m.  Listen to this podcast in New York Times Audio, our new iOS app for news subscribers. Download now at nytimes.com/audioapp',
        available: true,
        fans: 16773,
        link: 'https://www.deezer.com/show/52913',
        share:
          'https://www.deezer.com/show/52913?utm_source=deezer&utm_content=show-52913&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/37673f1e91d14e704bac009855bc4586/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/37673f1e91d14e704bac009855bc4586/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/37673f1e91d14e704bac009855bc4586/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/37673f1e91d14e704bac009855bc4586/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/37673f1e91d14e704bac009855bc4586/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 738482,
        title: 'The Dan Bongino Show',
        description:
          'He’s a former Secret Service Agent, former NYPD officer, and New York Times best-selling author. Join Dan Bongino each weekday as he tackles the hottest political issues, debunking both liberal and Republican establishment rhetoric.',
        available: true,
        fans: 676,
        link: 'https://www.deezer.com/show/738482',
        share:
          'https://www.deezer.com/show/738482?utm_source=deezer&utm_content=show-738482&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/551dd50c76e1f8a9528e5d93d875e09e/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/551dd50c76e1f8a9528e5d93d875e09e/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/551dd50c76e1f8a9528e5d93d875e09e/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/551dd50c76e1f8a9528e5d93d875e09e/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/551dd50c76e1f8a9528e5d93d875e09e/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 2510892,
        title: 'Weekly Motivation by Ben Lionel Scott',
        description:
          "Here you'll find weekly motivation from some of the most successful and high achieving people in the world to help encourage you through your journey in life. Join Video Editor/Producer Ben Lionel Scott as he shares motivating messages from the most brilliant minds and high-performing people. To get access and download all audio and video versions from the show, plus exclusive content, go to benlionelscott.com/subscribe",
        available: true,
        fans: 6712,
        link: 'https://www.deezer.com/show/2510892',
        share:
          'https://www.deezer.com/show/2510892?utm_source=deezer&utm_content=show-2510892&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/a4dcdbeceea72148cf7b897527c91539/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/a4dcdbeceea72148cf7b897527c91539/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/a4dcdbeceea72148cf7b897527c91539/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/a4dcdbeceea72148cf7b897527c91539/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/a4dcdbeceea72148cf7b897527c91539/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
      {
        id: 1132872,
        title: 'CHRONIQUES CRIMINELLES',
        description:
          'Disparitions inquiétantes, crimes passionnels,  ou machinations diaboliques… Découvrez les secrets des faits-divers les plus marquants. Tueurs en série, amants démoniaques, tous pensaient avoir commis le crime parfait. Mais tous, sont aujourd’hui derrière les barreaux. Qui sont ces meurtriers ? Et comment les policiers sont-ils parvenus à les confondre ? La découverte de la vérité ne tient parfois qu’à un fil… Grâce aux témoignages de tous les protagonistes, des enquêteurs aux familles des victimes, Jacques Pradel vous fait revivre ces enquêtes incroyables, riches en rebondissements… et en émotions… Retrouvez le Podcast Chroniques Criminelles, et plongez au cœur des  affaires les plus étonnantes de l’histoire judiciaire. Un podcast du Groupe TF1.         ',
        available: true,
        fans: 22891,
        link: 'https://www.deezer.com/show/1132872',
        share:
          'https://www.deezer.com/show/1132872?utm_source=deezer&utm_content=show-1132872&utm_term=0_1704682651&utm_medium=web',
        picture:
          'https://e-cdns-images.dzcdn.net/images/talk/6cc228c3d95fc00036092846333e668c/180x180-000000-80-0-0.jpg',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/talk/6cc228c3d95fc00036092846333e668c/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/talk/6cc228c3d95fc00036092846333e668c/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/talk/6cc228c3d95fc00036092846333e668c/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/talk/6cc228c3d95fc00036092846333e668c/1000x1000-000000-80-0-0.jpg',
        type: 'podcast',
      },
    ],
    total: 10,
  },
};

export const getTrackResult: TrackInfo = {
  id: 2565567572,
  readable: true,
  title: 'MY HOUSE',
  title_short: 'MY HOUSE',
  title_version: '',
  isrc: 'USSM12308805',
  link: 'https://www.deezer.com/track/2565567572',
  share:
    'https://www.deezer.com/track/2565567572?utm_source=deezer&utm_content=track-2565567572&utm_term=0_1704685286&utm_medium=web',
  duration: 262,
  track_position: 1,
  disk_number: 1,
  rank: 815111,
  release_date: '2023-12-01',
  explicit_lyrics: true,
  explicit_content_lyrics: 1,
  explicit_content_cover: 2,
  preview:
    'https://cdns-preview-a.dzcdn.net/stream/c-ae2652ad5e506ea12dc88f337eaba410-1.mp3',
  bpm: 0,
  gain: -8.8,
  available_countries: [
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AO',
    'AR',
    'AT',
    'AU',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BT',
    'BW',
    'BY',
    'CA',
    'CD',
    'CF',
    'CG',
    'CH',
    'CI',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CU',
    'CV',
    'CW',
    'CY',
    'CZ',
    'DE',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GH',
    'GM',
    'GN',
    'GQ',
    'GR',
    'GT',
    'GW',
    'HK',
    'HN',
    'HR',
    'HU',
    'ID',
    'IE',
    'IL',
    'IN',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MD',
    'ME',
    'MG',
    'MH',
    'MK',
    'ML',
    'MN',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NE',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PG',
    'PH',
    'PK',
    'PL',
    'PN',
    'PS',
    'PT',
    'PW',
    'PY',
    'QA',
    'RO',
    'RS',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SI',
    'SK',
    'SL',
    'SN',
    'SO',
    'SS',
    'ST',
    'SV',
    'SX',
    'SZ',
    'TC',
    'TD',
    'TG',
    'TH',
    'TJ',
    'TM',
    'TN',
    'TO',
    'TR',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'US',
    'UY',
    'UZ',
    'VC',
    'VE',
    'VG',
    'VN',
    'VU',
    'WS',
    'YE',
    'ZA',
    'ZM',
    'ZW',
  ],
  contributors: [
    {
      id: 145,
      name: 'Beyoncé',
      link: 'https://www.deezer.com/artist/145',
      share:
        'https://www.deezer.com/artist/145?utm_source=deezer&utm_content=artist-145&utm_term=0_1704685286&utm_medium=web',
      picture: 'https://api.deezer.com/artist/145/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/1000x1000-000000-80-0-0.jpg',
      radio: true,
      tracklist: 'https://api.deezer.com/artist/145/top?limit=50',
      type: 'artist',
      role: 'Main',
    },
  ],
  md5_image: '08824c6d942a428c1999cc91b29953c2',
  artist: {
    id: 145,
    name: 'Beyoncé',
    link: 'https://www.deezer.com/artist/145',
    share:
      'https://www.deezer.com/artist/145?utm_source=deezer&utm_content=artist-145&utm_term=0_1704685286&utm_medium=web',
    picture: 'https://api.deezer.com/artist/145/image',
    picture_small:
      'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/56x56-000000-80-0-0.jpg',
    picture_medium:
      'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/250x250-000000-80-0-0.jpg',
    picture_big:
      'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/500x500-000000-80-0-0.jpg',
    picture_xl:
      'https://e-cdns-images.dzcdn.net/images/artist/2de869b50d9f5cf7f1a673d0b736c4a0/1000x1000-000000-80-0-0.jpg',
    radio: true,
    tracklist: 'https://api.deezer.com/artist/145/top?limit=50',
    type: 'artist',
  },
  album: {
    id: 518544282,
    title: 'MY HOUSE',
    link: 'https://www.deezer.com/album/518544282',
    cover: 'https://api.deezer.com/album/518544282/image',
    cover_small:
      'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/56x56-000000-80-0-0.jpg',
    cover_medium:
      'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/250x250-000000-80-0-0.jpg',
    cover_big:
      'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/500x500-000000-80-0-0.jpg',
    cover_xl:
      'https://e-cdns-images.dzcdn.net/images/cover/08824c6d942a428c1999cc91b29953c2/1000x1000-000000-80-0-0.jpg',
    md5_image: '08824c6d942a428c1999cc91b29953c2',
    release_date: '2023-12-01',
    tracklist: 'https://api.deezer.com/album/518544282/tracks',
    type: 'album',
  },
  type: 'track',
};

export const getAlbumResult: AlbumInfo = {
  id: 530364182,
  title: 'RealG4Life Vol. 4',
  upc: '197190794793',
  link: 'https://www.deezer.com/album/530364182',
  share:
    'https://www.deezer.com/album/530364182?utm_source=deezer&utm_content=album-530364182&utm_term=0_1704685679&utm_medium=web',
  cover: 'https://api.deezer.com/album/530364182/image',
  cover_small:
    'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
  cover_medium:
    'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
  cover_big:
    'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
  cover_xl:
    'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
  md5_image: '9b9a99746919c4373ff74d0c4c641d46',
  genre_id: 197,
  genres: {
    data: [
      {
        id: 197,
        name: 'Latin Music',
        picture: 'https://api.deezer.com/genre/197/image',
        type: 'genre',
      },
    ],
  },
  label: 'Rimas Entertainment LLC',
  nb_tracks: 21,
  duration: 4081,
  fans: 555,
  release_date: '2024-01-05',
  record_type: 'album',
  available: true,
  tracklist: 'https://api.deezer.com/album/530364182/tracks',
  explicit_lyrics: true,
  explicit_content_lyrics: 4,
  explicit_content_cover: 2,
  contributors: [
    {
      id: 326042,
      name: 'Ñengo Flow',
      link: 'https://www.deezer.com/artist/326042',
      share:
        'https://www.deezer.com/artist/326042?utm_source=deezer&utm_content=artist-326042&utm_term=0_1704685679&utm_medium=web',
      picture: 'https://api.deezer.com/artist/326042/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/1000x1000-000000-80-0-0.jpg',
      radio: true,
      tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
      type: 'artist',
      role: 'Main',
    },
  ],
  artist: {
    id: 326042,
    name: 'Ñengo Flow',
    picture: 'https://api.deezer.com/artist/326042/image',
    picture_small:
      'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/56x56-000000-80-0-0.jpg',
    picture_medium:
      'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/250x250-000000-80-0-0.jpg',
    picture_big:
      'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/500x500-000000-80-0-0.jpg',
    picture_xl:
      'https://e-cdns-images.dzcdn.net/images/artist/a46c1cdd1827016f412b89b91ee22f0c/1000x1000-000000-80-0-0.jpg',
    tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
    type: 'artist',
  },
  type: 'album',
  tracks: {
    data: [
      {
        id: 2606151832,
        readable: true,
        title: 'Potencia Mundial',
        title_short: 'Potencia Mundial',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151832',
        duration: 131,
        rank: 565617,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-5.dzcdn.net/stream/c-57331f7ea37435b0cfb63320220149e8-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151842,
        readable: true,
        title: 'Apocalipsis',
        title_short: 'Apocalipsis',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151842',
        duration: 143,
        rank: 600060,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-4.dzcdn.net/stream/c-453223444ebdf6013a638235e3e14da6-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151852,
        readable: true,
        title: "Puesta Pal' Perreo",
        title_short: "Puesta Pal' Perreo",
        title_version: '',
        link: 'https://www.deezer.com/track/2606151852',
        duration: 179,
        rank: 557594,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-0.dzcdn.net/stream/c-088d60488b4a47575832e8bd3ca0f4ea-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151862,
        readable: true,
        title: 'Vaquera',
        title_short: 'Vaquera',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151862',
        duration: 181,
        rank: 566239,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-5.dzcdn.net/stream/c-5adacd5b5d9aacaa50b7a2401f37562e-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151872,
        readable: true,
        title: 'Fast Money',
        title_short: 'Fast Money',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151872',
        duration: 164,
        rank: 532183,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-5.dzcdn.net/stream/c-525ce247fc67b28db39589ae054b974d-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151882,
        readable: true,
        title: 'Ya Sanó El Dolor',
        title_short: 'Ya Sanó El Dolor',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151882',
        duration: 280,
        rank: 552985,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-f.dzcdn.net/stream/c-ff9b38baf5671aef154e885bd0908b66-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151892,
        readable: true,
        title: 'X2',
        title_short: 'X2',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151892',
        duration: 202,
        rank: 567009,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-3.dzcdn.net/stream/c-391efce363e4f21f9f370c86ad209bbb-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151912,
        readable: true,
        title: 'Fuera De Control',
        title_short: 'Fuera De Control',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151912',
        duration: 209,
        rank: 542304,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-c.dzcdn.net/stream/c-c8512102d9028cbefdc854587cd1623b-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151922,
        readable: true,
        title: 'Carbon 15',
        title_short: 'Carbon 15',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151922',
        duration: 241,
        rank: 604168,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-9.dzcdn.net/stream/c-9649fd4b53f7d442cda021655074d591-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151932,
        readable: true,
        title: 'Calentamiento Global',
        title_short: 'Calentamiento Global',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151932',
        duration: 195,
        rank: 543457,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-b.dzcdn.net/stream/c-b3d37ba91869f1258c6fe021d468d729-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151942,
        readable: true,
        title: 'Inquieta',
        title_short: 'Inquieta',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151942',
        duration: 217,
        rank: 522017,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-7.dzcdn.net/stream/c-743927cdf0a3deab83828941530cce37-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151952,
        readable: true,
        title: 'Cliente Fiel',
        title_short: 'Cliente Fiel',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151952',
        duration: 199,
        rank: 522687,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-7.dzcdn.net/stream/c-713591177e9caf921664c9459472c5a7-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151962,
        readable: true,
        title: 'MorFina Freestyle',
        title_short: 'MorFina Freestyle',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151962',
        duration: 259,
        rank: 521022,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-2.dzcdn.net/stream/c-231fc5be73d8197f84b39b03a0ee92c9-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151972,
        readable: true,
        title: 'Tres pasitos',
        title_short: 'Tres pasitos',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151972',
        duration: 143,
        rank: 509763,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-3.dzcdn.net/stream/c-3fa3d219da3cad8be777c4d1da8e3088-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151982,
        readable: true,
        title: 'NY',
        title_short: 'NY',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151982',
        duration: 171,
        rank: 480459,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-0.dzcdn.net/stream/c-083f2e60e4aef9c8ea481501ce35746e-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606151992,
        readable: true,
        title: 'Dios Te Guarde',
        title_short: 'Dios Te Guarde',
        title_version: '',
        link: 'https://www.deezer.com/track/2606151992',
        duration: 156,
        rank: 492232,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-5.dzcdn.net/stream/c-53ea6dcad823927aa0cbfd30cf1de2f3-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606152002,
        readable: true,
        title: 'La Banda',
        title_short: 'La Banda',
        title_version: '',
        link: 'https://www.deezer.com/track/2606152002',
        duration: 196,
        rank: 475516,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-0.dzcdn.net/stream/c-0d8afe063e4be530999279607ad964a3-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606152012,
        readable: true,
        title: 'Desperté Contigo',
        title_short: 'Desperté Contigo',
        title_version: '',
        link: 'https://www.deezer.com/track/2606152012',
        duration: 249,
        rank: 493295,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-d.dzcdn.net/stream/c-dc8590eb34528c89fb776d195db5d678-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606152022,
        readable: true,
        title: 'Gato de Noche',
        title_short: 'Gato de Noche',
        title_version: '',
        link: 'https://www.deezer.com/track/2606152022',
        duration: 227,
        rank: 467887,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-8.dzcdn.net/stream/c-8ed17ceb28298554e4b0cfc63bdb71d5-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606152032,
        readable: true,
        title: 'Escándalo',
        title_short: 'Escándalo',
        title_version: '',
        link: 'https://www.deezer.com/track/2606152032',
        duration: 166,
        rank: 446951,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-3.dzcdn.net/stream/c-3bf4e13f8629ebead6c97526ee1313b3-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
      {
        id: 2606152042,
        readable: true,
        title: 'Azúcar Negra',
        title_short: 'Azúcar Negra',
        title_version: '',
        link: 'https://www.deezer.com/track/2606152042',
        duration: 173,
        rank: 477790,
        explicit_lyrics: true,
        explicit_content_lyrics: 1,
        explicit_content_cover: 2,
        preview:
          'https://cdns-preview-5.dzcdn.net/stream/c-56e3a1c91da723e2b7594924f15d79bd-1.mp3',
        md5_image: '9b9a99746919c4373ff74d0c4c641d46',
        artist: {
          id: 326042,
          name: 'Ñengo Flow',
          tracklist: 'https://api.deezer.com/artist/326042/top?limit=50',
          type: 'artist',
        },
        album: {
          id: 530364182,
          title: 'RealG4Life Vol. 4',
          cover: 'https://api.deezer.com/album/530364182/image',
          cover_small:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/56x56-000000-80-0-0.jpg',
          cover_medium:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/250x250-000000-80-0-0.jpg',
          cover_big:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/500x500-000000-80-0-0.jpg',
          cover_xl:
            'https://e-cdns-images.dzcdn.net/images/cover/9b9a99746919c4373ff74d0c4c641d46/1000x1000-000000-80-0-0.jpg',
          md5_image: '9b9a99746919c4373ff74d0c4c641d46',
          tracklist: 'https://api.deezer.com/album/530364182/tracks',
          type: 'album',
        },
        type: 'track',
      },
    ],
  },
};

export const getArtistResult: Artist = {
  id: 2385,
  name: 'Jon B.',
  link: 'https://www.deezer.com/artist/2385',
  share:
    'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
  picture: 'https://api.deezer.com/artist/2385/image',
  picture_small:
    'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
  picture_medium:
    'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
  picture_big:
    'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
  picture_xl:
    'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
  nb_album: 11,
  nb_fan: 4154,
  radio: true,
  tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
  type: 'artist',
};

export const getArtistTopTracksResult: ArtistTopTracks = {
  data: [
    {
      id: 1187076,
      readable: true,
      title: "They Don't Know",
      title_short: "They Don't Know",
      title_version: '',
      link: 'https://www.deezer.com/track/1187076',
      duration: 274,
      rank: 390810,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-a.dzcdn.net/stream/c-acfd09ffe5b3bb6dd7e6747020e793cb-2.mp3',
      contributors: [
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
      artist: {
        id: 2385,
        name: 'Jon B.',
        tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 126726,
        title: 'Jon B - Greatest Hits...Are U Still Down?',
        cover: 'https://api.deezer.com/album/126726/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/1000x1000-000000-80-0-0.jpg',
        md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
        tracklist: 'https://api.deezer.com/album/126726/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 1187078,
      readable: true,
      title: 'Are U Still Down?',
      title_short: 'Are U Still Down?',
      title_version: '',
      link: 'https://www.deezer.com/track/1187078',
      duration: 266,
      rank: 327305,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-f.dzcdn.net/stream/c-f3744b51fc6d6a4ae9d577c779801d0e-2.mp3',
      contributors: [
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
      artist: {
        id: 2385,
        name: 'Jon B.',
        tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 126726,
        title: 'Jon B - Greatest Hits...Are U Still Down?',
        cover: 'https://api.deezer.com/album/126726/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/1000x1000-000000-80-0-0.jpg',
        md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
        tracklist: 'https://api.deezer.com/album/126726/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 7955942,
      readable: true,
      title: 'Someone to Love',
      title_short: 'Someone to Love',
      title_version: '',
      link: 'https://www.deezer.com/track/7955942',
      duration: 272,
      rank: 309576,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-2.dzcdn.net/stream/c-215df6ffe271deda393e12c553ab2917-5.mp3',
      contributors: [
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
        {
          id: 270,
          name: 'Babyface',
          link: 'https://www.deezer.com/artist/270',
          share:
            'https://www.deezer.com/artist/270?utm_source=deezer&utm_content=artist-270&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/270/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/cf676cbd7fc6ca8dd4b4b4597e7b17f5/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/cf676cbd7fc6ca8dd4b4b4597e7b17f5/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/cf676cbd7fc6ca8dd4b4b4597e7b17f5/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/cf676cbd7fc6ca8dd4b4b4597e7b17f5/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/270/top?limit=50',
          type: 'artist',
          role: 'Featured',
        },
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Featured',
        },
      ],
      md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
      artist: {
        id: 2385,
        name: 'Jon B.',
        tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 126726,
        title: 'Jon B - Greatest Hits...Are U Still Down?',
        cover: 'https://api.deezer.com/album/126726/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/fffa77f41453c5adc19598d4b0e7d4b6/1000x1000-000000-80-0-0.jpg',
        md5_image: 'fffa77f41453c5adc19598d4b0e7d4b6',
        tracklist: 'https://api.deezer.com/album/126726/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 625525,
      readable: true,
      title: "Don't Talk",
      title_short: "Don't Talk",
      title_version: '',
      link: 'https://www.deezer.com/track/625525',
      duration: 285,
      rank: 402533,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-4.dzcdn.net/stream/c-4123a46d6ac6935f7b3566c5aa5433e7-4.mp3',
      contributors: [
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: '3ad8aacc117e712be54e035bb8db8720',
      artist: {
        id: 2385,
        name: 'Jon B.',
        tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 78367,
        title: 'Pleasures U Like',
        cover: 'https://api.deezer.com/album/78367/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/3ad8aacc117e712be54e035bb8db8720/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/3ad8aacc117e712be54e035bb8db8720/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/3ad8aacc117e712be54e035bb8db8720/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/3ad8aacc117e712be54e035bb8db8720/1000x1000-000000-80-0-0.jpg',
        md5_image: '3ad8aacc117e712be54e035bb8db8720',
        tracklist: 'https://api.deezer.com/album/78367/tracks',
        type: 'album',
      },
      type: 'track',
    },
    {
      id: 13177370,
      readable: true,
      title: 'I Do (Whatcha Say Boo) (Album Version)',
      title_short: 'I Do (Whatcha Say Boo)',
      title_version: '(Album Version)',
      link: 'https://www.deezer.com/track/13177370',
      duration: 286,
      rank: 231756,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 2,
      preview:
        'https://cdns-preview-8.dzcdn.net/stream/c-83a64d624280ee45ec21cf33be346755-5.mp3',
      contributors: [
        {
          id: 2385,
          name: 'Jon B.',
          link: 'https://www.deezer.com/artist/2385',
          share:
            'https://www.deezer.com/artist/2385?utm_source=deezer&utm_content=artist-2385&utm_term=0_1704686639&utm_medium=web',
          picture: 'https://api.deezer.com/artist/2385/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/bd66420ed20d4f93ebb27933612eaaa8/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: 'c033f5a8c4c9c2594224f13b897e7f6f',
      artist: {
        id: 2385,
        name: 'Jon B.',
        tracklist: 'https://api.deezer.com/artist/2385/top?limit=50',
        type: 'artist',
      },
      album: {
        id: 1208747,
        title: 'COOL RELAX',
        cover: 'https://api.deezer.com/album/1208747/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/c033f5a8c4c9c2594224f13b897e7f6f/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/c033f5a8c4c9c2594224f13b897e7f6f/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/c033f5a8c4c9c2594224f13b897e7f6f/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/c033f5a8c4c9c2594224f13b897e7f6f/1000x1000-000000-80-0-0.jpg',
        md5_image: 'c033f5a8c4c9c2594224f13b897e7f6f',
        tracklist: 'https://api.deezer.com/album/1208747/tracks',
        type: 'album',
      },
      type: 'track',
    },
  ],
  total: 60,
  next: 'https://api.deezer.com/artist/2385/top?index=5',
};

export const getArtistPlaylistsResults: Playlists = {
  data: [
    {
      id: 8869955482,
      title: 'Slow Jam Essentials',
      public: true,
      link: 'https://www.deezer.com/playlist/8869955482',
      picture: 'https://api.deezer.com/playlist/8869955482/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/22f34495578d15d4ea93e71d5758c383/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/22f34495578d15d4ea93e71d5758c383/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/22f34495578d15d4ea93e71d5758c383/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/22f34495578d15d4ea93e71d5758c383/1000x1000-000000-80-0-0.jpg',
      checksum: '0754c260fbd555ab2d2cf8093ad9cd12',
      tracklist: 'https://api.deezer.com/playlist/8869955482/tracks',
      creation_date: '2021-03-23 07:25:32',
      md5_image: '22f34495578d15d4ea93e71d5758c383',
      picture_type: 'playlist',
      user: {
        id: 2928001764,
        name: 'Fábio - Deezer R&B Editor',
        tracklist: 'https://api.deezer.com/user/2928001764/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 1182264101,
      title: '90s R&B Classics',
      public: true,
      link: 'https://www.deezer.com/playlist/1182264101',
      picture: 'https://api.deezer.com/playlist/1182264101/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/c307d3fac82ddb9019ea340300aa543f/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/c307d3fac82ddb9019ea340300aa543f/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/c307d3fac82ddb9019ea340300aa543f/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/c307d3fac82ddb9019ea340300aa543f/1000x1000-000000-80-0-0.jpg',
      checksum: 'b1bd0efda3f46a14174393620d7b39ee',
      tracklist: 'https://api.deezer.com/playlist/1182264101/tracks',
      creation_date: '2015-03-18 12:53:43',
      md5_image: 'c307d3fac82ddb9019ea340300aa543f',
      picture_type: 'playlist',
      user: {
        id: 100831451,
        name: 'Filtr',
        tracklist: 'https://api.deezer.com/user/100831451/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 6312317024,
      title: 'Années 90-2000 R&B : Tubes 90-2000s année 90-2000 RnB',
      public: true,
      link: 'https://www.deezer.com/playlist/6312317024',
      picture: 'https://api.deezer.com/playlist/6312317024/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/61cd99e3568eae297b02a82ab5a74c49/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/61cd99e3568eae297b02a82ab5a74c49/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/61cd99e3568eae297b02a82ab5a74c49/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/61cd99e3568eae297b02a82ab5a74c49/1000x1000-000000-80-0-0.jpg',
      checksum: '9babb28bd90fcb5e64568738ca80cb33',
      tracklist: 'https://api.deezer.com/playlist/6312317024/tracks',
      creation_date: '2019-08-01 06:32:18',
      md5_image: '61cd99e3568eae297b02a82ab5a74c49',
      picture_type: 'playlist',
      user: {
        id: 16867197,
        name: 'Filtr France',
        tracklist: 'https://api.deezer.com/user/16867197/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 2954752526,
      title: 'Throwback Slow Jams',
      public: true,
      link: 'https://www.deezer.com/playlist/2954752526',
      picture: 'https://api.deezer.com/playlist/2954752526/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/547b359bbde2305d04904829857c4c39/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/547b359bbde2305d04904829857c4c39/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/547b359bbde2305d04904829857c4c39/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/547b359bbde2305d04904829857c4c39/1000x1000-000000-80-0-0.jpg',
      checksum: '2eaeadd3a8dc1bf818180cccebfe0076',
      tracklist: 'https://api.deezer.com/playlist/2954752526/tracks',
      creation_date: '2017-03-27 14:22:21',
      md5_image: '547b359bbde2305d04904829857c4c39',
      picture_type: 'playlist',
      user: {
        id: 594680711,
        name: 'DigsterPlaylists',
        tracklist: 'https://api.deezer.com/user/594680711/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 620135106,
      title: '❤ เพลงรักโดนใจ',
      public: true,
      link: 'https://www.deezer.com/playlist/620135106',
      picture: 'https://api.deezer.com/playlist/620135106/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/c609c8448511921596bad05cfce1266f/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/c609c8448511921596bad05cfce1266f/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/c609c8448511921596bad05cfce1266f/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/c609c8448511921596bad05cfce1266f/1000x1000-000000-80-0-0.jpg',
      checksum: '87379d4ccd7a20e209a3f27364a922b6',
      tracklist: 'https://api.deezer.com/playlist/620135106/tracks',
      creation_date: '2013-11-06 12:00:00',
      md5_image: 'c609c8448511921596bad05cfce1266f',
      picture_type: 'playlist',
      user: {
        id: 325388242,
        name: 'Songspice on Deezer',
        tracklist: 'https://api.deezer.com/user/325388242/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 61214282,
      title: 'Musique des années 90 - 2000 RnB, R&B',
      public: true,
      link: 'https://www.deezer.com/playlist/61214282',
      picture: 'https://api.deezer.com/playlist/61214282/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/11a066dbdf5824a87079f87e3a34adf8/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/11a066dbdf5824a87079f87e3a34adf8/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/11a066dbdf5824a87079f87e3a34adf8/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/11a066dbdf5824a87079f87e3a34adf8/1000x1000-000000-80-0-0.jpg',
      checksum: '9e58fdbc3c8be013f3f8dfc30bab1a3e',
      tracklist: 'https://api.deezer.com/playlist/61214282/tracks',
      creation_date: '2017-06-08 20:45:40',
      md5_image: '11a066dbdf5824a87079f87e3a34adf8',
      picture_type: 'playlist',
      user: {
        id: 16867197,
        name: 'Filtr France',
        tracklist: 'https://api.deezer.com/user/16867197/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 7483684284,
      title: 'Certified by Skepta, Chip & Young Adz',
      public: true,
      link: 'https://www.deezer.com/playlist/7483684284',
      picture: 'https://api.deezer.com/playlist/7483684284/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/7647236138fb21a96146009c711be25c/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/7647236138fb21a96146009c711be25c/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/7647236138fb21a96146009c711be25c/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/7647236138fb21a96146009c711be25c/1000x1000-000000-80-0-0.jpg',
      checksum: '96b02c5fac12584be27629dd6c7a1e18',
      tracklist: 'https://api.deezer.com/playlist/7483684284/tracks',
      creation_date: '2020-04-06 05:57:03',
      md5_image: '7647236138fb21a96146009c711be25c',
      picture_type: 'playlist',
      user: {
        id: 1483650282,
        name: 'Deezer By Artists',
        tracklist: 'https://api.deezer.com/user/1483650282/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 6299303284,
      title: 'Blind Test : RnB année 90-2000 R&B',
      public: true,
      link: 'https://www.deezer.com/playlist/6299303284',
      picture: 'https://api.deezer.com/playlist/6299303284/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/92929628a79ba5551501720b107c6456/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/92929628a79ba5551501720b107c6456/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/92929628a79ba5551501720b107c6456/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/92929628a79ba5551501720b107c6456/1000x1000-000000-80-0-0.jpg',
      checksum: 'f5c1136d745c4b9549de54d0b1e7aeb2',
      tracklist: 'https://api.deezer.com/playlist/6299303284/tracks',
      creation_date: '2019-07-30 09:32:30',
      md5_image: '92929628a79ba5551501720b107c6456',
      picture_type: 'playlist',
      user: {
        id: 16867197,
        name: 'Filtr France',
        tracklist: 'https://api.deezer.com/user/16867197/flow',
        type: 'user',
      },
      type: 'playlist',
    },
    {
      id: 7089828024,
      title: 'Karaoke RnB : années 90-2000 R&B',
      public: true,
      link: 'https://www.deezer.com/playlist/7089828024',
      picture: 'https://api.deezer.com/playlist/7089828024/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/playlist/67a19d3ca99d5f8bf2bfc305210d500b/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/playlist/67a19d3ca99d5f8bf2bfc305210d500b/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/playlist/67a19d3ca99d5f8bf2bfc305210d500b/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/playlist/67a19d3ca99d5f8bf2bfc305210d500b/1000x1000-000000-80-0-0.jpg',
      checksum: 'ed9b8619623c5f3f19f38099f353ac4b',
      tracklist: 'https://api.deezer.com/playlist/7089828024/tracks',
      creation_date: '2020-01-09 05:44:56',
      md5_image: '67a19d3ca99d5f8bf2bfc305210d500b',
      picture_type: 'playlist',
      user: {
        id: 16867197,
        name: 'Filtr France',
        tracklist: 'https://api.deezer.com/user/16867197/flow',
        type: 'user',
      },
      type: 'playlist',
    },
  ],
  total: 9,
};

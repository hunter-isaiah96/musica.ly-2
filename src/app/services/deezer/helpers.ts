import {
  getAlbumResult,
  getArtistPlaylistsResults,
  getArtistResult,
  getArtistTopTracksResult,
  getChartResults,
  getTrackResult,
  getTracksResults,
} from './test-data';

export type APICallName =
  | 'getTracks'
  | 'getChart'
  | 'getTrack'
  | 'getAlbum'
  | 'getArtist'
  | 'getArtistTopTracks'
  | 'getArtistPlaylists';

export type APICall = {
  testName: string;
  func: APICallName;
  results: any;
  args: any[];
};

const artistId = 2385;
const trackId = 2565567572;
const albumId = 530364182;

export const apiCalls: APICall[] = [
  {
    testName: 'fetches a track from getTrack()',
    func: 'getTrack',
    results: getTrackResult,
    args: [trackId],
  },
  {
    testName: 'fetches tracks from getTracks()',
    func: 'getTracks',
    results: getTracksResults,
    args: [artistId],
  },
  {
    testName: 'fetches the chart from getChart()',
    func: 'getChart',
    results: getChartResults,
    args: [],
  },
  {
    testName: 'fetches an album from getAlbum()',
    func: 'getAlbum',
    results: getAlbumResult,
    args: [albumId],
  },
  {
    testName: 'fetches an artist from getArtist()',
    func: 'getArtist',
    results: getArtistResult,
    args: [artistId],
  },
  {
    testName: 'fetches artists top tracks from getArtistTopTracks()',
    func: 'getArtistTopTracks',
    results: getArtistTopTracksResult,
    args: [artistId],
  },
  {
    testName: 'fetches artist playlists from getArtistPlaylists()',
    func: 'getArtistPlaylists',
    results: getArtistPlaylistsResults,
    args: [artistId],
  },
];

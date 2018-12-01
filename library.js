
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name) {
    this.name= name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRating() {
    let totalRating = 1;
    this.tracks.forEach((track) => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }

  totalDuration() {
    let totalDuration = 1;
    this.tracks.forEach((track) => {
      totalDuration += track.length;
    });
    return totalDuration;
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const library1 = new Library('Library1', 'Creator1');

const playlist1 = new Playlist('Playlist1');
const playlist2 = new Playlist('Playlist2');
const playlist3 = new Playlist('Playlist3');

const track1 = new Track('Track1', 3, 70);
const track2 = new Track('Track1', 4, 324);
const track3 = new Track('Track2', 3, 243);
const track4 = new Track('Track3', 2, 265);
const track5 = new Track('Track4', 5, 1345);
const track6 = new Track('Track5', 3, 56);
const track7 = new Track('Track6', 4, 3455);
const track8 = new Track('Track7', 3, 234);
const track9 = new Track('Track8', 2, 453);

playlist1.addTrack(track1);
playlist1.addTrack(track4);
playlist1.addTrack(track2);
playlist1.addTrack(track5);
playlist1.addTrack(track6);

playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.addTrack(track5);

playlist2.addTrack(track6);
playlist2.addTrack(track7);
playlist2.addTrack(track8);

library1.addPlaylist(playlist1);
library1.addPlaylist(playlist1);
library1.addPlaylist(playlist2);

library1.playlists.forEach((playlist) => {
  console.log();
  console.log(playlist.name);
  console.log(`Avegrate Rating: ${playlist.overallRating()}`);
  console.log(`Total Duration: ${playlist.totalDuration()}`);
})




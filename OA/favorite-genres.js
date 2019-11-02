//Amazon | OA 2019 | Favorite Genres

(function main() {
  const userSongs = {
    David: ["song1", "song2", "song3", "song4", "song8"],
    Emma: ["song5", "song6", "song7"]
  };

  const songGenres = {
    Rock: ["song1", "song3"],
    Dubstep: ["song7"],
    Techno: ["song2", "song4"],
    Pop: ["song5", "song6"],
    Jazz: ["song8", "song9"]
  };
  const users = Object.entries(userSongs);
  let output = {};

  // Compute genre count for each user [songs]
  users.forEach(user => {
    const name = user[0];
    const songs = user[1];

    output[name] = new Map();

    for (song of songs) {
      for (const [genre, list] of Object.entries(songGenres)) {
        if (list.includes(song)) {
          if (!output[name].has(genre)) output[name].set(genre, 1);
          else output[name].set(genre, output[name].get(genre) + 1);
        }
      }
    }
  });
  //console.log(output)

  Object.entries(output).forEach(([name, genre]) => {
    const favorite = Array.from(genre).filter(word => word[1] > 1);
    output[name] = favorite.map(name => name[0]);
  });

  //console.log(output)
})();

/*
// Alternate Option
  function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map(Object.entries(output))
  .forEach(logMapElements);
*/

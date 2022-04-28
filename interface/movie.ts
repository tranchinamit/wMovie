export interface IMovie {
  "item": {
    "created": {
      "user_id": string,
      "user_name": string,
      "time": string,
    },
    "modified": {
      "user_id": string,
      "user_name": string,
      "time": string,
    },
    "_id": string,
    "name": string,
    "origin_name": string,
    "content": string,
    "type": string,
    "status": string,
    "thumb_url": string,
    "is_copyright": string,
    "sub_docquyen": string,
    "trailer_url": string,
    "time": string,
    "episode_current": string,
    "episode_total": string,
    "quality": string,
    "lang": string,
    "notify": string,
    "showtimes": string,
    "slug": string,
    "year": number,
    "view": number,
    "actor": string[],
    "director": string[],
    "category": [
      {
        "id": string,
        "name": string,
        "slug": string,
      },
    ],
    "country": [
      {
        "id": string,
        "name": string,
        "slug": string,
      }
    ]
  },
  "episodes": {
    "_id": string,
    "episode": [
      {
        "server_name": string,
        "server_data": [
          {
            "name": string,
            "slug": string,
            "filename": string,
            "link_embed": string,
            "link_m3u8": string,
          },
        ]
      }
    ]
  }
}
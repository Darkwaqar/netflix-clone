/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onCreateMovie(filter: $filter) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onUpdateMovie(filter: $filter) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie($filter: ModelSubscriptionMovieFilterInput) {
    onDeleteMovie(filter: $filter) {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onCreateSeason(filter: $filter) {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onUpdateSeason(filter: $filter) {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason($filter: ModelSubscriptionSeasonFilterInput) {
    onDeleteSeason(filter: $filter) {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onCreateEpisode(filter: $filter) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onUpdateEpisode(filter: $filter) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode($filter: ModelSubscriptionEpisodeFilterInput) {
    onDeleteEpisode(filter: $filter) {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

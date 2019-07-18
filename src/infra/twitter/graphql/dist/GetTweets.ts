export const GetTweets = `
query GetTweets($tweetsBefore: String, $tweetsAfter: String, $tweetsFirst: Int, $tweetsLast: Int) {
  getTweets(before: $tweetsBefore, after: $tweetsAfter, first: $tweetsFirst, last: $tweetsLast) {
    ...TweetConnection
  }
}

fragment TweetConnection on TweetConnection {
  edges {
    node {
      ...Tweet
    }
  }
  pageInfo {
    ...PageInfo
  }
}

fragment Tweet on Tweet {
  id
  body
  tweetedAt
  retweetCount
  likeCount
  creatorId
  creator {
    ...User
  }
}

fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}

fragment User on User {
  id
  twitterId
  joinedAt
  iconUrl
}

`;

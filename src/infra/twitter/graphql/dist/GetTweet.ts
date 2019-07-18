export const GetTweet = `
query GetTweet($id: ID!, $retweetsBefore: String, $retweetsAfter: String, $retweetsFirst: Int, $retweetsLast: Int, $likesBefore: String, $likesAfter: String, $likesFirst: Int, $likesLast: Int) {
  getTweet(id: $id) {
    ...Tweet
    retweets(before: $retweetsBefore, after: $retweetsAfter, first: $retweetsFirst, last: $retweetsLast) {
      ...RetweetConnection
    }
    likes(before: $likesBefore, after: $likesAfter, first: $likesFirst, last: $likesLast) {
      ...LikeTweetConnection
    }
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

fragment RetweetConnection on RetweetConnection {
  edges {
    node {
      ...Retweet
    }
  }
  pageInfo {
    ...PageInfo
  }
}

fragment LikeTweetConnection on LikeTweetConnection {
  edges {
    node {
      ...LikeTweet
    }
  }
  pageInfo {
    ...PageInfo
  }
}

fragment User on User {
  id
  twitterId
  joinedAt
  iconUrl
}

fragment Retweet on Retweet {
  id
  userId
  tweetId
  retweetedAt
}

fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}

fragment LikeTweet on LikeTweet {
  id
  userId
  tweetId
  likedAt
}

`;

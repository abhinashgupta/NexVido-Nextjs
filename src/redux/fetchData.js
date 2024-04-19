import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const youtubeApi = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "e32214ffffmsh92ee0226ff9ced8p1443fcjsn827b89dce3e5"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (category) =>
        `/search?part=snippet&q=${category}&type=video&maxResults=100`,
    }),
    getVideosBySearch: builder.query({
      query: (searchTerm) =>
        `/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,
    }),
    getChannelDetails: builder.query({
      query: (id) => `channels?part="snippet&id=${id}`,
    }),
    getChannelVideos: builder.query({
      query: (id) =>
        `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
    }),
    getVideosDetails: builder.query({
      query: (id) =>
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
    }),
    getSuggestedVideos: builder.query({
      query: (id) =>
        `search?relatedToVideoId=${id}&part=contentDetails%2Csnippet%2Cstatistics&type=video&maxResults=50`,
    }),
    getVideoComments: builder.query({
      query: (id) => `commentThreads?part=snippet&videoId=${id}&maxResults=100`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetVideosBySearchQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
  useGetVideosDetailsQuery,
  useGetSuggestedVideosQuery,
  useGetVideoCommentsQuery,
} = youtubeApi;


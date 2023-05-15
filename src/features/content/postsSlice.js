import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsList: [
    { title: "Card 1", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 1 , joooooo", tags: [] },
    { title: "Card 2", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 21 , joooooo", tags: [] },
    { title: "Card 3", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 3, joooooo", tags: [] },
    { title: "Card 4", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement ,4 joooooo", tags: [] },
    { title: "Card 5", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement , 5joooooo", tags: [] },
    { title: "Card 6", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 6 , joooooo", tags: [] },
    { title: "Card 7", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 7, joooooo", tags: [] },
    { title: "Card 8", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 8, joooooo", tags: [] },
    { title: "Card 9", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 9, joooooo", tags: [] },
    { title: "Card 10", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 10  , joooooo", tags: [] },
    { title: "Card 11", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 11 , joooooo", tags: [] },
    { title: "Card 13", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 13, joooooo", tags: [] },
    { title: "Card 14", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 14 , joooooo", tags: [] },
    { title: "Card 15", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement15 , joooooo", tags: [] },
    { title: "Card 16", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 16 , joooooo", tags: [] },
    { title: "Card 17", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 17 , joooooo", tags: [] },
    { title: "Card 18", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 18 , joooooo", tags: [] },
    { title: "Card 20", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 19 , joooooo", tags: [] },
    { title: "Card 20", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 20 , joooooo", tags: [] },
    { title: "Card 21", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 21 , joooooo", tags: [] },
    { title: "Card 22", imageUrl: "https://random.imagecdn.app/100/100", postId: '', caption: "captoin for thils post is a lorem text , so just for testing and developement 22, joooooo", tags: [] },
  ],
  isLoading: false,

};

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {}

})

export default postsSlice.reducer;
// export const { } = postSlice.actions;
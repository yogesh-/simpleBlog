// likeStore.js
import {create} from 'zustand';

const useLikeStore = create((set) => ({
  likeCount: 0,
  initializeLikeCount: async (id) => {
    try {
      // Fetch the like count from the backend API
      const response = await fetch(`http://localhost:3001/api/post/${id}`)
      const data = await response.json();
      // Set the initial like count from the API response
      console.log(data[0].likes)
      set({ likeCount: data[0].likes });
    } catch (error) {
      console.error('Error initializing like count:', error);
    }
  },
  updateLikeCount: async (likes,id) => {
    try {
      // Make an API call to increment the like count on the backend
      const response = await fetch(`http://localhost:3001/api/update-like/${likes+1}/${id}`); // Replace with your API endpoint
      const data = await response.json();
      // Update the Zustand state with the incremented like count from the API response
      set({ likeCount: data.likes });
    } catch (error) {
      console.error('Error updating like count:', error);
    }
  },
}));

export default useLikeStore;

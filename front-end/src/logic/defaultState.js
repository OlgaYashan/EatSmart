const state = {
  recipes: {
    recipes: [],
    loading: false,
    error: null
  },
  user:{
    user:{
      login:"",
      password:"",
      name:"",
      avatarLink:"http://trinitynews.ie/wp-content/uploads/2017/02/hijab.png"
      
    },
    loading: false,
    error: null
  },
  products:{
    products: [],
    loading: false,
    error: null
  }
};

export default state;

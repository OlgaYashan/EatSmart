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
      avatarLink:""
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
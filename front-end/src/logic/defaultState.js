const state = {
  recipes: {
    recipes: [],
    loading: false,
    error: null
  },
  component:{
    components: [],
    loading: false,
    error: null,
    component:{
      name:"",
      type:"",
      description:""
    }

  },
  diet:{
    diets:[],
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
    error: null,
    product:{      
    }
  }
};

export default state;

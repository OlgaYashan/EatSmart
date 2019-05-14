import { loadComponents, addComponent, deleteComponent, updateComponent } from "../../logic/component/actions";

export function mapStateToProps(state) {
  const { user } = state.user;
  const {components, component} = state.component;

  return { 
    user,
    components
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadComponents(){
      dispatch(loadComponents())
    },
    addComponent(name, type, description){
      dispatch(addComponent(name, type, description))
    },
    deleteComponent(component){
      dispatch(deleteComponent(component))
    },
    updateComponent(name,component){
      dispatch(updateComponent(name,component))
    }
  };
}

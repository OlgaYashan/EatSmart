import { loadComponents } from "../../logic/component/actions";

export function mapStateToProps(state) {
  const {components, loading, error } = state.component;

  return {
    components,
    loading,
    error
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadComponents() {
      dispatch(loadComponents());
      
    }
  };
}

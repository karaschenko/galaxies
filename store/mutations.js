const setPageTitle = (state, payload) => {
    console.log(payload);
    state.pageTitle = payload;
}

export default {
    setPageTitle,
}
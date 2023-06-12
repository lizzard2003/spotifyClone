export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQCxGARUGOoSoU2eXFEsSfSkqVl-hQh7JVmT_mRjwWK7vAd85bZeTSWIW-7tSb-p1KUGbajuv9Kv9ZHRD4KB9SZWFZ1eST_F839zar_-9pd_thVXLdQZqkQiLyax_SU3jSIjy0znl0pqeAAsbpotygAeRGawFtcP8S6mJhOmTGHQNGYO1EneDkxGp4L8H8I"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
};

export default reducer;

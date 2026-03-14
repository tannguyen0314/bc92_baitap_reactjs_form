const initialState = {
    danhSachGheDangDat: []
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(ghe => ghe.soGhe === action.ghe.soGhe);
            
            if (index !== -1) {

                danhSachGheUpdate.splice(index, 1);
            } else {

                danhSachGheUpdate.push(action.ghe);
            }
            return { ...state, danhSachGheDangDat: danhSachGheUpdate };
        }
        default:
            return state;
    }
};
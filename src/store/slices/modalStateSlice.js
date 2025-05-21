import { createSlice } from "@reduxjs/toolkit";

const modalState = createSlice({
    name: "modalState",
    initialState: {
        addWidgetModal: {
            value: false,
            category: "CSPM Executive Dashboard",
        },
        customizationModal: {
            value: false,
            category: "CSPM Executive Dashboard",
        },
    },
    reducers: {
        toggleModal: (state, actions) => {
            state[actions.payload.modalToToggle].value =
                !state[actions.payload.modalToToggle].value;
            state[actions.payload.modalToToggle].category = actions.payload
                .category
                ? actions.payload.category
                : "CSPM Executive Dashboard";
        },
    },
});

export const { toggleModal } = modalState.actions;
export default modalState.reducer;
